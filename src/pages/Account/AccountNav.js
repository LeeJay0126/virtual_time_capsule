import { Link } from "react-router-dom";

const AccountNav = () => {
  return (
    <nav className="accountNav">
      <Link to="/" className="Logo">
        LaterGator
      </Link>
    </nav>
  );
};

export default AccountNav;
