import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import NewsList from "./components/NewsList";
import {NewsPage} from "./components/NewsPage";
import {Login} from "./components/Login";
import {useLogout} from "./hooks/useLogout";
import {useAuthMember} from "@tribeplatform/react-sdk/hooks";
import {SignUp} from "./components/SignUp";

function App() {
    const logout = useLogout()
    const {data: user} = useAuthMember()

    return (
        <>
            <nav className="flex justify-center lg:mt-2">
                <div className="flex items-center justify-between flex-wrap lg:w-3/4 w-full p-2 bg-hacker-header">
                    <div className="flex items-center flex-shrink-0 text-black mr-6">
                        <Link to="/">
                            <span className="font-semibold text-xl tracking-tight">ReactSDK Tutorial</span>
                        </Link>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-sm">
                        <div className="lg:flex-grow">
                            <Link to="/"
                                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                                News
                            </Link>
                            <Link to="/submit"
                                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                                Submit
                            </Link>
                        </div>
                        <div>
                            {!user && (
                                <>
                                    <Link to="/login"
                                          className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                                        Login
                                    </Link>
                                    <Link to="/signup"
                                          className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                            {user && (
                                <>
                                    <span className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
                                        Hello, {user.name}
                                    </span>
                                    <div
                                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mt-4 cursor-pointer"
                                        onClick={() => {
                                            logout()
                                        }}
                                    >
                                        Logout
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<NewsList/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/:postId" element={<NewsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
