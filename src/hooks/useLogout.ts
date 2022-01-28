import {useCallback} from "react";

export const useLogout = () => {
    return useCallback(() => {
        localStorage.removeItem('apiKey')
        window.location.href = '/react-sdk-tutorial'
    }, [])
}