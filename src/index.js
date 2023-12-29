import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from './Pages/Search';
import Offer from './Pages/Offer';
import Help from './Pages/Help';
import Cart from './Pages/Cart';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResturantMenu from './Components/ResturantMenu';

import Body from './Components/Body';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />
      },
      {
        path: "/cart",
        element:<Cart/>
      },

    ],
    // errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

