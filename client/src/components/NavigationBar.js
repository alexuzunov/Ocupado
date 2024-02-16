import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useAuth } from "../contexts/AuthContext";

const NavigationBar = () => {
    const { currentData } = useAuth();

    return (
        <Navbar bg="light" data-bs-theme="light" className="fs-4 px-5">
            <Navbar.Brand className="" href="/"><span class="mb-0 h1">Ocupado</span></Navbar.Brand>
            {currentData ? 
                (   
                <Nav className="ms-auto">
                    <div class="dropdown">
                        <div class="border-0" id="menu" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/default.png" style={{ width: 85, height: 50}} />
                        </div>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="menu">
                            <li><a class="dropdown-item" href="#">My Profile</a></li>
                            <li><a class="dropdown-item" href="#">My Facilities</a></li>
                            <li><a class="dropdown-item" href="/logout">Logout</a></li>
                        </ul>
                    </div>
                </Nav>
                ) :
                (
                <Nav className="ms-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Sign Up</Nav.Link>
                </Nav>
                )
            }
        </Navbar>
    );
}

export default NavigationBar;