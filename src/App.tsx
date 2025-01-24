import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Patients from './pages/Patients';
import Billing from './pages/Billing';
import Messages from './pages/Messages';
import { Activity } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <header className="bg-white shadow-sm">
            <div className="mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-semibold text-gray-900">HealthFlow</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  New Patient
                </button>
              </div>
            </div>
          </header>
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Navigate to="/" replace />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;