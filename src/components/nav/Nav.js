import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () =>{

    return (
        <nav className="navContainer">
            <Link to="/" className="Logo">V_TimeCapsule</Link>
        </nav>
    );
};

export default Nav;