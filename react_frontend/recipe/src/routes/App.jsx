import {
    Container,
    Row,
    Col,
} from "react-bootstrap";
import Logo from "./logo.jsx";
import ButtonsNavigate from "./buttons_navigate.jsx";
import Body_home from "./body_home.jsx";


function App() {
  return (
    <>
        <Container
            fluid
            className="text-bg-secondary fs-1">
            <Row xs="5" sm="4">
                <Col className="p-4">
                    <Logo />
                </Col>
                <Col xs={2} sm={1} md></Col>
                <Col md="auto">
                    <ButtonsNavigate />
                </Col>
            </Row>
        </Container>
        <Body_home />
    </>
  )
}

export default App
