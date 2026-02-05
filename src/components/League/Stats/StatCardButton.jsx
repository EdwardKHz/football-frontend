import {Stack} from "react-bootstrap";

const StatCardButton = ({ player, stat }) => {
    return (
        <div className="d-flex align-items-center w-100">

            <Stack direction="horizontal" className="align-items-center">
                <img
                    src={player.photo}
                    alt={player.name}
                    style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                />
                <Stack direction="vertical">
                    <h5>{player.name}</h5>
                    <Stack direction="horizontal" gap={1}>
                        <img
                            src={player.logo}
                            alt={player.team_name}
                            style={{ width: '15px', height: '15px', borderRadius: '50%', marginRight: '5px' }}
                        />
                        <span>{player.team_name}</span>
                    </Stack>
                </Stack>
            </Stack>

            <h6 className="ms-auto">{player[stat]}</h6>
        </div>
    );
};


export default StatCardButton;