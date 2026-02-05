import StatCard from "./StatCard.jsx";
import {useStats} from "./StatsContext.jsx";

const StatPage = () => {

    const {topScorers} = useStats();
    const {topAssisters} = useStats();
    const {mostYellowCards} = useStats();
    const {mostRedCards} = useStats();
    const {season} = useStats();

    return (
        <div>
            <h1>Attack</h1>
            <div className="d-flex gap-2">
                <StatCard leaderboard={topScorers} stat="goals_scored" title="Top Scorers" statType="goals" season={season} />
                <StatCard leaderboard={topAssisters} stat="assists" title="Top Assists" statType="assists" season={season} />
            </div>
            <h1>Discipline</h1>
            <div className="d-flex gap-2">
                <StatCard leaderboard={mostYellowCards} stat="yellow_cards" title="Most Yellow Cards" statType="yellowcards" season={season}/>
                <StatCard leaderboard={mostRedCards} stat="red_cards" title="Most Red Cards" statType="redcards" season={season}/>
            </div>
        </div>
    )
}

export default StatPage;