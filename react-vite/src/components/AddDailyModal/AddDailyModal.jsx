import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './AddDailyModal.css'
import { useEffect, useState } from 'react';
import { thunkAddDailies } from '../../redux/dailies';
// import { thunkDeleteSong } from '../../redux/songs';
// import { deleteSong } from '../../redux/user';


function AddDailyModal() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [difficulty, setDifficulty] = useState()
    const [startDate, setStartDate] = useState()
    // const [repeat, setRepeat] = useState(false)
    const [error, setError] = useState({})
    const {closeModal} = useModal()

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('title', title)
        formData.append('note', note)
        formData.append('difficulty', difficulty)
        formData.append('start_date', startDate)
        formData.append('repeats', false)

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
        if (title.length < 4) errObj.title = "Title must longer than 4 characters"
        if (title.length > 50) errObj.title = "Title must less than 50 characters"
        if (note.length < 10) errObj.note = "Note must longer than 10 characters"
        if (note.length > 200) errObj.note = "Note must less than 200 characters"
        if (!difficulty) errObj.difficulty = "Difficulty required"
        if (!startDate) errObj.startDate = "Start Date required"


        setError(errObj)
    }, [title, note, difficulty, startDate])
    return (
        <div className='create-modal'>
            <h1>Create your daily</h1>
            <form className="form-create-daily" onSubmit={handleSubmit}>
                <label>Title:
                    <input type="text" name="title" placeholder={"Title"} value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                {error.title ? <h5>{error.title}</h5> : <h5></h5>}

                <label>Note:
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
