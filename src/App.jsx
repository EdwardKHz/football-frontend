import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home.jsx";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Home />
        </div>
    )
}

export default App;