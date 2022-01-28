import React from 'react';
import {Routes, Route} from "react-router-dom";
import NewsList from "./components/NewsList";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NewsList/>}/>
        </Routes>
    );
}

export default App;
