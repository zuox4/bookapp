import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';
import Profile from './pages/profile';
import App from './App';
import Main from './pages/main';
import Users from './pages/users';
import EveryDayTask from './pages/EveryDayTask';
import RaitingPage from './pages/raiting';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<LoginPage/>
      },
      {
        path: "/lk",
        element: <Profile/>,
        children:[
          {
            path:'/lk/users',
            element:<Users/>
          },
          {
            path:'/lk/main',
            element:<Main/>
          },
          {
            path:'/lk/everydaytask',
            element:<EveryDayTask/>
          },
          {
            path:'/lk/reiting',
            element:<RaitingPage/>
          },
        ]
      },
      {
        path: "/reg",
        element: <RegistrationPage/>,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
