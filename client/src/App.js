import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Homepage from "./components/Homepage";
import D3Map from "./components/D3Map";
import NavigationBar from "./components/NavigationBar";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
    return (
        <>
            <AuthContextProvider>
                <BrowserRouter>
                    <NavigationBar />
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/logout" element={<Logout />} />
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/map" element={<ProtectedRoute><D3Map /></ProtectedRoute>} />
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    );
}
