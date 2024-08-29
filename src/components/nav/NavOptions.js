// Context needs to be replaced with Cookies or Tokens later.
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavOptions = () => {
  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
  const url = "http://localhost:3500/logout";
  const navigate = useNavigate();

  //Temporary Event handler to set the sign in context
  const tempLoginHandler = () => {
    setLoggedIn(!isLoggedIn);
  };

  async function logout() {
    await axios.post(url).then((res) => {
      tempLoginHandler();
      navigate("/");
    });
  }

  // List items are subjected to change in the future
  const loggedOutMenuOptions = (
    <ul className="menuBar loggedOutMenu">
      <li className="menuBarItems">
        <Link to="/createCapsule">Create Capsules</Link>
      </li>
      <li className="menuBarItems">Your Capsules</li>
      <li className="menuBarItems" onClick={tempLoginHandler}>
        Account
      </li>
      <li className="menuBarItems" onClick={logout}>
        Logout
      </li>
    </ul>
  );

  const loggedInMenuOptions = (
    <ul className="menuBar loggedInMenu">
      <li className="menuBarItems">
        <Link to="/signin">Sign In</Link>
      </li>
      <li className="menuBarItems">
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  );

  return <div>{isLoggedIn ? loggedOutMenuOptions : loggedInMenuOptions}</div>;
};

export default NavOptions;
