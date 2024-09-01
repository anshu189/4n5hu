import React from 'react';
import './index.css';
import './Styles/App.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}/>
    )
)


root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
