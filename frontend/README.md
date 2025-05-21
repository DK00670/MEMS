# MEMS Frontend

This is the frontend application for the Manufacturing ERP Management System (MEMS). It provides a modern, responsive user interface for managing manufacturing operations.

## Architecture

The frontend is built with React and uses:

- **React Router DOM**: For navigation and routing between pages
- **React Icons**: For all UI icons (replacing emojis)
- **Axios**: For API communication with the backend
- **CSS**: For styling components

## Application Structure

```
src/
├── components/         # Shared UI components
│   ├── PrivateRoute.js # Authentication wrapper component
│   ├── Sidebar.js      # Navigation sidebar
│   └── Sidebar.css     # Sidebar styling
│
├── pages/              # Page components
│   ├── Dashboard.js    # Main dashboard page
│   ├── HR.js           # HR management
│   ├── Inventory.js    # Inventory management 
│   ├── Production.js   # Production monitoring
│   └── ...other pages
│
├── services/           # Service layer
│   ├── api.js          # API communication
│   └── auth.js         # Authentication logic
│
├── App.js              # Main application component with routes
└── index.js            # Application entry point
```

## Features

### Dashboard
- Business KPI overview
- Navigation cards to different sections
- Performance metrics and charts

### HR Management
- Employee overview
- Shift management
- Profile management

### Inventory Management
- Stock levels monitoring
- Low stock alerts
- Item addition and management

### Production Monitoring
- Machine status tracking
- Production tasks
- Efficiency metrics

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
