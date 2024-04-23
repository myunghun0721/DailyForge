import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css"
import { thunkFetchAvatars } from "../../redux/avatars";

function HomePage() {
  const dispatch = useDispatch();

  const avatar = useSelector(state => state.avatars.avatars)
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(thunkFetchAvatars())
  }, [dispatch, sessionUser])


  return (
    <>
      <div className="">
        {sessionUser && avatar && (
          <div key={avatar.id} className="div-main-avatar">
            <img src={avatar.backgrounds} className="avatar-image"></img>
            <div className="avatar-container">
              <img src={avatar.extra} className="avatar-image"></img>
              <img src={avatar.skin} className="avatar-image"></img>
              <img src={avatar.hair} className="avatar-image"></img>
              <img src={avatar.body} className="avatar-image"></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
