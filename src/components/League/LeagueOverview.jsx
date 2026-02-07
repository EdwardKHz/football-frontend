import LeagueStandings from "./LeagueStandings.jsx";
import {useOutletContext, useParams} from "react-router-dom";
import StatCard from "./Stats/StatCard.jsx";
import {Stack} from "react-bootstrap";
import {useStats} from "./Stats/StatsContext.jsx";

const LeagueOverview = () => {

    const {topScorers} = useStats();
    const {topAssisters} = useStats();
    const {mostYellowCards} = useStats();
    const {mostRedCards} = useStats();
    const {leagueStandings} = useOutletContext();

    return (
        <>
            <LeagueStandings leagueStandings={leagueStandings}/>
            <Stack direction="horizontal" gap={3} className="mt-4">
                <StatCard leaderboard={topScorers} stat="goals_scored" title="Top Scorers"/>
                <StatCard leaderboard={topAssisters} stat="assists" title="Top Assists"/>
                <StatCard leaderboard={mostYellowCards} stat="yellow_cards" title="Most Yellow Cards"/>
                <StatCard leaderboard={mostRedCards} stat="red_cards" title="Most Red Cards"/>
            </Stack>
        </>
    )

}

export default LeagueOverview;