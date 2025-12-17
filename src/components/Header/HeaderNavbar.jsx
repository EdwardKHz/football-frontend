import {Nav, Navbar} from "react-bootstrap";

const HeaderNavbar = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#home" >fotmob</Navbar.Brand>
            <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default HeaderNavbar;