import React from 'react';
import './index.css';
import './Styles/App.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}/>
    )
)


root.render(
    <React.StrictMode>
        <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
    </React.StrictMode>
);
