import {Stack} from "react-bootstrap";
import {useParams} from "react-router-dom";

const PlayerStatCard = ({ rank, teamLogo, photo, playerName, player}) => {

    const {statType} = useParams();

    return (
        <Stack direction="horizontal">
            <h5>{rank}</h5>
            <img src={teamLogo} alt="team logo" width={30} height={30}/>
            <img src={photo} alt="player photo" width={30} height={30}/>
            <h5>{playerName}</h5>
            {statType === "goals" && (
                <>
                    <h5>Goals: {player.goals_scored}</h5>
                    <h5>Penalties: {player.penalties_scored}</h5>
                </>
            )}

            {statType === "assists" && (
                <>
                    <h5>Assists: {player.assists}</h5>
                    {player.key_passes != null && <h5>Key Passes: {player.key_passes}</h5>}
                </>
            )}

            {statType === "yellowcards" && (
                <>
                    <h5>Yellow Cards: {player.yellow_cards}</h5>
                    {player.red_cards != null && <h5>Red Cards: {player.red_cards}</h5>}
                </>
            )}

            {statType === "redcards" && (
                <>
                    <h5>Red Cards: {player.red_cards}</h5>
                    {player.yellow_cards != null && <h5>Yellow cards: {player.yellow_cards}</h5>}
                </>
            )}
        </Stack>
    )

}

export default PlayerStatCard;