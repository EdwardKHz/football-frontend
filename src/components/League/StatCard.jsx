import {Card, ListGroup} from "react-bootstrap";
import StatCardButton from "./StatCardButton.jsx";
import {Link, useParams} from "react-router-dom";

const StatCard = ({title , leaderboard ,stat, statType, season}) => {

    const {leagueID} = useParams();

    return (
        <Card style={{width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {leaderboard.slice(0,3).map((player) => (
                    <ListGroup.Item key={player.playerid} className="d-flex align-items-center">
                        <StatCardButton stat={stat} player={player} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Card.Body className= "d-flex justify-content-center">
                <Link to={`/leagues/${leagueID}/stats/season/${season}/players/${statType}`}>All</Link>
            </Card.Body>
        </Card>
    )
}

export default StatCard;