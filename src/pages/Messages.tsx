import React from 'react';
import { Search, Edit, Phone, Video } from 'lucide-react';

const Messages = () => {
  const conversations = [
    {
      id: '1',
      name: 'Sarah Johnson',
      lastMessage: 'Thank you for the prescription details.',
      time: '5m ago',
      unread: true,
      online: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      lastMessage: 'When should I schedule my next appointment?',
      time: '1h ago',
      unread: false,
      online: false
    },
    {
      id: '3',
      name: 'Emily Davis',
      lastMessage: "I'll be there at 2 PM tomorrow.",
      time: '3h ago',
      unread: false,
      online: true
    }
  ];

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search messages..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="overflow-y-auto h-full">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                conversation.id === '1' ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {conversation.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{conversation.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{conversation.time}</p>
                  {conversation.unread && (
                    <div className="mt-1 w-2 h-2 bg-blue-600 rounded-full ml-auto"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium">SJ</span>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Sarah Johnson</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
              <Phone className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
              <Video className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-lg py-2 px-4 max-w-md">
              <p>Hi Sarah, how can I help you today?</p>
              <p className="text-xs text-blue-200 mt-1">10:30 AM</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-100 rounded-lg py-2 px-4 max-w-md">
              <p>Thank you for the prescription details. I had a question about the dosage.</p>
              <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Edit className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;