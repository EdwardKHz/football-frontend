import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LeagueLayout from "./components/League/LeagueLayout.jsx";
import LeagueOverview from "./components/League/LeagueOverview.jsx";
import LeagueStandings from "./components/League/LeagueStandings.jsx";
import StatPage from "./components/League/Stats/StatPage.jsx";
import SeasonsPage from "./components/League/Seasons/SeasonsPage.jsx";
import AllStatsPage from "./components/League/Stats/AllStatsPage.jsx";
import HomeLayout from "./components/Home/HomeLayout.jsx";
import {StatsProvider} from "./components/League//Stats/StatsContext.jsx";
import TeamLayout from "./components/Team/TeamLayout.jsx";
import {TeamProvider} from "./components/Team/TeamContext.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/leagues/:leagueID" element={<StatsProvider> <LeagueLayout /> </StatsProvider>}>

                <Route path="overview" element={<LeagueOverview />} />
                <Route path="overview/season/:season" element={<LeagueOverview />} />

                <Route path="table" element={<LeagueStandings />} />
                <Route path="table/season/:season" element={<LeagueStandings />} />

                <Route path="stats" element={<StatPage />} />
                <Route path="stats/season/:season" element={<StatPage />} />

                <Route path="seasons" element={<SeasonsPage />} />
                <Route path="seasons/season/:season" element={<SeasonsPage />} />

            </Route>
            <Route path="/leagues/:leagueID/stats/season/:season/players" element={<HomeLayout />}>
                <Route path=":statType" element={<StatsProvider> <AllStatsPage /> </StatsProvider>} />
            </Route>

            <Route path="/teams/:teamID" element={<TeamProvider> <TeamLayout /> </TeamProvider>}>

            </Route>
        </Routes>
    )
}

export default App;