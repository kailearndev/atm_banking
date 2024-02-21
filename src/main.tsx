import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardDetail from "./pages/CardDetail/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        element: <CardDetail />,
        path: "details",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
