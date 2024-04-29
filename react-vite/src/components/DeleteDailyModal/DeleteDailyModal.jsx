import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './DeleteDailyModal.css'
import { thunkDeleteAvatars, thunkFetchAvatars } from '../../redux/avatars';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { thunkDeleteDaily } from '../../redux/dailies';
// import { thunkDeleteSong } from '../../redux/songs';
// import { deleteSong } from '../../redux/user';




function DeleteDailyModal({ dailyId }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function noButton() {
        closeModal()
    }
    async function yesButton() {

        dispatch(thunkDeleteDaily(dailyId))

        closeModal()
    }

    return (
        <div id="deleteModal" className='div-modal-login'>
            <h1>Confirm Delete Daily</h1>

            <div className="button-confirm">
                <button id="yes" onClick={yesButton}>
                    Yes (DELETE Daily)
                </button>
                <button id="no" onClick={noButton}>
                    No (Keep Daily)
                </button>
            </div>
        </div>
    );
}


export default DeleteDailyModal;
