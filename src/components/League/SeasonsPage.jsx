import SeasonCard from "./SeasonCard.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import leagueService from "../../services/leagueService.js";
import {groupStandingsBySeason} from "../../utils/ui_helper_functions.js";

const SeasonsPage = () => {

    const {leagueID} = useParams();

    const [seasonWinners, setSeasonWinners] = useState([]);

    useEffect(() => {
        async function fetchSeasons() {
            try {
                const data = await leagueService.getLeagueWinners(leagueID);
                setSeasonWinners(groupStandingsBySeason(data));
            } catch (error) {
                console.error('Failed to load seasons', error);
            }
        }

        fetchSeasons();
    });



    return (
        <div className="d-flex flex-row align-items-center">
            {seasonWinners.map((season) => (
                <SeasonCard key={season.season} standings={season}  />
            ))}
        </div>
    )
}

export default SeasonsPage;