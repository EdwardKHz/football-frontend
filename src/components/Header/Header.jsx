import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import HeaderSearch from "./HeaderSearch.jsx";

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: '#1a1a1a', borderRadius: '10px', width: '100%' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ color: 'white' }}>fotmob</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1" style={{ color: 'white' }}>Home</Nav.Link>
                    <Nav.Link href="#action2" style={{ color: 'white' }}>Link</Nav.Link>
                    <Nav.Link href="#action2" style={{ color: 'white' }}>Link</Nav.Link>
                    <Nav.Link href="#action2" style={{ color: 'white' }}>Link</Nav.Link>
                </Nav>
               <HeaderSearch />
            </Container>
        </Navbar>

    );
}


export default Header;