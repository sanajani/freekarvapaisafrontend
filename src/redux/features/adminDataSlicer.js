import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminData:''
}

export const adminSlicer = createSlice({
    name:"adminUser",
    initialState,
    reducers:{
        setAdminData: (state,action) => {
            state.adminData = action.payload
        },
        removeAdminData: (state) => {
            state.adminData = ''
        }
    }
})

export const {setAdminData, removeAdminData} = adminSlicer.actions
export default adminSlicer.reducer
