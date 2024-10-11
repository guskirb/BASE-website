import { createBrowserRouter, Navigate } from "react-router-dom";

import { HomeRoute } from "./app/home";
import { Root } from "./app/root";
import { AboutRoute } from "./app/about";
import { ContactRoute } from "./app/contact";

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomeRoute />,
        },
        {
          path: "/about",
          element: <AboutRoute />,
        },
        {
          path: "/contact",
          element: <ContactRoute />,
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
