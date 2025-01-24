import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  CreditCard, 
  MessageSquare,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: Users, label: 'Patients', path: '/patients' },
    { icon: CreditCard, label: 'Billing', path: '/billing' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="h-full flex flex-col">
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 w-full">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;