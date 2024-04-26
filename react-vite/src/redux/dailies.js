const FETCH_DAILIES = 'dailies/fetchDailies'
const ADD_DAILY = 'daily/addDaily'
const DELETE_DAILY ='daily/deleteDaily'
export const addDaily = daily => ({
    type: ADD_DAILY,
    payload: daily
})
export const fetchDailies = dailies => ({
    type: FETCH_DAILIES,
    payload: dailies
})
export const deleteDailyStore = dailyId =>({
    type: DELETE_DAILY,
    payload: dailyId
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

export const thunkDeleteDaily = (dailyId) => async dispatch => {
    const res = await fetch(`/api/dailies/${dailyId}/delete`, {
        method: 'DELETE',
    })
    if (res.ok) {
        dispatch(deleteDailyStore(dailyId))
    }
}




const dailyReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DAILIES:
            const newState = {...state};
            action.payload.forEach(daily => {
                newState[daily.id] = daily;
            });

            return newState;

        case ADD_DAILY: {
            return { ...state, [action.payload.id]: action.payload };
        }
        case DELETE_DAILY: {
            const newState = {...state};
            delete newState[action.payload];
            return newState;
        }
        default:
            return state;
    }
            console.log("🚀 ~ dailyReducer ~ newCommentsState:", newCommentsState)
            console.log("🚀 ~ dailyReducer ~ newCommentsState:", newCommentsState)
};

export default dailyReducer
