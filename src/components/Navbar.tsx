import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">All</Link>
      <Link to="/?todos=active">Active</Link>
      <Link to="/?todos=completed">Completed</Link>
    </nav>
  );
};

export default Navbar;
