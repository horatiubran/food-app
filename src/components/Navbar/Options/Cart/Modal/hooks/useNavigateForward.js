import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export const useNavigateForward = () => {
    const navigate = useNavigate()

    return useCallback(() => {
        navigate("../checkout")
    }, [navigate])
}