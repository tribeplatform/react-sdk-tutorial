import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import NewsList from "./components/NewsList";
import {NewsPage} from "./components/NewsPage";
import {Composer} from "./components/Composer";

function App() {
    return (
        <>
            <nav className="bg-teal-500 flex justify-center mb-5">
                <div className="flex items-center justify-between flex-wrap w-3/4 py-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <Link to="/">
                            <span className="font-semibold text-xl tracking-tight">ReactSDK Tutorial</span>
                        </Link>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <Link to="/"
                                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                News
                            </Link>
                            <Link to="/submit"
                                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Submit
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<NewsList/>}/>
                <Route path="/submit" element={<Composer/>}/>
                <Route path="/:postId" element={<NewsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
