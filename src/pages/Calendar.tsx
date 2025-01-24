import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Clock, User } from 'lucide-react';

const Calendar = () => {
  const appointments = [
    {
      time: '09:00 AM',
      patient: 'Sarah Johnson',
      type: 'Check-up',
      status: 'Confirmed'
    },
    {
      time: '10:30 AM',
      patient: 'Michael Chen',
      type: 'Follow-up',
      status: 'Confirmed'
    },
    {
      time: '02:00 PM',
      patient: 'Emily Davis',
      type: 'Consultation',
      status: 'Pending'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Schedule</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            New Appointment
          </button>
        </div>
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="font-medium">{appointment.time}</span>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <span>{appointment.patient}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">{appointment.type}</span>
                <span className={`block mt-1 text-sm ${
                  appointment.status === 'Confirmed' ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <DayPicker
          mode="single"
          selected={new Date()}
          footer={<p>Today is {format(new Date(), 'PP')}</p>}
        />
      </div>
    </div>
  );
};

export default Calendar;