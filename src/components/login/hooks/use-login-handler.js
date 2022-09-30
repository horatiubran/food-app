import {authActions} from "../../../store/auth";
import {useDispatch} from "react-redux";


export const loginHandler = (event) => {
    event.preventDefault()
    const dispatch = useDispatch()
    dispatch(authActions.login())
}