import {Stack} from "react-bootstrap";

const SeasonCard = ({standings}) => {
    return (
        <Stack direction="vertical" spacing={2}>
            <h4>{standings.season + "/" + (standings.season + 1)}</h4>
            <Stack direction="horizontal" spacing={2}>
                <img src={standings.first.logo} alt={standings.first.name} />
                <Stack direction="vertical">
                    <h4>{standings.first.name}</h4>
                    <p>Winner</p>
                </Stack>
            </Stack>
            <Stack direction="horizontal" spacing={2}>
                <img src={standings.second.logo} alt={standings.second.name} />
                <Stack direction="vertical">
                    <h4>{standings.second.name}</h4>
                    <p>Runner-up</p>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default SeasonCard;