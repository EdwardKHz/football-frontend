import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const LeagueButton = ({name, logoURL, id}) => {
    return (
        <Link to={`/leagues/${id}/overview`} style={{textDecoration: 'none'}}>
            <Container className="d-flex align-items-center gap-3 text-white">
                <img alt="" src={logoURL} style={{width: '30px', height: '30px', objectFit: 'contain'}}/>
                <h6>{name}</h6>
                <Button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}>star</Button>
            </Container>
        </Link>
    )
}

export default LeagueButton