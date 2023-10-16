import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Pedidos from "./pages/Pedidos";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./pages/SignIn";
import Restaurante from "./pages/Restaurante";
import { loader as restaurantLoader } from "./pages/Restaurante";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "busca",
          element: <Busca />,
        },
        {
          path: "/pedidos",
          element: <Pedidos />,
        },
        {
          path: "/restaurantes/:id",
          element: <Restaurante />,
          loader: restaurantLoader,
        },
      ],
    },

    {
      path: "/sign",
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
