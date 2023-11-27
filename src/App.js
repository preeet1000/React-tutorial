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
import { lazy, Suspense, useState } from "react";
import ShimmerComponent from "./components/Shimmer";
import UserContext from "./utility/helper/UserContext";
import { Provider } from "react-redux";
import store from "./utility/helper/store";

const InstamartComponent = lazy(() => import("./components/Instamart"));
const AboutComponent = lazy(() => import("./components/About"));
// upon lazy loading => upon render => suspend loading
const AppLayout = () => {
  const [user, setUser] = useState({
    userName: "llllllll",
    email: "kk@gmail.com",
  });
  return (
    <>
    <Provider store={store} >
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
      </Provider>
    </>
  );
};
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
          // suspense tell react to component needs to be lazy loading
          <Suspense fallback={<ShimmerComponent />}>
            <InstamartComponent />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
