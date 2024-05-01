import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
import './FooterPage.css'

function FooterPage() {

  // const sessionUser = useSelector((state) => state.session.user);

  // if (sessionUser) return <Navigate to="/" replace={true} />;


  return (
    <footer>
      <p>placeholder for footer</p>
      <p>placeholder for footer</p>
    </footer>
  );
}

export default FooterPage;
