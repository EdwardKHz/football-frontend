import axios from "axios";

const getTeamInfo = async (teamId) => {
    const request = await axios.get(`http://localhost:3000/api/teams/${teamId}`);
    return request.data;
}

const getTeamVenue = async (teamId) => {
    const request = await axios.get(`http://localhost:3000/api/teams/${teamId}/venue`);
    return request.data;
}

const getTeamLeagues = async (teamId, season) => {
    const request = await axios.get(`http://localhost:3000/api/teams/${teamId}/season/${season}`);
    return request.data;
}


export default {getTeamInfo, getTeamLeagues, getTeamVenue};