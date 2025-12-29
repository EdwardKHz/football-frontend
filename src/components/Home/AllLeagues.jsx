import {Dropdown} from "react-bootstrap";
import {useEffect, useState} from "react";
import leagueService from "../../services/leagueService.js";
import {groupCountriesWithLeagues} from "../../utils/ui_helper_functions.js";
import LeagueButton from "./LeagueButton.jsx";
import CountryToggle from "./CountryToggle.jsx";

const AllLeagues = () => {

    const [allLeagues, setAllLeagues] = useState([]);

    useEffect(() => {
        async function fetchLeagues() {
            try {
                const data = await leagueService.getAllLeagues();
                const groupedLeagues = groupCountriesWithLeagues(data);
                setAllLeagues(groupedLeagues);
            } catch (err) {
                console.error('Failed to load leagues', err);
            }
        }

        fetchLeagues();
    }, []);


    return (
        <Dropdown s>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                All Leagues
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {allLeagues.map((league) => (
                    <Dropdown>
                        <Dropdown.Toggle key={league.country}>
                            <CountryToggle countryName={league.country} countryFlag={league.flag} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {league.leagues.map((l) => (
                                <LeagueButton key={l.id} id={l.id} name={l.name} logoURL={l.logo} />
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AllLeagues;