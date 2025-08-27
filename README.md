# 💳 Digital Wallet Frontend

A modern, responsive digital wallet application built with React and TypeScript, featuring real-time transactions, analytics, and multi-role support.

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/hazzaz-am/digital-wallet-frontend
cd digital-wallet-frontend

# Install dependencies
bun install
# or with npm: npm install
# or with yarn: yarn install
# or with pnpm: pnpm install

# Start development server
bun dev
# or with npm: npm run dev
# or with yarn: yarn dev
# or with pnpm: pnpm dev
```

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: Redux Toolkit Query (RTK Query)
- **Charts**: Recharts for analytics visualization
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)

## � File Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layouts/              # Layout components
│   │   ├── DashboardLayout.tsx
│   │   ├── PublicLayout.tsx
│   │   └── Navbar.tsx
│   └── modules/              # Feature-specific components
│       ├── auth/             # Authentication components
│       ├── user/             # User dashboard components
│       ├── admin/            # Admin panel components
│       └── agent/            # Agent dashboard components
├── pages/                    # Main page components
│   ├── auth/                 # Login, Register
│   ├── dashboard/            # User pages
│   ├── admin/                # Admin pages
│   └── agent/                # Agent pages
├── store/                    # Redux store
│   ├── features/             # RTK Query APIs
│   │   ├── auth/
│   │   ├── wallet/
│   │   └── admin/
│   └── index.ts
├── hooks/                    # Custom React hooks
├── utils/                    # Helper functions
├── constants/                # App constants
├── types/                    # TypeScript definitions
└── routes/                   # Routing configuration
```

## �🔐 Test Credentials

### Admin Login

```
phone: +8801771817843
Password: 12345678
```

### Agent Login

```
phone: +8801794372872
Password: Hazzaz123$
```

## 🌟 Features

- **Multi-role Support**: User, Agent, Admin dashboards
- **Wallet Management**: Balance tracking, transactions
- **Real-time Analytics**: Charts and transaction insights
- **Responsive Design**: Mobile-first approach
- **Secure Authentication**: Role-based access control

## 🎯 Live Demo

**Frontend**: [Digital Wallet App](https://digital-wallet-eight.vercel.app) _(Update with actual URL)_

## 📱 Key Pages

- `/dashboard` - User wallet and transactions
- `/admin` - Admin analytics and user management
- `/agent` - Agent operations and commissions
- `/auth/login` - Authentication portal


---
