import {useTeam} from "./TeamContext.jsx";
import {Container, Stack} from "react-bootstrap";
import TeamHeader from "./TeamHeader.jsx";
import {Outlet} from "react-router-dom";
import LeagueDropDown from "./LeagueDropDown.jsx";
import LeagueStandings from "../League/LeagueStandings.jsx";

const TeamLayout = () => {
    const {teamInfo} = useTeam();
    const {currentLeagueStandings} = useTeam();

    if (!teamInfo) {
        return null;
    }

    return (
        <Container>
            <TeamHeader teamInfo={teamInfo}/>
            <Outlet />
        </Container>
    );
}


export default TeamLayout;