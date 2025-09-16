import React from 'react';
import { 
  Users, 
  BookOpen, 
  Activity, 
  TrendingUp, 
  Calendar, 
  AlertTriangle,
  Award,
  MessageSquare
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { icon: Users, label: 'Active Students', value: '1,247', change: '+12%', color: 'from-blue-500 to-blue-600' },
    { icon: BookOpen, label: 'Modules Completed', value: '3,892', change: '+8%', color: 'from-green-500 to-green-600' },
    { icon: Activity, label: 'Drills Conducted', value: '156', change: '+24%', color: 'from-orange-500 to-orange-600' },
    { icon: Award, label: 'Avg. Preparedness Score', value: '87%', change: '+5%', color: 'from-purple-500 to-purple-600' }
  ];

  const recentActivity = [
    { student: 'Class 8-A', activity: 'Completed Earthquake Safety Module', time: '2 hours ago', score: '94%' },
    { student: 'Class 10-B', activity: 'Fire Evacuation Drill Completed', time: '4 hours ago', score: '88%' },
    { student: 'Class 7-C', activity: 'Started Flood Preparedness Module', time: '6 hours ago', score: '---' },
    { student: 'Staff Meeting', activity: 'Emergency Protocol Training', time: '1 day ago', score: '96%' }
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor disaster preparedness training across your institution</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-green-600 font-medium">{stat.change}</div>
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Recent Activity</span>
            </h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{activity.student}</div>
                    <div className="text-sm text-gray-600">{activity.activity}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                  <div className="text-right">
                    {activity.score !== '---' && (
                      <div className="font-bold text-green-600">{activity.score}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
            
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Send Emergency Alert</span>
              </button>
              
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Schedule Drill</span>
              </button>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>View Reports</span>
              </button>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Communication Hub</span>
              </button>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                <span className="font-medium text-yellow-800">Pending Tasks</span>
              </div>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Review fire safety protocols</li>
                <li>• Update emergency contact list</li>
                <li>• Schedule quarterly drill</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Preparedness Progress</h3>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Interactive Chart Placeholder</p>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Module Completion Rates</h3>
            <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Interactive Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}