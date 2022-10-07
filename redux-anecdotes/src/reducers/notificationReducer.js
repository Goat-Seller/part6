import { createSlice } from "@reduxjs/toolkit"
const initialState = ''
let timer
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        setMess(state, action) {
            return state = action.payload
        },
        removeNotification(state) {
            return state = ''
        }
    }
})
export const { setMess, removeNotification } = notificationSlice.actions

export const setNotification = (mess ,time) => {
    return (dispatch, getState) => {
        if(getState().notification !== ''){
            clearTimeout(timer)
            timer = setTimeout(() => {
                dispatch(removeNotification())
            }, time * 1000);
        }
        else{
            timer =setTimeout(() => {
                dispatch(removeNotification())
            }, time * 1000)
        }
        dispatch(setMess(mess))
    }
}

export default notificationSlice.reducer