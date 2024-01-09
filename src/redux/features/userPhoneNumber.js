import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phoneNumber: null
}

const userPhoneNumberSlicer = createSlice({
    name:'phoneNumberReducer',
    initialState,
    reducers:{
        getPhoneNumber: (state,action) => {
            state.phoneNumber = action.payload
        },
        removePhoneNumber : (state) => {
            state.phoneNumber = null
        }
    }
})

export const {getPhoneNumber, removePhoneNumber} = userPhoneNumberSlicer.actions
export default userPhoneNumberSlicer.reducer