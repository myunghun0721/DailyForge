const FETCH_DAILIES = 'dailies/fetchDailies'
const ADD_DAILY = 'daily/addDaily'
const DELETE_DAILY = 'daily/deleteDaily'
const FETCH_DAILY = 'daily/fetchDaily'
const UPDATE_DAILY = 'daily/updateDaily'

export const updateDaily = daily => ({
    type: UPDATE_DAILY,
    payload: daily
})

export const fetchDailiesById = daily => ({
    type: FETCH_DAILY,
    payload: daily
})
export const addDaily = daily => ({
    type: ADD_DAILY,
    payload: daily
})
export const fetchDailies = dailies => ({
    type: FETCH_DAILIES,
    payload: dailies
})
export const deleteDailyStore = dailyId => ({
    type: DELETE_DAILY,
    payload: dailyId
})

export const thunkUpdateDaily = (daily, dailyId) => async (dispatch) => {
    const res = await fetch(`/api/dailies/${dailyId}`, {
        method: "PUT",
        body: daily
    });

    if (res.ok) {
        const updatedDaily = await res.json();
        dispatch(updateDaily(updatedDaily));
        return updatedDaily;
    }
}

export const thunkFetchDailies = () => async dispatch => {
    const res = await fetch('/api/dailies/');
    if (res.ok) {
        const dailies = await res.json()
        await dispatch(fetchDailies(dailies))
        return dailies
    }
}

export const thunkAddDailies = (daily) => async dispatch => {
    const res = await fetch('/api/dailies/new', {
        method: 'POST',
        body: daily
    });
    if (res.ok) {
        const daily = await res.json()
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

export const thunkFetchDailyById = (dailyId) => async dispatch => {
    const res = await fetch(`/api/dailies/${dailyId}`);
    if (res.ok) {
        const daily = await res.json()
        await dispatch(fetchDailiesById(daily))
        return daily
    }
}

const dailyReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DAILIES:
            if (action.payload.message) return {}
            const newState = {};
            action.payload.forEach(daily => {
                newState[daily.id] = daily;
            });

            return newState;


        case ADD_DAILY: {
            return { ...state, [action.payload.id]: action.payload };
        }
        case DELETE_DAILY: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        case FETCH_DAILY:
            return {
                ...state,

                [action.payload.id]: action.payload
            }
        case UPDATE_DAILY: {
            const editDailyState = { ...state }
            editDailyState[action.payload.id] = action.payload
            return editDailyState
        }
        default:
            return state;
    }

};

export default dailyReducer
