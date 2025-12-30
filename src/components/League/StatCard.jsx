import {Card, ListGroup, Row, Stack} from "react-bootstrap";
import StatCardButton from "./StatCardButton.jsx";

const StatCard = ({title , leaderboard ,stat}) => {


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
                <Card.Link href="#">All</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default StatCard;