import {createSlice} from "@reduxjs/toolkit";

const DEFAULT_USER = {_id: '', email: '', login: '', fullName: '', password: '', role: '', isActivated: '', link: ''}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: DEFAULT_USER,
        users: []
    },
    reducers: {
        setUser(state, action) {
            state.user = {
                _id: action.payload._id,
                email: action.payload.email,
                login: action.payload.login,
                fullName: action.payload.fullName,
                password: action.payload.password,
                role: action.payload.role,
                isActivated: action.payload.isActivated,
                link: action.payload.link
            }
        },
        removeUser(state) {
            state.user = DEFAULT_USER
        },
        setUsers(state, action) {
            state.users = [...action.payload]
        }
    }
})

export const {setUser, removeUser, setUsers} = userSlice.actions
export default userSlice.reducer
