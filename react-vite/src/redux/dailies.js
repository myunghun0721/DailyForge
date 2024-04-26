const FETCH_DAILIES = 'dailies/fetchDailies'
const ADD_DAILY = 'daily/addDaily'
export const addDaily = daily => ({
    type: ADD_DAILY,
    payload: daily
})
export const fetchDailies = dailies => ({
    type: FETCH_DAILIES,
    payload: dailies
})


export const thunkFetchDailies = () => async dispatch => {
    const response = await fetch('/api/dailies/');
    if (response.ok) {
        const dailies = await response.json()
        await dispatch(fetchDailies(dailies))
        return dailies
    }
}

export const thunkAddDailies = (daily) => async dispatch => {
    const response = await fetch('/api/dailies/new', {
        method: 'POST',
        body: daily
    });
    if (response.ok) {
        const daily = await response.json()
        dispatch(addDaily(daily))
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

        case ADD_DAILY: {
            return { ...state, [action.payload.id]: action.payload };
        }
        default:
            return state;
    }
};

export default dailyReducer
