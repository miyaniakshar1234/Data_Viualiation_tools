import React from 'react';
import { 
  ChevronLeft,
  LayoutDashboard,
  BarChart2,
  PieChart,
  LineChart,
  Settings,
  Users,
  FileText,
  Bell,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <BarChart2 size={20} />, label: 'Analytics' },
    { icon: <PieChart size={20} />, label: 'Reports' },
    { icon: <LineChart size={20} />, label: 'Forecasting' },
    { icon: <Users size={20} />, label: 'Team' },
    { icon: <FileText size={20} />, label: 'Documents' },
    { icon: <Bell size={20} />, label: 'Notifications' },
    { icon: <Settings size={20} />, label: 'Settings' },
    { icon: <HelpCircle size={20} />, label: 'Help & Support' }
  ];

  return (
    <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-40
      ${isOpen ? 'w-64' : 'w-0 -translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-end p-4">
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto">
          <ul className="px-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-3 py-2 my-1 text-sm rounded-lg transition-colors
                    ${item.active 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}