import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./AvatarFormPage.css"
import { thunkCreateAvatars, thunkFetchAvatars, thunkUpdateAvatar } from "../../redux/avatars";
import DeleteAvatarModal from "../deleteAvatarModal/DeleteAvatarModal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
function AvatarFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const avatar = useSelector(state => state.avatars.avatars)
  const sessionUser = useSelector((state) => state.session.user);

  const [body, setBody] = useState("")
  const [skin, setSkin] = useState("")
  const [hair, sethair] = useState("")
  const [extra, setExtra] = useState("")
  const [background, setbackGround] = useState("")
  const [error, setError] = useState({})

  useEffect(() => {
    dispatch(thunkFetchAvatars())
  }, [dispatch, sessionUser])

  const bodies = [
    "../../public/avatar/body/black/broad_shirt_black.png",
    "../../public/avatar/body/black/slim_shirt_black.png",

    "../../public/avatar/body/white/broad_shirt_white.png",
    "../../public/avatar/body/white/slim_shirt_white.png",

    "../../public/avatar/body/blue/broad_shirt_blue.png",
    "../../public/avatar/body/blue/slim_shirt_blue.png",

    "../../public/avatar/body/green/broad_shirt_green.png",
    "../../public/avatar/body/green/slim_shirt_green.png",

    "../../public/avatar/body/pink/broad_shirt_pink.png",
    "../../public/avatar/body/pink/slim_shirt_pink.png",

    "../../public/avatar/body/yellow/broad_shirt_yellow.png",
    "../../public/avatar/body/yellow/slim_shirt_yellow.png",

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
  const hairs = [
    "../../public/avatar/hair/color/black/hair_bangs_1_black.png",
    "../../public/avatar/hair/color/black/hair_bangs_2_black.png",
    "../../public/avatar/hair/color/black/hair_bangs_3_black.png",
    "../../public/avatar/hair/color/black/hair_bangs_4_black.png",
    "../../public/avatar/hair/color/white/hair_bangs_1_white.png",
    "../../public/avatar/hair/color/white/hair_bangs_2_white.png",
    "../../public/avatar/hair/color/white/hair_bangs_3_white.png",
    "../../public/avatar/hair/color/white/hair_bangs_4_white.png",
    "../../public/avatar/hair/color/red/hair_bangs_1_red.png",
    "../../public/avatar/hair/color/red/hair_bangs_2_red.png",
    "../../public/avatar/hair/color/red/hair_bangs_3_red.png",
    "../../public/avatar/hair/color/red/hair_bangs_4_red.png",
    "../../public/avatar/hair/color/blond/hair_bangs_1_blond.png",
    "../../public/avatar/hair/color/blond/hair_bangs_2_blond.png",
    "../../public/avatar/hair/color/blond/hair_bangs_3_blond.png",
    "../../public/avatar/hair/color/blond/hair_bangs_4_blond.png",
    "../../public/avatar/hair/color/brown/hair_bangs_1_brown.png",
    "../../public/avatar/hair/color/brown/hair_bangs_2_brown.png",
    "../../public/avatar/hair/color/brown/hair_bangs_3_brown.png",
    "../../public/avatar/hair/color/brown/hair_bangs_4_brown.png",
  ]
  const extras = [
    "../../public/avatar/extra/headband/headAccessory_special_blackHeadband.png",
    "../../public/avatar/extra/headband/headAccessory_special_blueHeadband.png",
    "../../public/avatar/extra/headband/headAccessory_special_greenHeadband.png",
    "../../public/avatar/extra/headband/headAccessory_special_pinkHeadband.png",

    "../../public/avatar/extra/animal_ears/headAccessory_special_bearEars.png",
    "../../public/avatar/extra/animal_ears/headAccessory_special_cactusEars.png",
    "../../public/avatar/extra/animal_ears/headAccessory_special_foxEars.png",
    "../../public/avatar/extra/animal_ears/headAccessory_special_pandaEars.png",
    "../../public/avatar/extra/animal_ears/headAccessory_special_wolfEars.png",

    "../../public/avatar/extra/wheelchair/button_chair_black.png",
    "../../public/avatar/extra/wheelchair/button_chair_blue.png",
    "../../public/avatar/extra/wheelchair/button_chair_green.png",
    "../../public/avatar/extra/wheelchair/button_chair_pink.png",
    "../../public/avatar/extra/wheelchair/button_chair_red.png",


  ]
  const backgrounds = [
    "../../public/avatar/backgrounds/background_blue.png",
    "../../public/avatar/backgrounds/background_green.png",
    "../../public/avatar/backgrounds/background_purple.png",
    "../../public/avatar/backgrounds/background_red.png",
    "../../public/avatar/backgrounds/background_violet.png",
    "../../public/avatar/backgrounds/background_yellow.png",
  ]
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('body', body)
    formData.append('skin', skin)
    formData.append('hair', hair)
    formData.append('extra', extra)
    formData.append('backgrounds', background)


    setError({})

    dispatch(thunkCreateAvatars(formData)).then(navigate("/homepage"))
  }
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('body', body)
    formData.append('skin', skin)
    formData.append('hair', hair)
    formData.append('extra', extra)
    formData.append('backgrounds', background)


    setError({})
    dispatch(thunkUpdateAvatar(formData, avatar.id)).then(navigate("/homepage"))

  }

  useEffect(() => {
    const errObj = {}
    if (!body.length) errObj.body = "body required"
    if (!skin.length) errObj.skin = "skin required"
    if (!hair.length) errObj.hair = "hair required"
    if (!extra.length) errObj.extra = "extra required"
    if (!background.length) errObj.background = "background required"

    setError(errObj)
  }, [body, skin, hair, extra, background])

  return (
    <>
      <div className="">
        {sessionUser && avatar.id ? (
          <div className="delete-avatar">
            <button className="delete-avatar-button">
              <OpenModalMenuItem
                itemText="Delete Avatar"
                //     onItemClick={closeMenu}
                modalComponent={<DeleteAvatarModal avatarId={avatar.id} />}
              />
            </button>

          </div>
        ) :
          <div className="create-avatar">
            <h1>Create your avatar</h1>
            <form className="form-create-avatar" onSubmit={handleSubmit}>
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
              {error.body ? <h5>{error.body}</h5> : <h5></h5>}

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
              {error.skin ? <h5>{error.skin}</h5> : <h5></h5>}

              <h3>Select hair:</h3>
              <div className="body-grid-container">
                {hairs.map((hair, id) => (
                  <div className="body-grid-item" key={id}>
                    <input
                      type="radio" name="hair"
                      id={hair} className="input-hidden" onChange={() => sethair(hair)} />
                    <label htmlFor={hair}>
                      <img
                        src={hair}
                        alt="hair options" />
                    </label>
                  </div>
                ))}
              </div>
              {error.hair ? <h5>{error.hair}</h5> : <h5></h5>}

              <h3>Select extra:</h3>
              <div className="body-grid-container">
                {extras.map((extra, id) => (
                  <div className="body-grid-item" key={id}>
                    <input
                      type="radio" name="extra"
                      id={extra} className="input-hidden" onChange={() => setExtra(extra)} />
                    <label htmlFor={extra}>
                      <img
                        src={extra}
                        alt="extra options" />
                    </label>
                  </div>
                ))}
              </div>
              {error.extra ? <h5>{error.extra}</h5> : <h5></h5>}

              <h3>Select background:</h3>
              <div className="body-grid-container">
                {backgrounds.map((background, id) => (
                  <div className="body-grid-item" key={id}>
                    <input
                      type="radio" name="background"
                      id={background} className="input-hidden" onChange={() => setbackGround(background)} />
                    <label htmlFor={background}>
                      <img
                        src={background}
                        alt="background options" />
                    </label>
                  </div>
                ))}
              </div>
              {error.background ? <h5>{error.background}</h5> : <h5></h5>}

              <button type="submit" disabled={Object.values(error).length > 0}>Create Avatar</button>
            </form>
          </div>
        }
      </div>
    </>
  );
}

export default AvatarFormPage;
