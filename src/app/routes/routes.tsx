import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./app/home";
import Root from "./app/root";

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
