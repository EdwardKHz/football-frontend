import TopLeagues from "./TopLeagues.jsx";
import LeagueFixtures from "./LeagueFixtures.jsx";
import {Container} from "react-bootstrap";
import AllLeagues from "./AllLeagues.jsx";

const Main = () => {
    return (
        <Container>
            <TopLeagues/>
            <LeagueFixtures />
            <AllLeagues />
        </Container>
    )
}

export default Main;