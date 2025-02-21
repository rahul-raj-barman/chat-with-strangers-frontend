import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import WebRTCContextProvider from './rtc/context/WebRTCContextProvider'
import UserContextProvider from './context/UserContextProvider'
import Chat from './components/Chat';
import HomePage from './components/HomePage';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/chat/:username",
      element: <Chat/>,
    },
    {
      path: '/home',
      element: <HomePage/>
    }
  ]);
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <WebRTCContextProvider>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  // </WebRTCContextProvider>
);
