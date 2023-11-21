import { useState } from "react";
import { Link } from "react-router-dom";

export const TitleComponent = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        className="logo"
        src="data:image/png;base64,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"
      ></img>
    </a>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <div className="header">
      <TitleComponent />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
