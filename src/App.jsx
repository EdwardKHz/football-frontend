import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LeagueLayout from "./components/League/LeagueLayout.jsx";
import LeagueOverview from "./components/League/LeagueOverview.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/leagues/:leagueID" element={<LeagueLayout />}>
                <Route path="overview" element={<LeagueOverview />} />
            </Route>
        </Routes>
    )
}

export default App;