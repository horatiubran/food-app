import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "../../../../store/auth";

export const useLogout = () => {
    const dispatch = useDispatch()

    return useCallback(_event => {
        dispatch(authActions.logout({}))
    }, [dispatch])
}