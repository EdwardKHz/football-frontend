import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const HeaderNavbar = () => {
    return (
        <Navbar>
            <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
            >
                <NavLink to="overview" className="nav-link">Overview</NavLink>
                <NavLink to="table" className="nav-link">Table</NavLink>
                <NavLink to="fixtures" className="nav-link">Fixtures</NavLink>
                <NavLink to="stats" className="nav-link">Stats</NavLink>
                <NavLink to="seasons" className="nav-link">Seasons</NavLink>
                <NavLink to="news" className="nav-link">News</NavLink>
            </Nav>
        </Navbar>
    );

}

export default HeaderNavbar;