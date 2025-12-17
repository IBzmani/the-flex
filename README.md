# Flex Living Manager Portal

A modern, responsive dashboard for managing properties, reviews, and analytics for Flex Living. Built with React, Vite, and Express.

## Features

- **Dashboard**: Real-time KPI statistics, review volume charts, and recent activity.
  - **Responsive Layout**: Collapsible sidebar and mobile-friendly grid.
  - **Filtering**: Filter data by property, channel, rating, and date.
- **Reviews Management**: 
  - View all guest reviews with detailed breakdowns.
  - **Pagination**: Browse through large datasets efficiently.
  - **Dynamic Stats**: "About this property" section updates based on visible reviews.
- **Property Details**:
  - Public-facing page showcasing property amenities, house rules, and location.
  - **Interactive Map**: Integrated Google Maps for location context.
  - **Responsive Design**: Optimized for desktop, tablet, and mobile.
- **Mock Integration**: Simulates Hostaway API data with realistic latency and structure.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **State Management**: React Context API
- **Charts**: Recharts
- **Icons**: FontAwesome, Material Symbols

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IBzmani/flex-living-manager-portal.git
   cd flex-living-manager-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   - Rename `.env.example` (if present) or create a `.env` file in the root directory.
   - Add your API keys (see `DOCUMENTATION.md` for details).
   ```env
   # Example
   HOSTAWAY_API_KEY=your_key_here
   ```

### Running Locally

To run both the backend API and frontend concurrently:

```bash
npm run dev:all
```

- **Frontend**: http://localhost:5173 (or similar Vite port)
- **Backend API**: http://localhost:3001

## Deployment (Render)

This application is configured for seamless deployment on Render.

1. **Connect Repository**: Link your GitHub repo to Render.
2. **Auto-Detection**: Render will detect the Node.js environment.
3. **Build Command**: `npm install && npm run build`
4. **Start Command**: `npm start`
5. **Environment Variables**: Add necessary keys in the Render dashboard.

## API Endpoints

- `GET /api/reviews/hostaway`: Fetches mock reviews from the internal Hostaway service.

## Project Structure

- `/components`: Reusable UI components (Dashboard, Sidebar, Charts).
- `/context`: Global state management (ReviewsContext).
- `/server`: Express backend and API routes.
- `/services`: Frontend API services and data normalization.
