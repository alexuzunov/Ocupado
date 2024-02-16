import { createContext, useState, useContext } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [currentData, setCurrentData] = useState(localStorage.getItem('data'));

    const login = (data) => {
        localStorage.setItem("data", JSON.stringify(data));
        setCurrentData(data);
    }

    const logout = () => {
        localStorage.removeItem("data");
        setCurrentData(null);
    }

    return (
        <AuthContext.Provider value={{ currentData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
