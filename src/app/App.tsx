import { useMemo } from "react";
import { createRouter } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);
  return <RouterProvider router={router} />;
};

function App() {
  return <AppRouter />;
}

export default App;
