const FETCH_DAILIES = 'dailies/fetchDailies'

export const fetchDailies = dailies => ({
    type: FETCH_DAILIES,
    payload: dailies
})


export const thunkFetchDailies = () => async dispatch => {
    const response = await fetch('/api/dailies/');
    if (response.ok) {
        const dailies = await response.json()
        dispatch(fetchDailies(dailies))
    }
}



const initialState = {
    dailies: [],
};

const dailyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DAILIES:
            const newState = {
                ...state,
                dailies: action.payload
            };
            return newState

        default:
            return state;
    }
};

export default dailyReducer
