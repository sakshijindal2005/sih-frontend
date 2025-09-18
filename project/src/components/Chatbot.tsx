import React, { useState, useRef } from 'react';
import { marked } from 'marked';

const BOT_CONTEXT = `You are a helpful disaster management assistant chatbot for this website. Your job is to answer questions, provide guidance, and offer support related to disaster preparedness, emergency response, and safety tips. Keep your answers concise, friendly, and relevant to disaster management. If a question is not related to disaster management, politely redirect the user.`;

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am your disaster management assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const apiKeyMissing = !GEMINI_API_KEY || GEMINI_API_KEY === '';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;
    if (apiKeyMissing) {
      setMessages(msgs => [...msgs, { sender: 'bot', text: 'API key is missing. Please check your .env setup.' }]);
      return;
    }
    const userMessage = input.trim();
    setMessages(msgs => [...msgs, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [
              { parts: [ { text: `${BOT_CONTEXT}\nUser: ${userMessage}` } ] }
            ]
          })
        }
      );
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not get a response.';
      setMessages(msgs => [...msgs, { sender: 'bot', text: botText }]);
    } catch (err) {
      setMessages(msgs => [...msgs, { sender: 'bot', text: 'Sorry, there was a problem. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed z-50 bottom-6 right-6 bg-white/30 backdrop-blur-lg border border-white/40 shadow-xl rounded-full p-4 flex items-center justify-center hover:bg-white/60 transition-all"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
        onClick={() => setOpen(o => !o)}
        aria-label="Open chatbot"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6366f1" opacity="0.2"/><path d="M8 10h8M8 14h5" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/></svg>
      </button>
      {/* Chatbot Panel */}
      {open && (
        <div
          className="fixed z-50 bottom-24 right-6 w-80 max-w-[90vw] bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-2xl flex flex-col"
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
        >
          <div className="p-4 border-b border-white/30 flex items-center justify-between">
            <span className="font-semibold text-indigo-700">Disaster Management Chatbot</span>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-indigo-600">×</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2" style={{ maxHeight: 320 }}>
            {apiKeyMissing && (
              <div className="text-red-600 text-sm mb-2">API key missing. Please check your .env and restart the dev server.</div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'user' ? (
                  <div className="px-3 py-2 rounded-xl text-sm max-w-[80%] bg-indigo-100 text-indigo-900">{msg.text}</div>
                ) : (
                  <div
                    className="px-3 py-2 rounded-xl text-sm max-w-[80%] bg-white/60 text-gray-800 border border-white/40 markdown-body"
                    dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
                  />
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="p-3 border-t border-white/30 flex gap-2 bg-white/20">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring focus:border-indigo-300 text-gray-800"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading || apiKeyMissing}
              maxLength={200}
              required
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
              disabled={loading || !input.trim() || apiKeyMissing}
            >
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
