import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null
}

const tokenSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
        createToken: (state,action) => {
            state.token = action.payload
        },
        deleteToken: (state) => {
            state.token = null
        }
    }
})

export const {createToken,deleteToken} = tokenSlice.actions
export default tokenSlice.reducer
