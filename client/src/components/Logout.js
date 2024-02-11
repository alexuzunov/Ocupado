import { Navigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuth } from "../contexts/AuthContext";

const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        logout();
    });

    return <Navigate to="/" />;
}

export default Logout;
