import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Users, Calendar, DollarSign, Clock } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const stats = [
    { 
      title: 'Total Patients',
      value: '1,284',
      change: '+12.5%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Appointments Today',
      value: '32',
      change: '+4.3%',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: 'Revenue MTD',
      value: '$48,294',
      change: '+18.2%',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      title: 'Avg. Wait Time',
      value: '14 min',
      change: '-2.1%',
      icon: Clock,
      color: 'bg-orange-500'
    }
  ];

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 35000, 32000, 38000, 42000, 48000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const revenueOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgb(17, 24, 39)',
        titleColor: 'rgb(243, 244, 246)',
        bodyColor: 'rgb(243, 244, 246)',
        padding: 12,
        borderColor: 'rgb(75, 85, 99)',
        borderWidth: 1,
        callbacks: {
          label: (context: any) => {
            return `Revenue: $${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: 'rgb(107, 114, 128)',
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          color: 'rgb(243, 244, 246)',
        },
        ticks: {
          font: {
            size: 12,
          },
          color: 'rgb(107, 114, 128)',
          callback: (value: number) => {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  const appointmentData = {
    labels: ['Completed', 'Scheduled', 'Cancelled', 'No-show'],
    datasets: [
      {
        data: [65, 20, 10, 5],
        backgroundColor: [
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(249, 115, 22)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const appointmentOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgb(17, 24, 39)',
        titleColor: 'rgb(243, 244, 246)',
        bodyColor: 'rgb(243, 244, 246)',
        padding: 12,
        borderColor: 'rgb(75, 85, 99)',
        borderWidth: 1,
        callbacks: {
          label: (context: any) => {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium mb-6">Revenue Overview</h3>
          <div className="h-[300px]">
            <Line data={revenueData} options={revenueOptions} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium mb-6">Appointment Status</h3>
          <div className="h-[300px]">
            <Doughnut data={appointmentData} options={appointmentOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;