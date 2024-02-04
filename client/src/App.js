import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import D3Map from "./components/D3Map";
import NavigationBar from "./components/NavigationBar";

export default function App() {
    return (
        <>
            <NavigationBar />
            <BrowserRouter>
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
