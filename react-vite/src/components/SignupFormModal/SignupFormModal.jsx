import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }
    // console.log(password)
    // console.log(confirmPassword)
    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  useEffect(() => {
    const errObj = {}
    if (!email.length) errObj.email = "email required"
    if (!username.length) errObj.username = "username required"
    if (username.length < 4) errObj.username = "username must longer than 4 characters"
    if (username.length > 20) errObj.username = "username must less than 20 characters"
    if (password.length < 8) errObj.password = "password must longer than 8 characters"
    if (password.length > 20) errObj.password = "password must less than 20 characters"
    if (!confirmPassword.length) errObj.confirmPassword = "confirmPassword required"

    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    const result = regex.test(email);
    if (!result) {
      errObj.email = "Please provide a valid email."
    }
    console.log(username.length)
    setErrors(errObj)
  }, [email, username, password, confirmPassword])

  return (
    <div className="form-sign-up">
      <h1>Sign Up</h1>
      {errors.server ? <p>{errors.server}</p> : <p> </p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email ? <p>{errors.email}</p>: <p> </p>}
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {errors.username ? <p>{errors.username}</p>: <p> </p>}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password ? <p>{errors.password}</p> :<p> </p>}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword ? <p>{errors.confirmPassword}</p> : <p> </p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
