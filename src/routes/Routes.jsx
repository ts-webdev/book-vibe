import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=> fetch('booksData.json')
      }
    ]
  }
])
