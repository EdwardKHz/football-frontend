import {Container} from "react-bootstrap";
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";

const HomeLayout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    )
}

export default HomeLayout;