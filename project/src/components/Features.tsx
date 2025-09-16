import React from 'react';
import { 
  BookOpen, 
  Zap, 
  Globe, 
  Users, 
  Shield, 
  MessageCircle,
  BarChart3,
  Smartphone
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Learning Modules',
      description: 'Gamified Peter Griffin-style educational content covering earthquakes, floods, fires, and regional disasters.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Virtual Emergency Drills',
      description: 'Realistic simulation scenarios to practice evacuation procedures and emergency responses.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Region-Specific Alerts',
      description: 'Localized disaster information and preparedness guidelines tailored for Indian geographical regions.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Community Integration',
      description: 'Connect with local disaster response teams, share experiences, and build preparedness networks.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Safety Protocols',
      description: 'Comprehensive safety checklists and emergency procedures for different disaster scenarios.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Real-time Communication',
      description: 'Emergency messaging system for instant alerts and coordination during crisis situations.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Detailed analytics on learning progress, drill participation, and preparedness scores.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for smartphones and tablets, ensuring accessibility across all devices.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Comprehensive Safety Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything schools and colleges need to build a culture of disaster preparedness 
            through engaging, interactive, and practical learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Make Your Institution Disaster-Ready?
          </h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of schools and colleges across India in building safer, more prepared communities.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold hover:bg-red-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}