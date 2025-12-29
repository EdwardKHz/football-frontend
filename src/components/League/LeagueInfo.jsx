import {Stack} from "react-bootstrap";

const LeagueInfo = ({leagueInfo}) => {
    return (
        <Stack direction="horizontal">
            <img
                src={leagueInfo && leagueInfo.logo}
                alt="logo"
                height={36}
                width={36}
            />
            <div>
                <h4>{leagueInfo && leagueInfo.name}</h4>
                <p>{leagueInfo && leagueInfo.country_name}</p>
            </div>
        </Stack>
    );
}

export default LeagueInfo;