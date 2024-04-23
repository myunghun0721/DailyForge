import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { useSelector } from "react-redux";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      {sessionUser &&
        <nav className="nav">
          <div className="nav-menu">
            <NavLink to="/homepage">Home</NavLink>
            <NavLink to="/avatar">Avatar</NavLink>
            <NavLink to="/daily">Daily</NavLink>
            <NavLink to="/party">Party</NavLink>
            <NavLink to="/monster">Monster</NavLink>
          </div>

          <div>
            <ProfileButton />
          </div>
        </nav>}
    </div>
  );
}

export default Navigation;
