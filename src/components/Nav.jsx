import { Link } from "react-router-dom";
import '../../Styling/home.css'

function Nav() {
  return (
    <>
      <nav>
        <Link id="homeNavButton" className="navButton" to="/">Home</Link>
        <Link id="reviewsNavButton" className="navButton" to="/reviews">Reviews</Link>
        <Link id="usersNavButton" className="navButton" to="/users">Users</Link>
      </nav>
    </>
  );
}

export default Nav;
