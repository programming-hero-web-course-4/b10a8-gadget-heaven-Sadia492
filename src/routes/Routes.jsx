import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Products from "../components/Products";
import ProductDetails from "../pages/ProductDetails";
import Support from "../pages/Support";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("../products.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
    ],
  },
]);

export default router;
