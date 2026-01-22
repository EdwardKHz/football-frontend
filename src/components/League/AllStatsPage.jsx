import {useNavigate, useParams} from "react-router-dom";
import {Button, Stack} from "react-bootstrap";
import {useStats} from "./StatsContext.jsx";
import PlayerStatCard from "./PlayerStatCard.jsx";

const AllStatsPage = () => {

    const navigate = useNavigate();
    const {leagueID, statType} = useParams();
    const {topScorers} = useStats();
    const {topAssisters} = useStats();
    const {mostYellowCards} = useStats();
    const {mostRedCards} = useStats();
    const {season} = useStats();

    let leaderboard = [];
    switch (statType) {
        case "goals":
            leaderboard = topScorers
            break
        case "assists":
            leaderboard = topAssisters
            break
        case "yellowcards":
            leaderboard = mostYellowCards
            break
        case "redcards":
            leaderboard = mostRedCards
            break
        default:
            leaderboard = []
    }

    return (
        <Stack direction="vertical">
            <Stack direction="horizontal">
                <Button onClick={event => navigate(-1)}>Back</Button>
            </Stack>
            <Stack direction="horizontal">
                <img
                    src="https://media.api-sports.io/football/leagues/78.png"
                    alt="logo"
                    height={36}
                    width={36}
                />
                <div>
                    <h4>Bundesliga</h4>
                    <span>| Player Stats</span>
                </div>
            </Stack>
            <Stack direction="vertical">
                {leaderboard.map((player, index) => (
                    <PlayerStatCard
                        key={player.playerid}
                        rank={index + 1}
                        teamLogo={player.logo}
                        photo={player.photo}
                        playerName={player.name}
                        player={player}
                    />
                ))}
            </Stack>
        </Stack>

    );

}

export default AllStatsPage;