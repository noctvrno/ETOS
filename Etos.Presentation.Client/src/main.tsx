import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import NavBarPage from './components/nav-bar/nav-bar-page';
import ActivityFeed from './components/activity/activity-feed';
import Training from './components/activity/training/training';

const router = createBrowserRouter([
    {
        element: <NavBarPage />,
        children: [
            {
                path: "/",
                element: <ActivityFeed />
            },
            {
                path: "training",
                element: <Training />
            },
            {
                path: "orientation",
                element: <ActivityFeed />
            },
            {
                path: "feedback",
                element: <ActivityFeed />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
