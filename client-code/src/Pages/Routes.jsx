import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Login from "./Login.jsx";

export const allRoutes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
];
