import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

const AppLayout = () => (
  <>
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </>
);
root.render(<AppLayout />);
