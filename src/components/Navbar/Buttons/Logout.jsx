import {Store} from "../../../store";
import {useLogout} from "./hooks/useLogout";

export const Logout = () => <button hidden={!Store.useIsAuth()} className="btn btn-danger" onClick={useLogout()}>
    Log Out
</button>