import {useSelector} from "react-redux";

export const useIsAuth = () => useSelector(state => state.auth.isAuth)