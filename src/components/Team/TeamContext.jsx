import {createContext, useContext, useEffect, useMemo, useState} from "react";
import teamService from "../../services/teamService.js";
import {useParams} from "react-router-dom";
import leagueService from "../../services/leagueService.js";

const TeamContext = createContext(null);

export const TeamProvider = ({children}) => {
    const {teamID} = useParams();

    const [teamInfo, setTeamInfo] = useState(null);
    const [teamVenue, setTeamVenue] = useState(null);
    const [teamLeagues, setTeamLeagues] = useState(null);
    const [currentLeague, setCurrentLeague] = useState(null);
    const [currentLeagueStandings, setCurrentLeagueStandings] = useState(null);

    useEffect(() => {
        async function fetchTeamInfo() {
            try {
                const data = await teamService.getTeamInfo(teamID);
                setTeamInfo(data);
            } catch (error) {
                console.error('Failed to load team info', error);
            }
        }

        async function fetchTeamVenue() {
            try {
                const data = await teamService.getTeamVenue(teamID);
                setTeamVenue(data);
            } catch (error) {
                console.error('Failed to load team venue', error);
            }
        }

        async function fetchTeamLeagues() {
            try {
                const data = await teamService.getTeamLeagues(teamID, "2023");
                setTeamLeagues(data);
            } catch (error) {
                console.error('Failed to load team leagues', error);
            }
        }


        fetchTeamInfo();
        fetchTeamVenue();
        fetchTeamLeagues();
    }, [teamID]);

    useEffect(() => {
        if (!currentLeague) return;

        async function fetchCurrentLeagueStandings() {
            try {
                const data = await leagueService.getLeagueStandings(currentLeague, 2023);
                setCurrentLeagueStandings(data);
            } catch (error) {
                console.error('Failed to load current league standings', error);
            }
        }

        fetchCurrentLeagueStandings();
    }, [currentLeague]);

    const value = useMemo(() => {
        return {
            teamInfo,
            teamVenue,
            teamLeagues,
            currentLeague,
            currentLeagueStandings,
            setCurrentLeague
        }
    }, [
        teamInfo,
        teamVenue,
        teamLeagues,
        currentLeague,
        currentLeagueStandings
    ]);

    return (
        <TeamContext.Provider value={value}>
            {children}
        </TeamContext.Provider>
    );

}

export const useTeam = () => {
    const ctx = useContext(TeamContext);
    if (!ctx) {
        throw new Error("useTeam must be used inside TeamProvider");
    }
    return ctx;
}