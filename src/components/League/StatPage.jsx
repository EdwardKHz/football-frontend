import {useOutletContext} from "react-router-dom";
import StatCard from "./StatCard.jsx";

const StatPage = () => {

    const {topScorers} = useOutletContext();
    const {topAssisters} = useOutletContext();
    const {mostYellowCards} = useOutletContext();
    const {mostRedCards} = useOutletContext();

    return (
        <div>
            <h1>Attack</h1>
            <div className="d-flex gap-2">
                <StatCard leaderboard={topScorers} stat="goals_scored" title="Top Scorers"/>
                <StatCard leaderboard={topAssisters} stat="assists" title="Top Assists"/>
            </div>
            <h1>Discipline</h1>
            <div className="d-flex gap-2">
                <StatCard leaderboard={mostYellowCards} stat="yellow_cards" title="Most Yellow Cards"/>
                <StatCard leaderboard={mostRedCards} stat="red_cards" title="Most Red Cards"/>
            </div>
        </div>
    )
}

export default StatPage;