import {Button, Stack} from "react-bootstrap";

const TeamHeader = ({teamInfo}) => {

    return (
        <Stack direction="horizontal">
            <Stack direction="horizontal">
                <img src={teamInfo.logo} height={36} width={36} alt="Team Logo" />
                <Stack direction="vertical">
                    <h2>{teamInfo.name}</h2>
                    <p>{teamInfo.country}</p>
                </Stack>
            </Stack>
            <Button>Follow</Button>
        </Stack>
    )

}

export default TeamHeader;