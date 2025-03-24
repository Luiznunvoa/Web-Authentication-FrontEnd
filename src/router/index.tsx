import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../layouts/default";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";

export function BrowserRouter() {
  const router = createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
        { 
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
