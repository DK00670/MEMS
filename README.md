# MEMS - Manufacturing ERP System

## Overview

MEMS (Manufacturing ERP Management System) is a comprehensive enterprise resource planning solution designed specifically for manufacturing businesses. This system integrates various aspects of manufacturing operations including human resources, inventory management, production monitoring, and real-time dashboards for business metrics.

## Features

- **Dashboard Analytics**: Real-time KPIs and performance metrics
- **HR Management**: Employee tracking, shift management, and scheduling
- **Inventory Control**: Stock levels monitoring, low stock alerts, and item management
- **Production Monitoring**: Machine status tracking, production tasks, and efficiency metrics

## Project Structure

```
MEMS/
├── frontend/           # React-based frontend application
│   ├── public/         # Static files
│   └── src/            # Source code
│       ├── components/ # Reusable React components
│       ├── pages/      # Page components for different routes
│       └── services/   # API and auth services
│
└── backend/            # Microservices-based backend
    ├── Authentication/ # Authentication service
    ├── Dashboard/      # Dashboard data service
    ├── Inventory/      # Inventory management service
    └── Requests/       # Request handling service
```

## Technologies Used

### Frontend
- React 19.0.0
- React Router 7.4.0
- React Icons 5.5.0
- Axios for API calls
- CSS for styling

### Backend
- Express.js
- Node.js
- Python services
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- Python 3.10+
- npm or yarn package manager

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The application will be available at http://localhost:3000

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install Node.js dependencies:
   ```
   npm install
   ```

3. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Start the backend server:
   ```
   node server.js
   ```
   The API will be available at http://localhost:5000

## Usage

1. **Login/Registration**: Create an account or login with existing credentials
2. **Dashboard**: View key performance indicators and navigate to different sections
3. **HR Management**: Manage employees and shifts
4. **Inventory**: Track stock levels and receive low stock alerts
5. **Production**: Monitor machine status and production metrics

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact [your-email@example.com]
