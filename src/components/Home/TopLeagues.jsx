import {Card} from "react-bootstrap";
import LeagueButton from "./LeagueButton.jsx";

const TopLeagues = () => {
    return (
        <Card
            text="Top Leagues"
            style={{width: '15rem', backgroundColor: '#1a1a1a', borderRadius: '10px'}}
            className="mb-2"
        >
            <Card.Body>
                <LeagueButton/>
                <LeagueButton/>
                <LeagueButton/>
            </Card.Body>
        </Card>
    )
}

export default TopLeagues;