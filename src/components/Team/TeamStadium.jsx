import {useTeam} from "./TeamContext.jsx";
import {Container, Stack} from "react-bootstrap";

const TeamStadium = () => {
    const {teamVenue} = useTeam();

    return (
        <Container>
            <h3>Stadium</h3>
            <Stack direction="vertical">
                <h6>{teamVenue.name}</h6>
                <p>{teamVenue.city}</p>
            </Stack>
            <img src={teamVenue && teamVenue.image} alt="Stadium Image" height={200} />
            <h5>Capacity: {teamVenue.capacity}</h5>
        </Container>
    )
}

export default TeamStadium;