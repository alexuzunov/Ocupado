import { Navigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuth } from "../contexts/AuthContext";

const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    });

    return <Navigate to="/" />;
}

export default Logout;
