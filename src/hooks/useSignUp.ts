import {useJoinNetwork} from "@tribeplatform/react-sdk/hooks";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";


export const useSignUp = () => {
    const {mutateAsync: signup} = useJoinNetwork({fields: 'basic'})
    const navigate = useNavigate()

    return useCallback((email: string, name: string, password: string) => {
        signup({
            input: {
                email,
                name,
                password,
            }
        }).then(() => {
            navigate('/login')
        })
    }, [signup, navigate])
}