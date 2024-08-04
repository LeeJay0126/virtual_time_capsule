import { Link } from "react-router-dom";
import "./Nav.css";
import NavOptions from "./NavOptions";

const Nav = () =>{

    return (
        <nav className="navContainer">
            <Link to="/" className="Logo">V_TimeCapsule</Link>
            <NavOptions/>
        </nav>
    );
};

export default Nav;