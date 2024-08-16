import { NavLink, } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import './FooterPage.css'
import { FaGithub } from "react-icons/fa";

function FooterPage() {

  // const sessionUser = useSelector((state) => state.session.user);

  // if (sessionUser) return <Navigate to="/" replace={true} />;


  return (
    <footer>
      <NavLink to={"https://github.com/myunghun0721/DailyForge"} target="_blank">
        <FaGithub size={30} />
      </NavLink>
      <NavLink to={"https://www.linkedin.com/in/hunchoi/"} target="_blank">
        <FaLinkedin size={30} />
      </NavLink>

    </footer>
  );
}

export default FooterPage;
