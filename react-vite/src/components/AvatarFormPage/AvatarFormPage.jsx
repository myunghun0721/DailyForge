import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./AvatarFormPage.css"
import { thunkCreateAvatars, thunkFetchAvatars, thunkUpdateAvatar } from "../../redux/avatars";
import DeleteAvatarModal from "../deleteAvatarModal/DeleteAvatarModal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import bodies from "../../../public/avatar/bodies";
import skins from "../../../public/avatar/skins";
import hairs from "../../../public/avatar/hairs";
import extras from "../../../public/avatar/extras";
import backgrounds from "../../../public/avatar/backgrounds";

function AvatarFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const avatar = useSelector(state => state.avatars.avatars)
  const sessionUser = useSelector((state) => state.session.user);
  const navigation = useNavigate()

  if (!avatar) return

  const [body, setBody] = useState(avatar.body ? avatar.body : bodies[0])
  const [skin, setSkin] = useState(avatar.skin ? avatar.skin : skins[0])
  const [hair, sethair] = useState(avatar.hairs ? avatar.hairs : hairs[0])
  const [extra, setExtra] = useState(avatar.extra ? avatar.extra : extras[0])
  const [background, setbackGround] = useState(avatar.backgrounds ? avatar.backgrounds : backgrounds[0])
  const [error, setError] = useState({})
  const [bodystyle, setBodyStyle] = useState("body-grid-item-current")
  const [skinstyle, setSkinStyle] = useState("body-grid-item-current")
  const [hairstyle, setHairStyle] = useState("body-grid-item-current")
  const [extrastyle, setExtraStyle] = useState("body-grid-item-current")
  const [backgroundstyle, setBackgroundStyle] = useState("body-grid-item-current")
  const [bodycheck, setBodyCheck] = useState(true)

  if (!sessionUser) {
    navigate("/")
    return
  }
  useEffect(() => {
    dispatch(thunkFetchAvatars())
  }, [dispatch, sessionUser])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('body', body)
    formData.append('skin', skin)
    formData.append('hair', hair)
    formData.append('extra', extra)
    formData.append('backgrounds', background)


    setError({})

    await dispatch(thunkCreateAvatars(formData))
    navigate("/homepage")
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
    await dispatch(thunkUpdateAvatar(formData, avatar.id))
    navigate("/homepage")

    // for (const value of formData.values()) {
    //   console.log(value);
    // }
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
            <div className="create-avatar">
              <h1>Update your avatar</h1>
              <form className="form-create-avatar" onSubmit={handleSubmitUpdate}>
                <h3>Select body:</h3>
                <div className="body-grid-container">
                  {bodies.map((body, id) => {
                    if (avatar.body == body) {
                      return <div className={bodystyle} key={id}>
                        <input
                          type="radio" name="body"
                          id={body} className="input-hidden" onChange={() => setBody(body)} />
                        <label htmlFor={body}>
                          <img
                            src={body}
                            alt="body options" />
                        </label>
                      </div>
                    } else {
                      return <div className="body-grid-item" key={id}>
                        <input
                          type="radio" name="body"
                          id={body} className="input-hidden" onChange={() => {
                            setBody(body)
                            setBodyStyle("body-grid-item")
                          }} />
                        <label htmlFor={body}>
                          <img
                            src={body}
                            alt="body options" />
                        </label>
                      </div>
                    }
                  })}
                </div>
                {error.body ? <h5>{error.body}</h5> : <h5></h5>}

                <h3>Select skin:</h3>
                <div className="body-grid-container">
                  {skins.map((skin, id) => {
                    if (avatar.skin == skin) {
                      return <div className={skinstyle} key={id}>
                        <input
                          type="radio" name="skin"
                          id={skin} className="input-hidden" onChange={() => setSkin(skin)} />
                        <label htmlFor={skin}>
                          <img
                            src={skin}
                            alt="skin options" />
                        </label>
                      </div>
                    }
                    else {
                      return <div className="body-grid-item" key={id}>
                        <input
                          type="radio" name="skin"
                          id={skin} className="input-hidden" onChange={() => {
                            setSkin(skin)
                            setSkinStyle("body-grid-item")
                          }} />
                        <label htmlFor={skin}>
                          <img
                            src={skin}
                            alt="skin options" />
                        </label>
                      </div>
                    }
                  })}
                </div>
                {error.skin ? <h5>{error.skin}</h5> : <h5> </h5>}

                <h3>Select hair:</h3>
                <div className="body-grid-container">
                  {hairs.map((hair, id) => {
                    if (avatar.hair == hair) {
                      return <div className={hairstyle} key={id}>
                        <input
                          type="radio" name="hair"
                          id={hair} className="input-hidden" onChange={() => sethair(hair)} />
                        <label htmlFor={hair}>
                          <img
                            src={hair}
                            alt="hair options" />
                        </label>
                      </div>
                    }
                    else {
                      return <div className="body-grid-item" key={id}>
                        <input
                          type="radio" name="hair"
                          id={hair} className="input-hidden" onChange={() => {
                            sethair(hair)
                            setHairStyle("body-grid-item")
                          }} />
                        <label htmlFor={hair}>
                          <img
                            src={hair}
                            alt="hair options" />
                        </label>
                      </div>
                    }
                  })}
                </div>
                {error.hair ? <h5>{error.hair}</h5> : <h5></h5>}

                <h3>Select extra:</h3>
                <div className="body-grid-container">
                  {extras.map((extra, id) => {
                    if (avatar.extra == extra) {
                      return <div className={extrastyle} key={id}>
                        <input
                          type="radio" name="extra"
                          id={extra} className="input-hidden" onChange={() => setExtra(extra)} />
                        <label htmlFor={extra}>
                          <img
                            src={extra}
                            alt="extra options" />
                        </label>
                      </div>
                    }
                    else {
                      return <div className="body-grid-item" key={id}>
                        <input
                          type="radio" name="extra"
                          id={extra} className="input-hidden" onChange={() => {
                            setExtra(extra)
                            setExtraStyle("body-grid-item")
                          }} />
                        <label htmlFor={extra}>
                          <img
                            src={extra}
                            alt="extra options" />
                        </label>
                      </div>
                    }
                  })}
                </div>
                {error.extra ? <h5>{error.extra}</h5> : <h5></h5>}

                <h3>Select background:</h3>
                <div className="body-grid-container">
                  {backgrounds.map((background, id) => {
                    if (avatar.backgrounds == background) {
                      return <div className={backgroundstyle} key={id}>
                        <input
                          type="radio" name="background"
                          id={background} className="input-hidden" onChange={() => setbackGround(background)} />
                        <label htmlFor={background}>
                          <img
                            src={background}
                            alt="background options" />
                        </label>
                      </div>
                    }
                    else {
                      return <div className="body-grid-item" key={id}>
                        <input
                          type="radio" name="background"
                          id={background} className="input-hidden" onChange={() => {
                            setbackGround(background)
                            setBackgroundStyle("body-grid-item")
                          }} />
                        <label htmlFor={background}>
                          <img
                            src={background}
                            alt="background options" />
                        </label>
                      </div>
                    }
                  })}
                </div>
                {error.background ? <h5>{error.background}</h5> : <h5></h5>}
                {/* <button>test submit</button> */}
                <button type="submit" disabled={Object.values(error).length > 0}>Update Avatar</button>
              </form>
            </div>
          </div>
        ) :
          // if user have no avatar yet
          <div className="create-avatar">
            <h1>Create your avatar</h1>
            <form className="form-create-avatar" onSubmit={handleSubmit}>
              <h3>Select body:</h3>
              <div className="body-grid-container">
                {bodies.map((bodyone, id) => {
                  if (body == bodyone) {
                    return <div className={bodystyle} key={id}>
                      <input
                        type="radio" name="body"
                        id={bodyone} className="input-hidden" onChange={() => setBody(bodyone)} />
                      <label htmlFor={bodyone}>
                        <img
                          src={bodyone}
                          alt="body options" />
                      </label>
                    </div>
                  } else {
                    return <div className="body-grid-item" key={id}>
                      <input
                        type="radio" name="body"
                        id={bodyone} className="input-hidden" onChange={() => {
                          setBody(bodyone)
                          setBodyStyle("body-grid-item")
                        }} />
                      <label htmlFor={bodyone}>
                        <img
                          src={bodyone}
                          alt="body options" />
                      </label>
                    </div>
                  }
                })}
              </div>
              {error.body ? <h5>{error.body}</h5> : <h5></h5>}

              <h3>Select skin:</h3>
              <div className="body-grid-container">
                {skins.map((skinone, id) => {
                  if (skinone == skin) {
                    return <div className={skinstyle} key={id}>
                      <input
                        type="radio" name="skin"
                        id={skinone} className="input-hidden" onChange={() => setSkin(skinone)} />
                      <label htmlFor={skinone}>
                        <img
                          src={skinone}
                          alt="skin options" />
                      </label>
                    </div>
                  }
                  else {
                    return <div className="body-grid-item" key={id}>
                      <input
                        type="radio" name="skin"
                        id={skinone} className="input-hidden" onChange={() => {
                          setSkin(skinone)
                          setSkinStyle("body-grid-item")
                        }} />
                      <label htmlFor={skinone}>
                        <img
                          src={skinone}
                          alt="skin options" />
                      </label>
                    </div>
                  }
                })}
              </div>
              {error.skin ? <h5>{error.skin}</h5> : <h5></h5>}

              <h3>Select hair:</h3>
              <div className="body-grid-container">
                {hairs.map((hairone, id) => {
                  if (hairone == hair) {
                    return <div className={hairstyle} key={id}>
                      <input
                        type="radio" name="hair"
                        id={hairone} className="input-hidden" onChange={() => sethair(hairone)} />
                      <label htmlFor={hairone}>
                        <img
                          src={hairone}
                          alt="hair options" />
                      </label>
                    </div>
                  }
                  else {
                    return <div className="body-grid-item" key={id}>
                      <input
                        type="radio" name="hair"
                        id={hairone} className="input-hidden" onChange={() => {
                          sethair(hairone)
                          setHairStyle("body-grid-item")
                        }} />
                      <label htmlFor={hairone}>
                        <img
                          src={hairone}
                          alt="hair options" />
                      </label>
                    </div>
                  }
                })}
              </div>
              {error.hair ? <h5>{error.hair}</h5> : <h5></h5>}

              <h3>Select extra:</h3>
              <div className="body-grid-container">
              {extras.map((extraone, id) => {
                    if (extraone == extra) {
                      return <div className={extrastyle} key={id}>
                        <input
                          type="radio" name="extra"
                          id={extraone} className="input-hidden" onChange={() => setExtra(extraone)} />
                        <label htmlFor={extraone}>
                          <img
                            src={extraone}
                            alt="extra options" />
                        </label>
                      </div>
                    }
                    else {
                      return <div className="body-grid-item" key={id}>
                        <input
                          type="radio" name="extra"
                          id={extraone} className="input-hidden" onChange={() => {
                            setExtra(extraone)
                            setExtraStyle("body-grid-item")
                          }} />
                        <label htmlFor={extraone}>
                          <img
                            src={extraone}
                            alt="extra options" />
                        </label>
                      </div>
                    }
                  })}
              </div>
              {error.extra ? <h5>{error.extra}</h5> : <h5></h5>}

              <h3>Select background:</h3>
              <div className="body-grid-container">
              {backgrounds.map((backgroundone, id) => {
                    if (backgroundone == background) {
                      return <div className={backgroundstyle} key={id}>
                        <input
                          type="radio" name="background"
                          id={backgroundone} className="input-hidden" onChange={() => setbackGround(backgroundone)} />
                        <label htmlFor={backgroundone}>
                          <img
                            src={backgroundone}
                            alt="background options" />
                        </label>
                      </div>
                    }
                    else {
                      return <div className="body-grid-item" key={id}>
                        <input
                          type="radio" name="background"
                          id={backgroundone} className="input-hidden" onChange={() => {
                            setbackGround(backgroundone)
                            setBackgroundStyle("body-grid-item")
                          }} />
                        <label htmlFor={backgroundone}>
                          <img
                            src={backgroundone}
                            alt="background options" />
                        </label>
                      </div>
                    }
                  })}
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
