import {Button, Container} from "react-bootstrap";

const CountryToggle = ({countryName, countryFlag}) => {
    return (
        <Container className="d-flex align-items-center gap-3 text-white">
            <img  alt="" src={countryFlag} style={{ width: '30px', height: '30px', objectFit: 'contain' }}/>
            <h6>{countryName}</h6>
        </Container>
    )
}

export default CountryToggle;