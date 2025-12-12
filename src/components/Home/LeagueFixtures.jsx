import {Accordion} from "react-bootstrap";

const LeagueFixtures = () => {
    const matches = [
        { team1: 'Chelsea', team2: 'Everton', time: '17:00' },
        { team1: 'Liverpool', team2: 'Brighton', time: '17:00' },
        { team1: 'Burnley', team2: 'Fulham', time: '19:30' },
        { team1: 'Arsenal', team2: 'Wolves', time: '22:00' },
    ];

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto' }}>
            <Accordion alwaysOpen>
                <Accordion.Item >
                    <Accordion.Header> England - Premier League </Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#202020', color: 'white' }}>
                        {matches.map((match, index) => (
                            <div key={index} style={{
                                padding: '10px 0',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <div>{match.team1} vs {match.team2}</div>
                                <div style={{ color: '#aaa' }}>{match.time}</div>
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default LeagueFixtures;