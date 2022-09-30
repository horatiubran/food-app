import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./auth";
import {useIsAuth} from "./hooks/useIsAuth";

export const store = configureStore({reducer: {auth: authSlice.reducer}})

export const Store = {
    useIsAuth
}
