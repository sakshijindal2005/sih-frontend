import React from 'react';
import { Phone, MapPin, Clock, AlertTriangle, Guitar as Hospital, Shield } from 'lucide-react';

export default function EmergencyContacts() {
  const emergencyServices = [
    {
      icon: Phone,
      name: 'National Emergency Helpline',
      number: '112',
      description: 'Single emergency number for all emergencies',
      color: 'from-red-500 to-red-600',
      available: '24/7'
    },
    {
      icon: Shield,
      name: 'Police Emergency',
      number: '100',
      description: 'Police assistance and law enforcement',
      color: 'from-blue-500 to-blue-600',
      available: '24/7'
    },
    {
      icon: Hospital,
      name: 'Medical Emergency',
      number: '108',
      description: 'Ambulance and medical emergency services',
      color: 'from-green-500 to-green-600',
      available: '24/7'
    },
    {
      icon: AlertTriangle,
      name: 'Fire Emergency',
      number: '101',
      description: 'Fire department and rescue services',
      color: 'from-orange-500 to-red-500',
      available: '24/7'
    },
    {
      icon: Phone,
      name: 'Disaster Management',
      number: '1078',
      description: 'National Disaster Management Authority',
      color: 'from-purple-500 to-purple-600',
      available: '24/7'
    },
    {
      icon: Phone,
      name: 'Women Helpline',
      number: '1091',
      description: 'Women in distress helpline',
      color: 'from-pink-500 to-pink-600',
      available: '24/7'
    }
  ];

  const localContacts = [
    { name: 'School Principal', role: 'Emergency Coordinator', phone: '+91 98765 43210' },
    { name: 'Safety Officer', role: 'Fire Safety Lead', phone: '+91 98765 43211' },
    { name: 'Medical Officer', role: 'First Aid Coordinator', phone: '+91 98765 43212' },
    { name: 'Local Police Station', role: 'Area Officer', phone: '+91 98765 43213' }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">Critical Information</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Emergency Contacts
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick access to all essential emergency numbers and local contacts. 
            Save these numbers and ensure all students and staff are familiar with them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {emergencyServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-1 bg-green-100 rounded-full px-2 py-1">
                  <Clock className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-700 font-medium">{service.available}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">{service.number}</div>
                <button className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300`}>
                  Call Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span>Local Emergency Contacts</span>
            </h3>
            
            <div className="space-y-4">
              {localContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800">{contact.name}</div>
                    <div className="text-sm text-gray-600">{contact.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-gray-800">{contact.phone}</div>
                    <button className="text-xs text-blue-600 hover:text-blue-800">Call</button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              Update Local Contacts
            </button>
          </div>
          
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Emergency Communication Hub</h3>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700">System Status: Online</span>
                </div>
                <p className="text-sm text-green-600">All emergency communication channels are operational</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-red-100 hover:bg-red-200 text-red-700 py-3 px-4 rounded-xl font-medium transition-colors">
                  Send Alert
                </button>
                <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 py-3 px-4 rounded-xl font-medium transition-colors">
                  Broadcast
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  In case of emergency, use the emergency communication system to alert all staff and students immediately.
                </p>
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Activate Emergency Protocol
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}