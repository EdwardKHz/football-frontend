import {Outlet, useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import LeagueHeader from "./Header/LeagueHeader.jsx";
import {useEffect, useState} from "react";
import leagueService from "../../services/leagueService.js";

const LeagueLayout = () => {

    const {leagueID, season} = useParams();

    const [leagueStandings, setLeagueStandings] = useState([]);
    const [seasons, setSeasons] = useState([]);



    useEffect(() => {
        async function fetchSeasons() {
            try {
                const data = await leagueService.getLeagueSeasons(leagueID);
                setSeasons(data);
            } catch (err) {
                console.error('Failed to load seasons', err);
            }
        }

        fetchSeasons();
    }, [leagueID]);


    const effectiveSeason = season ?? (seasons.length ? Math.max(...seasons.map(Number)) : undefined);



    useEffect(() => {
        if (!effectiveSeason) return;

        async function fetchLeagueStandings() {
            try {
                const data = await leagueService.getLeagueStandings(leagueID, effectiveSeason);
                setLeagueStandings(data);
            } catch (err) {
                console.error('Failed to load leagues', err);
            }
        }

        fetchLeagueStandings();

    }, [leagueID, effectiveSeason]);


    return (
        <Container>
            <LeagueHeader leagueID={leagueID} seasons={seasons} />
            <Outlet context={{
                leagueStandings,
                seasons
            }} />
        </Container>
    )
}

export default LeagueLayout;