import {Card, ListGroup} from "react-bootstrap";

const StatCard = ({leagueID ,season}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Top scorers</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default StatCard;