import React from 'react';
import { Play, BookOpen, Users, AlertTriangle } from 'lucide-react';
import heroImage from '../assets/images/heroImage.jpeg';
export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-red-100/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">Critical for Indian Schools</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-red-700 to-orange-600 bg-clip-text text-transparent">
                Disaster Ready
              </span>
              <br />
              <span className="text-gray-800">Schools & Colleges</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Interactive disaster management education platform with gamified learning, 
              virtual drills, and region-specific preparedness training for Indian educational institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Start Learning</span>
                </div>
              </button>
              
              <button className="px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold border border-white/50 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>View Modules</span>
                </div>
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Schools Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">15</div>
                <div className="text-sm text-gray-600">Disaster Types</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl">
              <img 
               src={heroImage} 
               alt="Students learning disaster preparedness"
               className="w-full h-64 object-cover rounded-2xl mb-6"
                    />
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Interactive Learning</h3>
                    <p className="text-sm text-gray-600">Gamified disaster education modules</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-green-700">Preparedness Score</span>
                    <span className="text-sm font-bold text-green-700">87%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}