import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from 'axios';
import '../assets/css/Register.css';

import { useAuth } from "../contexts/AuthContext";

const Register = () => {
    const navigate = useNavigate();
    const { currentData, set } = useAuth();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    if (currentData) {
        return <Navigate to="/" replace />; 
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, 
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
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
        <div className='Register'>
            <div className="form-container">
                <div className="form-header">
                    <p>Register for <span className="text-warning">FREE</span> Today</p>
                </div>
                <div className="form-group">
                    <form>
                        <div className="form-input">
                            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-input">
                            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="form-input">
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-input">
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-input">
                            <input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </form>
                    { error && <p>{error}</p> }
                    <p> Already have an account? <a href='/login'>Login!</a> </p>
                </div>
                <div className="form-submit">
                    <button onClick={handleClick}>
                        Get Started
                    </button>
                </div>
            </div>
        </div> 
    );
}

export default Register;