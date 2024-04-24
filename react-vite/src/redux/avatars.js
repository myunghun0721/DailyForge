const FETCH_AVATARS = 'avatars/fetchAvatars'
const CREATE_AVATAR = 'avatars/createAvatar'
const DELETE_AVATAR = 'avatars/deleteAvatar'
const UPDATE_AVATAR = 'avatars/updateAvatar'
export const fetchAvatars = avatars => ({
    type: FETCH_AVATARS,
    payload: avatars
})

export const createAvatar = avatars => ({
    type: CREATE_AVATAR,
    payload: avatars
})

export const deleteAvatarStore = (avatarId) => ({
    type: DELETE_AVATAR,
    payload: avatarId
})

export const updateAvatar = avatar => ({
    type: UPDATE_AVATAR,
    payload: avatar
})
export const thunkFetchAvatars = () => async dispatch => {
    const response = await fetch('/api/avatars/');
    if (response.ok) {
        const avatars = await response.json()
        dispatch(fetchAvatars(avatars))
    }
}
export const thunkCreateAvatars = (avatar) => async dispatch => {
    const res = await fetch('/api/avatars/new', {
        method: 'POST',
        body: avatar
    })
    if (res.ok) {
        const avatar = await res.json()
        dispatch(createAvatar(avatar))
        return avatar
    }
    else {
        return "avatar thunk error"
    }
}

export const thunkDeleteAvatars = (avatarId) => async dispatch => {
    const res = await fetch(`/api/avatars/${avatarId}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        await res.json()
        dispatch(deleteAvatarStore(avatarId))
    }
}

export const thunkUpdateAvatar = (avatar, avatarId) => async (dispatch) => {
    const response = await fetch(`/api/avatars/${avatarId}/update`, {
        method: "PUT",
        body: avatar
    });

    if (!response.ok) {
        throw new Error('Failed to update the avatar.');
    }

    const updatedAvatar = await response.json();
    dispatch(updateAvatar(updatedAvatar));
    return updatedAvatar;
}

const initialState = {
    users: null,
    avatars: [],
};

const avatarReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AVATARS:
            const newState = {
                ...state,
                avatars: action.payload
            };
            return newState

        case CREATE_AVATAR: {
            const newAvatarState = { ...state }
            newAvatarState[action.payload.id] = action.payload
            return newAvatarState
        }
        case DELETE_AVATAR: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;

        }
        case UPDATE_AVATAR: {
            const editAvatarState = { ...state }
            editAvatarState[action.payload.id] = action.payload
            return editAvatarState
        }

        default:
            return state;
    }
};

export default avatarReducer
