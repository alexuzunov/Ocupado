import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = ({ isLoggedIn }) => {
    return (
        <Navbar bg="light" data-bs-theme="light" className="fs-4 px-5">
            <Navbar.Brand className="" href="/"><span class="mb-0 h1">Ocupado</span></Navbar.Brand>
            {isLoggedIn ? 
                (   
                <Nav className="ms-auto">
                    <Nav.Link>Logout</Nav.Link>
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