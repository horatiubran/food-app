import {Link} from "react-router-dom";
import {PrimaryModal} from "../../login/PrimaryModal";
import {LoginModal} from "../../login/LoginModal";
import {Store} from "../../../store";

export const Login = () => <>
    <Link hidden={Store.useIsAuth()} to="#" className="nav-link" href="src/components/Navbar/Buttons/Login#"
          data-bs-toggle="modal" data-bs-target="#LogInModal">
        Log In
    </Link>
    <PrimaryModal title="Please Log in" id={"LogInModal"}>
        <LoginModal/>
    </PrimaryModal>
</>