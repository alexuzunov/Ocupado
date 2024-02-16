import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from 'axios';
import '../assets/css/Login.css';

import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { currentData, set } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    if (currentData) {
        return <Navigate to="/" replace />; 
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, 
        {
            email: email,
            password: password,
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (result.data.error) {
            setError(result.data.error);

            return;
        }

        const data = { id: result.data.user._id, accessToken: result.data.accessToken, firstName: result.data.user.firstName, lastName: result.data.user.lastName, email: result.data.user.email };

        set(data);

        if (error) setError("");

        navigate("/");
    }

    return (
        <div className='Login'>
            <div className="form-container">
                <div className="form-header">
                    <p>Login to your account</p>
                </div>
                <div className="form-group">
                    <form>            
                        <div className="form-input">
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-input">
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>        
                    </form>
                    { error && <p>{error}</p> }
                    <p> Don't have an account? <a href='/register'>Sign up!</a> </p>
                </div>
                <div className="form-submit">
                    <button onClick={handleClick} >
                        Login
                    </button>
                </div>
            </div>
        </div> 
    );
}

export default Login;
