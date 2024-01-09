import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: ''
}

export const userDataSlice = createSlice({
    name:"userData",
    initialState,
    reducers:{
        setUser: (state,action) =>{
            state.user = action.payload
        },
        clearUser:() => {
            return ''
        }
    }
})

export const {setUser, clearUser} = userDataSlice.actions
export default userDataSlice.reducer