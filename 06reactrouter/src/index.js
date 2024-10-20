import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import User from './components/User/user';
import Github, { githubInfoLoader } from './components/Github/github';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path:"",
        element: <Home></Home>
      },
      {
        path:"about",
        element: <About></About>
      },
      {
        path:"contact",
        element: <Contact></Contact>
      },
      {
        path:"user/:userid",
        element: <User></User>
      },
      {
        path:"github",
        element: <Github></Github>,
        loader: githubInfoLoader
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

