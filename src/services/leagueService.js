import axios from "axios";

const getTopLeagues = async () => {
    const request = await axios.get("http://localhost:3000/api/leagues/top");
    return request.data;
}

const getAllLeagues = async () => {
    const request = await axios.get("http://localhost:3000/api/leagues/all");
    return request.data;
}

const getLeagueInfo = async (leagueId) => {
    const request = await axios.get(`http://localhost:3000/api/leagues/${leagueId}`);
    return request.data;
}

const getLeagueStandings = async (leagueId, season) => {
    const request = await axios.get(`http://localhost:3000/api/leagues/${leagueId}/standings/${season}`);
    return request.data;
}

export default {getTopLeagues, getAllLeagues, getLeagueInfo, getLeagueStandings};