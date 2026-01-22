import {Dropdown} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const SeasonDropDown = ({seasons}) => {

    const location = useLocation();

    const basePath = location.pathname.split("/season")[0];

    return (
        <Dropdown className="ms-auto">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Season
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {seasons.map(season => (
                    <Dropdown.Item
                        key={season}
                        as={Link}
                        to={`${basePath}/season/${season}`}
                    >
                        {season}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SeasonDropDown;