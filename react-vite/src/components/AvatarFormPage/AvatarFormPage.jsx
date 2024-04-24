import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./AvatarFormPage.css"
import { thunkFetchAvatars } from "../../redux/avatars";

function AvatarFormPage() {
  const dispatch = useDispatch();

  const avatar = useSelector(state => state.avatars.avatars)
  const sessionUser = useSelector((state) => state.session.user);

  const [body, setBody] = useState("")
  const [skin, setSkin] = useState("")
  useEffect(() => {
    dispatch(thunkFetchAvatars())
  }, [dispatch, sessionUser])

  const bodies = [
    "../../public/avatar/body/black/broad_shirt_black.png",
    "../../public/avatar/body/black/slim_shirt_black.png",
    "../../public/avatar/body/white/broad_shirt_white.png",
    "../../public/avatar/body/white/slim_shirt_white.png",

  ]
  const skins = [
    "../../public/avatar/skin/skin_6bd049.png",
    "../../public/avatar/skin/skin_98461a.png",
    "../../public/avatar/skin/skin_915533.png",
    "../../public/avatar/skin/skin_c3e1dc.png",
    "../../public/avatar/skin/skin_c06534.png",
    "../../public/avatar/skin/skin_ea8349.png",
    "../../public/avatar/skin/skin_f5a76e.png",

  ]
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(body)
    console.log(skin)
  }
  return (
    <>
      <div className="">
        {sessionUser && avatar.id ? (
          <div>update</div>
        ) :
          <div className="create-avatar">
            <form className="form-uploadsong" onSubmit={handleSubmit}>
              <h3>Select body:</h3>
              <div className="body-grid-container">
                {bodies.map((body, id) => (
                  <div className="body-grid-item" key={id}>
                    <input
                      type="radio" name="body"
                      id={body} className="input-hidden" onChange={() => setBody(body)} />
                    <label htmlFor={body}>
                      <img
                        src={body}
                        alt="body options" />
                    </label>
                  </div>
                ))}
              </div>

              <h3>Select skin:</h3>
              <div className="body-grid-container">
                {skins.map((skin, id) => (
                  <div className="body-grid-item" key={id}>
                    <input
                      type="radio" name="skin"
                      id={skin} className="input-hidden" onChange={() => setSkin(skin)} />
                    <label htmlFor={skin}>
                      <img
                        src={skin}
                        alt="skin options" />
                    </label>
                  </div>
                ))}
              </div>
              <button>submit</button>
            </form>
          </div>
        }
      </div>
    </>
  );
}

export default AvatarFormPage;
