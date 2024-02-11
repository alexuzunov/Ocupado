import { createContext, useState, useContext } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('user'));

    const setUser = (user) => {
        setCurrentUser(user);
    }

    const logout = () => {
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{ currentUser, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
