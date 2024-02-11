import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useAuth } from "../contexts/AuthContext";

const NavigationBar = () => {
    const { currentUser } = useAuth();

    return (
        <Navbar bg="light" data-bs-theme="light" className="fs-4 px-5">
            <Navbar.Brand className="" href="/"><span class="mb-0 h1">Ocupado</span></Navbar.Brand>
            {currentUser ? 
                (   
                <Nav className="ms-auto">
                    <Nav.Link href="/logout">Logout</Nav.Link>
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