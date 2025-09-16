import React from 'react';
import { Shield, Menu, Settings } from 'lucide-react';

interface HeaderProps {
  isAdminView: boolean;
  setIsAdminView: (view: boolean) => void;
}

export default function Header({ isAdminView, setIsAdminView }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/20 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                DisasterEd
              </h1>
              <p className="text-xs text-gray-500">Safety Through Learning</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Features
            </a>
            <a href="#modules" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Learning
            </a>
            <a href="#drills" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Drills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Emergency
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAdminView(!isAdminView)}
              className={`p-2 rounded-xl transition-all ${
                isAdminView
                  ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg'
                  : 'bg-white/40 text-gray-700 hover:bg-white/60'
              }`}
            >
              <Settings className="w-5 h-5" />
            </button>
            
            <button className="md:hidden p-2 rounded-xl bg-white/40 text-gray-700 hover:bg-white/60 transition-all">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}