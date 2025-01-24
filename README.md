# HealthFlow

A modern, full-featured healthcare practice management system built with React, TypeScript, and Supabase.

![HealthFlow Dashboard](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80)

## Features

- 📊 **Dashboard Analytics**: Real-time insights into practice performance
- 👥 **Patient Management**: Comprehensive patient records and history
- 📅 **Appointment Scheduling**: Easy-to-use calendar interface
- 💰 **Billing System**: Track invoices and payments
- 💬 **Internal Messaging**: Secure staff communication
- 🔒 **Role-Based Access**: Secure, role-based permissions

## Tech Stack

- **Frontend**:
  - React 18
  - TypeScript
  - Vite
  - TailwindCSS
  - Chart.js
  - Lucide Icons
  - React Router DOM
  - React Day Picker
  - TanStack Table

- **Backend**:
  - Supabase
  - PostgreSQL
  - Row Level Security

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/healthflow.git
   cd healthflow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Supabase credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

## Database Schema

The application uses the following main tables:

- `users`: Medical staff records
- `patients`: Patient information
- `appointments`: Scheduling and appointment tracking
- `invoices`: Billing and payment records
- `messages`: Internal communication system

## Security

- Row Level Security (RLS) policies for all tables
- Role-based access control
- Secure authentication via Supabase
- Data encryption in transit and at rest

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI Components styled with [TailwindCSS](https://tailwindcss.com/)
- Charts powered by [Chart.js](https://www.chartjs.org/)