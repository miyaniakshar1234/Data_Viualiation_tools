import React from 'react';
import { BarChart3, Settings, User, Bell, Search } from 'lucide-react';

interface HeaderProps {
  onDashboardClick: () => void;
}

export default function Header({ onDashboardClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DataViz Pro</span>
          </div>

          <div className="hidden md:flex flex-1 max-w-md ml-8">
            <div className="w-full relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={onDashboardClick}
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </button>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Analytics</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Reports</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}