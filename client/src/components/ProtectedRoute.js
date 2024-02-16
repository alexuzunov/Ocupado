import { Navigate } from"react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { currentData } = useAuth();

    if (currentData === null) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;