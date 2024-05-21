import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";

function LoginFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/homepage" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/homepage");
    }
  };

  function loginDemo() {
    // console.log('login as demo')
    const email = "hun@aa.io";
    const password = "password";
    dispatch(
      thunkLogin({
        email,
        password,
      })
    )
    navigate("/homepage");
  }
  return (
    <div className="main-page">
      <div className="main-page-left">
        <h1>Welcome to DailyForge!</h1>
        <img src="https://habitica.com/static/img/home-main@3x.ffc32b12.png" alt="main-page-img"/>
        <h1>Motivate yourself to achieve your goals.</h1>
        <p>It&apos;s time to have fun when you get things done! Join over 4 million Habiticans and improve your life one task at a time.</p>
      </div>
      <div className="main-page-right">
      {errors.length > 0 &&
        errors.map((message) => <p key={message}>{message}</p>)}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email ? <p>{errors.email}</p> : <p> </p>}
        <br></br>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password ? <p>{errors.password}</p> : <p> </p>}
        <br></br>
        <button type="submit">Log In</button>
      </form>
      <button className="sign-up-button">
        <OpenModalMenuItem
          itemText="Sign up"
          //     onItemClick={closeMenu}
          modalComponent={<SignupFormModal/>}
        />
      </button>

      <button onClick={loginDemo}>Log In as Hun</button>
      </div>
    </div>
  );
}

export default LoginFormPage;
