import  {Container} from "react-bootstrap";
import HeaderSearch from "./HeaderSearch.jsx";
import HeaderNavbar from "./HeaderNavbar.jsx";

const Header = () => {
    return (
        <Container className='d-flex flex-row align-items-center'>
            <HeaderNavbar/>
            <HeaderSearch/>
        </Container>
    );
}


export default Header;