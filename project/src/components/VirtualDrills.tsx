import React, { useState } from 'react';
import { Play, Users, MapPin, Timer, Award, Zap } from 'lucide-react';
import earthquakeImage from '../assets/images/earthquake.jpeg'
import fireImage from '../assets/images/fire.jpeg'
import floodImage from '../assets/images/flood.jpeg'
export default function VirtualDrills() {
  const [selectedDrill, setSelectedDrill] = useState(0);

  const drills = [
    {
      title: 'School Earthquake Drill',
      scenario: 'Magnitude 6.5 earthquake during class hours',
      participants: 450,
      duration: '12 min',
      difficulty: 'Intermediate',
      location: 'Multi-story School Building',
      description: 'Practice proper drop, cover, and hold techniques followed by orderly evacuation to designated assembly points.',
      image: earthquakeImage,
    },
    {
      title: 'Fire Evacuation Simulation',
      scenario: 'Laboratory fire with blocked primary exit',
      participants: 280,
      duration: '8 min',
      difficulty: 'Advanced',
      location: 'Science Laboratory Complex',
      description: 'Navigate smoke-filled corridors, use alternate evacuation routes, and coordinate with emergency responders.',
      image: fireImage
    },
    {
      title: 'Flood Emergency Response',
      scenario: 'Rapid flash flooding during monsoon',
      participants: 320,
      duration: '15 min',
      difficulty: 'Beginner',
      location: 'Ground Floor Classrooms',
      description: 'Move to higher floors, establish communication, and organize shelter-in-place procedures.',
      image: floodImage,
    }
  ];

  return (
    <section id="drills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Immersive Virtual Reality</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Virtual Emergency Drills
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice life-saving emergency procedures through realistic virtual simulations. 
            Build muscle memory and confidence without the risks of real emergency scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {drills.map((drill, index) => (
            <div
              key={index}
              onClick={() => setSelectedDrill(index)}
              className={`cursor-pointer group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                selectedDrill === index
                  ? 'ring-4 ring-orange-500 shadow-2xl scale-105'
                  : 'hover:shadow-xl hover:scale-102'
              }`}
            >
              <img
                src={drill.image}
                alt={drill.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-bold mb-2">{drill.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{drill.scenario}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{drill.participants}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Timer className="w-3 h-3" />
                    <span>{drill.duration}</span>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    drill.difficulty === 'Beginner' ? 'bg-green-500' :
                    drill.difficulty === 'Intermediate' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}>
                    {drill.difficulty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                {drills[selectedDrill].title}
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{drills[selectedDrill].location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{drills[selectedDrill].participants} participants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Timer className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{drills[selectedDrill].duration} duration</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {drills[selectedDrill].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  <span>Start Virtual Drill</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 bg-white/80 text-gray-800 px-8 py-4 rounded-2xl font-semibold border border-white/50 hover:bg-white transition-all duration-300">
                  <Award className="w-5 h-5" />
                  <span>View Results</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={drills[selectedDrill].image}
                alt={drills[selectedDrill].title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-2xl"></div>
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">4.8</div>
                  <div className="text-xs text-gray-600">Avg Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/50">
            <div className="text-3xl font-bold text-orange-600 mb-2">25,000+</div>
            <div className="text-gray-600">Drills Completed</div>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/50">
            <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/50">
            <div className="text-3xl font-bold text-blue-600 mb-2">15 sec</div>
            <div className="text-gray-600">Avg Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}