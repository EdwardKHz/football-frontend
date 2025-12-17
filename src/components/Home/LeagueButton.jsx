import {Button, Container} from "react-bootstrap";

const LeagueButton = ({name, logoURL}) => {
    return (
        <Container className="d-flex align-items-center gap-3 text-white">
            <img  alt="" src={logoURL} style={{ width: '30px', height: '30px', objectFit: 'contain' }}/>
            <h6>{name}</h6>
            <Button>star</Button>
        </Container>
    )
}

export default LeagueButton