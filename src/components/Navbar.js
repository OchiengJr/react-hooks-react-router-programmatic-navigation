import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ setIsLoggedIn }) {
  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          ...linkStyles,
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          ...linkStyles,
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          ...linkStyles,
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <button
        style={{
          ...linkStyles,
          background: "red",
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
