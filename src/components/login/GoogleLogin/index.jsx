import {GoogleLogin} from "react-google-login"

export const LoginWithGoogle = () => {
    const responseGoogleOnSuccess = (response) => {
        console.log("success", response)
    }
    const responseGoogleOnFail = (response) => {
        console.log("notsuccess", response)
    }
    return <GoogleLogin clientId="1087149830898-12b9fviobgmhq3mm6a0u1gnforgo1uc6.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={responseGoogleOnSuccess}
                        onFailure={responseGoogleOnFail}
                        />

}