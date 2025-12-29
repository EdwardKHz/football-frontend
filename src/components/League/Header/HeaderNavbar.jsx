import {Nav, Navbar} from "react-bootstrap";

const HeaderNavbar = () => {
    return (
        <Navbar>
            <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
            >
                <Nav.Link href="#action1">Overview</Nav.Link>
                <Nav.Link href="#action2">Table</Nav.Link>
                <Nav.Link href="#action2">Fixtures</Nav.Link>
                <Nav.Link href="#action2">Stats</Nav.Link>
                <Nav.Link href="#action2">Seasons</Nav.Link>
            </Nav>
        </Navbar>
    );

}

export default HeaderNavbar;