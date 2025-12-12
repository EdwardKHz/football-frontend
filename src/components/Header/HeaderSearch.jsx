import {Button, Form} from "react-bootstrap";

const HeaderSearch = () => {
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ color: 'white', backgroundColor: '#333', border: '1px solid #555' }}
            />
            <Button variant="outline-light">Search</Button>
        </Form>
    )
}

export default HeaderSearch;