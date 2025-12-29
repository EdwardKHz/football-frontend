import {useEffect, useState} from "react";
import leagueService from "../../../services/leagueService.js";
import {Button, Container, Stack} from "react-bootstrap";
import HeaderNavbar from "./HeaderNavbar.jsx";
import SeasonDropDown from "./SeasonDropDown.jsx";
import LeagueInfo from "../LeagueInfo.jsx";

const LeagueHeader = ({leagueID}) => {

    const [leagueInfo, setLeagueInfo] = useState(null);

    useEffect(() => {
        async function fetchLeagueInfo() {
            try {
                const data = await leagueService.getLeagueInfo(leagueID);
                setLeagueInfo(data);
            } catch (err) {
                console.error('Failed to load leagues', err);
            }
        }

        fetchLeagueInfo();
    }, []);

    if (!leagueInfo) {
        return <div>Loading...</div>
    }

    return (
        <Container>
            <Stack direction="vertical">
                <Stack direction="horizontal">

                    <LeagueInfo leagueInfo={leagueInfo}/>

                    <SeasonDropDown/>
                    <Button variant="primary">Follow</Button>
                </Stack>

                <HeaderNavbar/>
            </Stack>
        </Container>
    )
}

export default LeagueHeader;