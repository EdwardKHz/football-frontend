import {Table} from "react-bootstrap";
import {useOutletContext} from "react-router-dom";

const LeagueStandings = () => {

    const { leagueStandings } = useOutletContext();

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th></th>
                    <th>PL</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>+/-</th>
                    <th>GD</th>
                    <th>PTS</th>
                    <th>FORM</th>
                </tr>
            </thead>
            <tbody>
            {leagueStandings.map((team) => (
                <tr key={team.team_id}>
                    <td>{team.rank}</td>
                    <td><img src={team.logo} alt={team.team_name} style={{width: '20px', height: '20px'}}/></td>
                    <td>{team.name}</td>
                    <td>{team.home_played + team.away_played}</td>
                    <td>{team.home_wins + team.away_wins}</td>
                    <td>{team.home_draws + team.away_draws}</td>
                    <td>{team.home_losses + team.away_losses}</td>
                    <td>{(team.home_goals_for + team.away_goals_for) + "-" + (team.home_goals_against + team.away_goals_against)}</td>
                    <td>{(team.home_goals_for + team.away_goals_for) - (team.home_goals_against + team.away_goals_against)}</td>
                    <td>{team.points}</td>
                    <td>{team.form}</td>


                </tr>
            ))}
            </tbody>
        </Table>
    )

}

export default LeagueStandings;