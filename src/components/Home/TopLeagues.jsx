import {Card} from "react-bootstrap";
import LeagueButton from "./LeagueButton.jsx";
import leagueService from "../../services/leagueService.js";
import {useEffect, useState} from "react";

const TopLeagues = () => {

    const [topLeagues, setTopLeagues] = useState([]);

    useEffect(() => {
        async function fetchLeagues() {
            try {
                const data = await leagueService.getTopLeagues();
                setTopLeagues(data);
            } catch (err) {
                console.error('Failed to load leagues', err);
            }
        }

        fetchLeagues();
    }, []);

    return (
        <Card
            text="Top Leagues"
            style={{width: '15rem', backgroundColor: '#1a1a1a', borderRadius: '10px'}}
            className="mb-2"
        >
            <Card.Body>
                {topLeagues.map((league) => (
                    <LeagueButton key={league.id} id={league.id} name={league.name} logoURL={league.logo} />
                ))}
            </Card.Body>
        </Card>
    )
}

export default TopLeagues;