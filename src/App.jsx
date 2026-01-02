import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LeagueLayout from "./components/League/LeagueLayout.jsx";
import LeagueOverview from "./components/League/LeagueOverview.jsx";
import LeagueStandings from "./components/League/LeagueStandings.jsx";
import StatPage from "./components/League/StatPage.jsx";
import SeasonsPage from "./components/League/SeasonsPage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/leagues/:leagueID" element={<LeagueLayout />}>
                <Route path="overview" element={<LeagueOverview />} />
                <Route path="table" element={<LeagueStandings />} />
                <Route path="stats" element={<StatPage />} />
                <Route path="seasons" element={<SeasonsPage />} />
            </Route>
        </Routes>
    )
}

export default App;