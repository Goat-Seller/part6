import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: 'toFilter',
    initialState: '',
    reducers:{
        setFilter(state, action) {
            return state = action.payload
        },
    }
})
export const { setFilter } = filterSlice.actions
export default filterSlice.reducer