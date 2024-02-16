import { createContext, useState, useContext } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [currentData, setCurrentData] = useState(localStorage.getItem('data'));

    const set = (data) => {
        localStorage.setItem("data", JSON.stringify(data));
        setCurrentData(data);
    }

    const logout = () => {
        localStorage.removeItem("data");
        setCurrentData(null);
    }

    return (
        <AuthContext.Provider value={{ currentData, set, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
