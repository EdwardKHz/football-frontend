import LeagueStandings from "./LeagueStandings.jsx";
import {useParams} from "react-router-dom";
import StatCard from "./StatCard.jsx";

const LeagueOverview = () => {

    const {leagueID} = useParams();

    return (
        <>
            <LeagueStandings leagueID={leagueID} />
            <StatCard leagueID={leagueID} season={2023}/>
        </>
    )

}

export default LeagueOverview;