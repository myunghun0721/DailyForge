import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './AddDailyModal.css'
import { thunkDeleteAvatars, thunkFetchAvatars } from '../../redux/avatars';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { thunkAddDailies } from '../../redux/dailies';
// import { thunkDeleteSong } from '../../redux/songs';
// import { deleteSong } from '../../redux/user';


function AddDailyModal() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [difficulty, setDifficulty] = useState()
    const [startDate, setStartDate] = useState()
    const [repeat, setRepeat] = useState(false)
    const [error, setError] = useState({})
    const {closeModal} = useModal()

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('title', title)
        formData.append('note', note)
        formData.append('difficulty', difficulty)
        formData.append('start_date', startDate)
        formData.append('repeats', repeat)

        setError({})

        // console.log("submit")
        dispatch(thunkAddDailies(formData))
        // for (const value of formData.values()) {
        //     console.log(value);
        //   }
        closeModal()
    }

    useEffect(() => {
        const errObj = {}
        if (!title.length) errObj.title = "Title required"
        if (!note.length) errObj.note = "Note required"
        if (!difficulty) errObj.difficulty = "Difficulty required"
        if (!startDate) errObj.startDate = "Start Date required"


        setError(errObj)
    }, [title, note, difficulty, startDate])
    return (
        <div className='create-modal'>
            <h1>Create your daily</h1>
            <form className="form-create-daily" onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="title" placeholder={"Title"} value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                {error.title ? <h5>{error.title}</h5> : <h5></h5>}

                <label>
                    <input type="text" name="note" placeholder={"Your note goes here..."} value={note} onChange={(e) => setNote(e.target.value)} />
                </label>

                {error.note ? <h5>{error.note}</h5> : <h5></h5>}

                <label htmlFor="difficulty">
                    <select id="difficulty" name="difficulty" onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="none">Select an Option</option>
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>

                {error.difficulty ? <h5>{error.difficulty}</h5> : <h5></h5>}

                <label>
                    Start Date:
                    <input type="date" name="start_date" onChange={(e) => setStartDate(e.target.value)} />
                </label>
                {error.startDate ? <h5>{error.startDate}</h5> : <h5></h5>}
                {/* <label>
                    Repeat:
                    <input type='checkbox' checked={repeat} onChange={() => setRepeat(!repeat)} />
                </label> */}

                <button className='submit-button' type="submit" disabled={Object.values(error).length > 0}>Add Daily</button>
            </form>
        </div>
    );
}


export default AddDailyModal;
