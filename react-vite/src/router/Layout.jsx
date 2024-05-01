import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalProvider, Modal } from "../context/Modal";
import { thunkAuthenticate } from "../redux/session";
import Navigation from "../components/Navigation/Navigation";
import AvatarPage from "../components/AvatarPage";
import FooterPage from "../components/FooterPage/FooterPage";

export default function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <ModalProvider>
        {isLoaded && <Navigation />}
        {sessionUser && <AvatarPage/>}
        {isLoaded && <Outlet />}
        {sessionUser && <FooterPage />}
        <Modal />
      </ModalProvider>
    </>
  );
}
