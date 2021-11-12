import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../screens/Home/Home";
import Details from "../screens/Details/Details";
import { useEffect, useRef, useState } from "react";


function CustomController(){
    return(
        <>
        <NavBar/>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/details/:id" element={<Details />}></Route>
            </Routes>
        </Router>
        </>
    )
}

export default CustomController;