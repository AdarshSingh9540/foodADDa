import React, { Suspense, lazy } from "react";

import ReactDOM from "react-dom/client";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "../src/components/Error";
import Contact from "../src/components/Contact";
import Cart from "../src/components/Cart";

import Menu from "../src/components/Menu";
import { Provider } from "react-redux";
import Store from "../src/utils/store";
import App from "./App";



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      // {
      //   path:"/about",
      //   element:<About/>
      // },
      {
        path:"/contact",
         element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart />
      }
      ,
      {
        path:"/restaurant/:resId",
        element:<Menu />
      },
      // {
      //   path:"/Instamart",
      //   element:(<Suspense fallback={<Shimmer/>} ><Instamart/></Suspense>)
      // }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);