import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LearningModules from './components/LearningModules';
import VirtualDrills from './components/VirtualDrills';
import EmergencyContacts from './components/EmergencyContacts';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <Header isAdminView={isAdminView} setIsAdminView={setIsAdminView} />
      
      {isAdminView ? (
        <AdminDashboard />
      ) : (
        <>
          <Hero />
          <Features />
          <LearningModules />
          <VirtualDrills />
          <EmergencyContacts />
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default App;