import React from 'react';
import {Routes, Route} from "react-router-dom";
import NewsList from "./components/NewsList";
import {NewsPage} from "./components/NewsPage";
import {Composer} from "./components/Composer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NewsList/>}/>
            <Route path="/submit" element={<Composer/>}/>
            <Route path="/:postId" element={<NewsPage/>}/>
        </Routes>
    );
}

export default App;
