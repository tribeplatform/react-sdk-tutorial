import {useState} from "react";
import {useLogin} from "../hooks/useLogin";

export const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const login = useLogin()

    return (
        <div className="w-1/2 mx-auto mt-5">
            <h1 className="text-2xl mb-5">Login</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                type="email" placeholder="john@smith.com" onChange={event => setEmail(event.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                type="password" placeholder="********" onChange={event => setPassword(event.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                onClick={() => {
                    login(email, password)
                }}
            >
                Login
            </button>
        </div>
    )
}