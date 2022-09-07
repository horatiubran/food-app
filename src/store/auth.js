import {createSlice} from "@reduxjs/toolkit";

const initialAuth = { isAuth: true }

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuth,
    reducers: {
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        }
    }
})

export const authActions = authSlice.actions;