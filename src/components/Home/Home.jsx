import TopLeagues from "./TopLeagues.jsx";
import LeagueFixtures from "./LeagueFixtures.jsx";
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <TopLeagues/>
            <LeagueFixtures />
        </Container>
    )
}

export default Home;