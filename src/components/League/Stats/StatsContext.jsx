import {createContext, useContext, useEffect, useMemo, useState} from "react"
import { useParams } from "react-router-dom"
import leagueService from "../../../services/leagueService.js";

const StatsContext = createContext(null)

export const StatsProvider = ({ children }) => {
    const { leagueID, season} = useParams();
    const [topScorers, setTopScorers] = useState([]);
    const [topAssisters, setTopAssisters] = useState([]);
    const [mostYellowCards, setMostYellowCards] = useState([]);
    const [mostRedCards, setMostRedCards] = useState([]);
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

        async function fetchLeagueTopScorers() {
            try {
                const data = await leagueService.getLeagueTopScorers(leagueID, effectiveSeason);
                setTopScorers(data);
            } catch (err) {
                console.error('Failed to load top scorers', err);
            }
        }

        async function fetchTopAssisters() {
            try {
                const data = await leagueService.getLeagueTopAssisters(leagueID, effectiveSeason);
                setTopAssisters(data);
            } catch (err) {
                console.error('Failed to load top assisters', err);
            }
        }

        async function fetchMostYellowCards() {
            try {
                const data = await leagueService.getLeagueMostYellowCards(leagueID, effectiveSeason);
                setMostYellowCards(data);
            } catch (err) {
                console.error('Failed to load most yellow cards', err);
            }
        }

        async function fetchMostRedCards() {
            try {
                const data = await leagueService.getLeagueMostRedCards(leagueID, effectiveSeason);
                setMostRedCards(data);
            } catch (err) {
                console.error('Failed to load most red cards', err);
            }
        }

        fetchLeagueTopScorers();
        fetchTopAssisters();
        fetchMostYellowCards();
        fetchMostRedCards();

    }, [leagueID, effectiveSeason]);

    const value = useMemo(() => {
        return {
            leagueID,
            season: effectiveSeason,

            seasons,

            topScorers,
            topAssisters,
            mostYellowCards,
            mostRedCards,
        }
    }, [
        leagueID,
        effectiveSeason,
        seasons,
        topScorers,
        topAssisters,
        mostYellowCards,
        mostRedCards
    ])


    return (
        <StatsContext.Provider value={value}>
            {children}
        </StatsContext.Provider>
    );
}

export const useStats = () => {
    const ctx = useContext(StatsContext);
    if (!ctx) {
        throw new Error("useStats must be used inside StatsProvider");
    }
    return ctx;
}
