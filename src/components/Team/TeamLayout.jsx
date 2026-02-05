import {useTeam} from "./TeamContext.jsx";
import {Container, Stack} from "react-bootstrap";
import TeamHeader from "./TeamHeader.jsx";
import {Outlet} from "react-router-dom";

const TeamLayout = () => {
    const {teamInfo} = useTeam();

    console.log(teamInfo);

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