import {Outlet, useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import LeagueHeader from "./Header/LeagueHeader.jsx";
import {useEffect, useState} from "react";
import leagueService from "../../services/leagueService.js";

const LeagueLayout = () => {

    const {leagueID} = useParams();

    const [leagueStandings, setLeagueStandings] = useState([]);
    const [topScorers, setTopScorers] = useState([]);
    const [topAssisters, setTopAssisters] = useState([]);
    const [mostYellowCards, setMostYellowCards] = useState([]);
    const [mostRedCards, setMostRedCards] = useState([]);

    async function fetchMostRedCards() {
        try {
            const data = await leagueService.getLeagueMostRedCards(leagueID, 2023);
            setMostRedCards(data);
        } catch (err) {
            console.error('Failed to load most red cards', err);
        }
    }

    useEffect(() => {
        async function fetchLeagueStandings() {
            try {
                const data = await leagueService.getLeagueStandings(leagueID, 2023);
                setLeagueStandings(data);
            } catch (err) {
                console.error('Failed to load leagues', err);
            }
        }

        async function fetchLeagueTopScorers() {
            try {
                const data = await leagueService.getLeagueTopScorers(leagueID, 2023);
                setTopScorers(data);
            } catch (err) {
                console.error('Failed to load top scorers', err);
            }
        }

        async function fetchTopAssisters() {
            try {
                const data = await leagueService.getLeagueTopAssisters(leagueID, 2023);
                setTopAssisters(data);
            } catch (err) {
                console.error('Failed to load top assisters', err);
            }
        }

        async function fetchMostYellowCards() {
            try {
                const data = await leagueService.getLeagueMostYellowCards(leagueID, 2023);
                setMostYellowCards(data);
            } catch (err) {
                console.error('Failed to load most yellow cards', err);
            }
        }




        fetchLeagueStandings();
        fetchLeagueTopScorers();
        fetchTopAssisters();
        fetchMostYellowCards();
        fetchMostRedCards();

    }, [leagueID]);


    return (
        <Container>
            <LeagueHeader leagueID={leagueID}/>
            <Outlet context={{
                leagueStandings,
                topScorers,
                topAssisters,
                mostYellowCards,
                mostRedCards,
            }} />
        </Container>
    )
}

export default LeagueLayout;