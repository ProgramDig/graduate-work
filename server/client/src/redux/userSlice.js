import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:{},
        users:[]
    },
    reducers: {

    }
})

export const {} = userSlice.actions
export default userSlice.reducer
