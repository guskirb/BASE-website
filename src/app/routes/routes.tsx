import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomeRoute } from "./app/home";
import { Root } from "./app/root";

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
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
