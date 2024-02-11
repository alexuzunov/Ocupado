import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import D3Map from "./components/D3Map";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <>
            <BrowserRouter>
                <NavigationBar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/map" element={<D3Map />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
