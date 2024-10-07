import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./app/home";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
