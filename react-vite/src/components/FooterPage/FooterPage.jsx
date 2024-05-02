import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
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
