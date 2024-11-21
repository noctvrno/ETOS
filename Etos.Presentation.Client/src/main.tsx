import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import NavBarPage from './components/nav-bar/NavBarPage';
import Home from './components/activity/Home';
import Training from './components/activity/training/training';

const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement == null)
    throw new Error("Could not find root element.");

const router = createBrowserRouter([
    {
        element: <NavBarPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "training",
                element: <Training />
            },
            {
                path: "orientation",
                element: <></>
            },
            {
                path: "feedback",
                element: <></>
            },
        ]
    },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
