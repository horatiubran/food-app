import {Field} from "../field"
import {useDispatch} from "react-redux";
import {authActions} from "../../../store/auth";

export const Login = () => {
    const dispatch = useDispatch()

    const loginHandler = (event) => {
        event.preventDefault()
        dispatch(authActions.login())
    }

    return <form onSubmit={loginHandler}>
        <div className="mb-3">
            <Field id={'email'} type='email' name={'name'} placeholder={"Add email please"} label="Email:"/>
        </div>
        <div className="mb-3">
            <Field id={'password'} name={'password'} type='password' placeholder={"Tralalal"} label="Password:"/>
        </div>
        <button className="btn btn-success" data-bs-dismiss="modal">Submit</button>
    </form>
}