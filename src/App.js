import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/Error";
import ContactComponent from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import ProfileComponent from "./components/Profile";
import { lazy, Suspense } from "react";
import ShimmerComponent from "./components/Shimmer";

const InstamartComponent = lazy(() => import("./components/Instamart"));
const AboutComponent = lazy(() => import("./components/About"));
// upon lazy loading => upon render => suspend loading
const AppLayout = () => (
  <>
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
  </>
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About page is loading !!</h1>}>
            <AboutComponent />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileComponent />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerComponent />}>
            <InstamartComponent />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
