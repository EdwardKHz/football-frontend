import {Outlet, useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import LeagueHeader from "./Header/LeagueHeader.jsx";

const LeagueLayout = () => {

    const {leagueID} = useParams();

    return (
        <Container>
            <LeagueHeader leagueID={leagueID}/>
            <Outlet/>
        </Container>
    )
}

export default LeagueLayout;