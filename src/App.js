import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutComponent from "./components/About";
import ErrorComponent from "./components/Error";
import ContactComponent from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import ProfileComponent from "./components/Profile";

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
        element: <AboutComponent />,
        children: [
          {
            path:'profile',
            element:<ProfileComponent/>
          }
        ]
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails/>
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
