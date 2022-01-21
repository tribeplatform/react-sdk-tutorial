import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import NewsList from "./components/NewsList";
import {NewsPage} from "./components/NewsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NewsList/>}/>
            <Route path="/:postId" element={<NewsPage />} />
        </Routes>
    );
}

export default App;
