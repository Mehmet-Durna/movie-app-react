import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";

function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="movieDetail" element={<MovieDetail/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default AppRouter;