import {Nav, Navbar} from "react-bootstrap";
import {NavLink, useLocation, useParams} from "react-router-dom";

const HeaderNavbar = () => {
    const {leagueID, season} = useParams();
    return (
        <Navbar>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <NavLink
                    to={`/leagues/${leagueID}/overview${season ? `/season/${season}` : ""}`}
                    className="nav-link"
                >
                    Overview
                </NavLink>

                <NavLink
                    to={`/leagues/${leagueID}/table${season ? `/season/${season}` : ""}`}
                    className="nav-link"
                >
                    Table
                </NavLink>

                <NavLink
                    to={`/leagues/${leagueID}/fixtures${season ? `/season/${season}` : ""}`}
                    className="nav-link"
                >
                    Fixtures
                </NavLink>

                <NavLink
                    to={`/leagues/${leagueID}/stats${season ? `/season/${season}` : ""}`}
                    className="nav-link"
                >
                    Stats
                </NavLink>

                <NavLink
                    to={`/leagues/${leagueID}/seasons${season ? `/season/${season}` : ""}`}
                    className="nav-link"
                >
                    Seasons
                </NavLink>

                <NavLink
                    to={`/leagues/${leagueID}/news${season ? `/season/${season}` : ""}`}
                    className="nav-link"
                >
                    News
                </NavLink>
            </Nav>
        </Navbar>
    );

}

export default HeaderNavbar;