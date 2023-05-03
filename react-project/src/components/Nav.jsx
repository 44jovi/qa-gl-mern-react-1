import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/users">USERS</Link>
        </li>

        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
