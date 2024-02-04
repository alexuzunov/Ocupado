import { useState } from "react";
import { redirect } from "react-router-dom";

import axios from 'axios';
import '../assets/css/Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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

        localStorage.setItem("accessToken", result.data.accessToken);

        if (error) setError("");

        return redirect("/");
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
