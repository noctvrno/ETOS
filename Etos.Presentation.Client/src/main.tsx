import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import NavBarPage from './components/nav-bar/NavBarPage';
import ActivityFeed from './components/activity/ActivityFeed';
import Training from './components/activity/training/Training';

const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement == null)
    throw new Error("Could not find root element.");

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

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
