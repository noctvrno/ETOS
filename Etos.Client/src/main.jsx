import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import NavBarPage from './components/nav-bar/nav-bar-page.jsx';
import ActivityFeed from './components/activity/activity-feed.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBarPage content={<ActivityFeed />} />,
    },
    {
        path: "/training",
        element: <NavBarPage content={<ActivityFeed />} />,
    },
    {
        path: "/orientation",
        element: <NavBarPage content={<ActivityFeed />} />,
    },
    {
        path: "/feedback",
        element: <NavBarPage content={<ActivityFeed />} />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
