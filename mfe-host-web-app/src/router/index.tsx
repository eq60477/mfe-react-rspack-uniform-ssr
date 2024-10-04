import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../pages/ErrorPage";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/products",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Product />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/products/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetail />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  },
]);

export default router;
