import {Dropdown} from "react-bootstrap";
import {useEffect, useState} from "react";
import leagueService from "../../services/leagueService.js";

const AllLeagues = () => {

    const [allLeagues, setAllLeagues] = useState([]);

    useEffect(() => {
        async function fetchLeagues() {
            try {
                const data = await leagueService.getAllLeagues();
                setAllLeagues(data);
                console.log(data);
            } catch (err) {
                console.error('Failed to load leagues', err);
            }
        }

        fetchLeagues();
    }, []);

    //incomplete
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                All Leagues
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {allLeagues.map(league => (
                    <Dropdown key={league.country}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img src={league.country_flag} alt=""/>
                            {league.country}
                        </Dropdown.Toggle>
                    </Dropdown>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AllLeagues;