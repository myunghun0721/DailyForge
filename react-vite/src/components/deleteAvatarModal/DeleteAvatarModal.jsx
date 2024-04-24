import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './DeleteAvatarModal.css'
import { thunkDeleteAvatars, thunkFetchAvatars } from '../../redux/avatars';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { thunkDeleteSong } from '../../redux/songs';
// import { deleteSong } from '../../redux/user';




function DeleteAvatarModal({ avatarId }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function noButton() {
        closeModal()
    }
    async function yesButton() {

        dispatch(thunkDeleteAvatars(avatarId))
        navigate('/avatar')
        dispatch(thunkFetchAvatars())
        closeModal()
    }

    return (
        <div id="deleteModal" className='div-modal-login'>
            <h1>Confirm Delete Avatar</h1>

            <div className="button-confirm">
                <button id="yes" onClick={yesButton}>
                    Yes (DELETE Avatar)
                </button>
                <button id="no" onClick={noButton}>
                    No (Keep Avatar)
                </button>
            </div>
        </div>
    );
}


export default DeleteAvatarModal;
