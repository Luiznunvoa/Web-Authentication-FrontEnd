import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../layouts/defaultLayout";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export function BrowserRouter() {
  const router = createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
        { // TODO: Make it /login
          path: "/",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
