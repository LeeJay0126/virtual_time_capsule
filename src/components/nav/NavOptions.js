// Context needs to be replaced with Cookies or Tokens later.
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";

const NavOptions = () => {
  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

  //Temporary Event handler to set the sign in context
  const tempLoginHandler = () => {
    setLoggedIn(!isLoggedIn);
  };
  
  // List items are subjected to change in the future
  const loggedOutMenuOptions = (
    <ul className="menuBar loggedOutMenu">
      <li className="menuBarItems">Your Capsules</li>
      <li className="menuBarItems">Create Capsules</li>
      <li className="menuBarItems" onClick={tempLoginHandler}>
        Account
      </li>
    </ul>
  );

  const loggedInMenuOptions = (
    <ul className="menuBar loggedInMenu">
      <li className="menuBarItems" onClick={tempLoginHandler}>
        Sign In
      </li>
      <li className="menuBarItems">Sign Up</li>
    </ul>
  );

  return <div>{isLoggedIn ? loggedOutMenuOptions : loggedInMenuOptions}</div>;
};

export default NavOptions;
