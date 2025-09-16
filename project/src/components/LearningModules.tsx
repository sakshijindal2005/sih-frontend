import React from 'react';
import { Mountain, Droplets, Flame, Wind, Clock, Star } from 'lucide-react';

export default function LearningModules() {
  const modules = [
    {
      icon: Mountain,
      title: 'Earthquake Safety',
      description: 'Learn Drop, Cover, and Hold techniques with interactive Peter Griffin-style scenarios',
      duration: '45 min',
      difficulty: 'Beginner',
      progress: 85,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50'
    },
    {
      icon: Droplets,
      title: 'Flood Preparedness',
      description: 'Master evacuation routes and flood safety measures for monsoon regions',
      duration: '38 min',
      difficulty: 'Intermediate',
      progress: 62,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Flame,
      title: 'Fire Safety Protocols',
      description: 'Practice fire evacuation, extinguisher use, and emergency escape planning',
      duration: '50 min',
      difficulty: 'Advanced',
      progress: 34,
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50'
    },
    {
      icon: Wind,
      title: 'Cyclone Response',
      description: 'Coastal disaster management and hurricane safety for vulnerable regions',
      duration: '42 min',
      difficulty: 'Intermediate',
      progress: 78,
      color: 'from-gray-500 to-slate-600',
      bgColor: 'from-gray-50 to-slate-50'
    }
  ];

  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Gamified Learning Experience</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Interactive Learning Modules
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn disaster preparedness through engaging, Peter Griffin-style gamified modules. 
            Each lesson is designed to be memorable, practical, and fun for students of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${module.bgColor} p-8 border border-white/50 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${module.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1 bg-white/60 rounded-full px-3 py-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700 font-medium">{module.duration}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    module.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {module.difficulty}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                {module.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {module.description}
              </p>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm font-bold text-gray-800">{module.progress}%</span>
                </div>
                <div className="w-full bg-white/60 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${module.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${module.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                Continue Learning
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Peter Griffin Style Learning
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our unique gamified approach uses humor, interactive scenarios, and memorable 
                characters to make disaster preparedness education engaging and effective. 
                Students learn through immersive storytelling and practical simulations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Interactive storytelling with memorable characters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Gamified challenges and achievement systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Real-world scenario-based learning</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8923080/pexels-photo-8923080.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Interactive learning experience"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}