import { Link } from "react-router-dom";
import '../../Styling/home.css'

function Nav() {
  return (
    <>
      <nav>
        <Link id="navButton" to="/">Home</Link>
        <Link id="navButton" to="/reviews">Reviews</Link>
        <Link id="navButton" to="/users">Users</Link>
      </nav>
    </>
  );
}

export default Nav;
