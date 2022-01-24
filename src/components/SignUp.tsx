import {useSignUp} from "../hooks/useSignUp";
import {useState} from "react";


export const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const signup = useSignUp()

    return (
        <div className="w-1/2 mx-auto mt-5">
            <h1 className="text-2xl mb-5">Sign Up</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                type="email" placeholder="john@smith.com" onChange={event => setEmail(event.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                type="text" placeholder="John" onChange={event => setName(event.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                type="password" placeholder="********" onChange={event => setPassword(event.target.value)}
            />
            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                <p className="text-sm">
                    Password should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at
                    least 10 characters long.
                </p>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                onClick={() => {
                    signup(email, name, password)
                }}
            >
                Sign Up
            </button>
        </div>
    )
}