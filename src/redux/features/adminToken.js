import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adminToken: null
}

const adminTokenSlicer = createSlice({
    name:'adminToken',
    initialState,
    reducers:{
        createAdminToken: (state,action) => {
            state.adminToken = action.payload
        },
        deleteAdminToken: (state) => {
            state.adminToken = null
        }
    }
})

export const {createAdminToken,deleteAdminToken} = adminTokenSlicer.actions
export default adminTokenSlicer.reducer
