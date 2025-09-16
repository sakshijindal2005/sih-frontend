import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-xl border-t border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  DisasterEd
                </h3>
                <p className="text-sm text-gray-500">Safety Through Learning</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Empowering Indian schools and colleges with comprehensive disaster management education 
              through interactive learning, virtual drills, and community preparedness programs.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-sky-100 hover:bg-sky-200 text-sky-600 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#features" className="hover:text-red-600 transition-colors">Features</a></li>
              <li><a href="#modules" className="hover:text-red-600 transition-colors">Learning Modules</a></li>
              <li><a href="#drills" className="hover:text-red-600 transition-colors">Virtual Drills</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Emergency Contacts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@disastered.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1800-DISASTER</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 DisasterEd. All rights reserved. Built for safer schools and colleges.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-red-600 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-red-600 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-red-600 text-sm transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}