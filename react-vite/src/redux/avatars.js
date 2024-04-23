const FETCH_AVATARS = 'avatars/fetchAvatars'
export const fetchAvatars = avatars => ({
    type: FETCH_AVATARS,
    payload: avatars
})

export const thunkFetchAvatars= () => async dispatch => {
    const response = await fetch('/api/avatars/');
    if (response.ok) {
        const avatars = await response.json()
        // console.log("response", response)
        dispatch(fetchAvatars(avatars))
    }
}
const initialState = {
    users: null,
    avatars: [],
};

const avatarReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AVATARS:
            return {
                ...state,
                avatars: action.payload
            };

        default:
            return state;
    }
};

export default avatarReducer
