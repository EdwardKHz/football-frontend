import {useTeam} from "./TeamContext.jsx";
import {Dropdown} from "react-bootstrap";

const LeagueDropDown = () => {

    const {teamLeagues, setCurrentLeague} = useTeam();

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Leagues
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {teamLeagues && teamLeagues.map(league => (
                    <Dropdown.Item
                        key={league.league_id}
                        onClick={() => setCurrentLeague(league.league_id)}
                    >
                        {league.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )


}

export default LeagueDropDown;