import {Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import { FaHouseUser, FaUserAlt, FaVideo } from "react-icons/fa";
import './root-menu.css';

export default function RootMenu(){

    return(
        < >
            <Container >
            <Navbar className="mt-2 rootBTN" bg="light">
                <Container>
                    <Row>
                        <Col md="3">
                            <FaHouseUser style={{fontSize:'30px'}}/>
                        </Col>
                        <Col className="my-1" md="9">
                            <Navbar.Brand className="mx-3" href="/home">Home</Navbar.Brand>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="light" className="rootBTN">
                <Container>
                    <Row>
                        <Col md="3">
                            <FaUserAlt style={{fontSize:'30px'}}/>
                        </Col>
                        <Col className="my-1" md="9">
                            <Navbar.Brand className="mx-3" href="/home/user">User</Navbar.Brand>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="white" className="rootBTN">
                <Container>
                    <Row>
                        <Col md="3">
                            <FaVideo style={{fontSize:'30px'}}/>
                        </Col>
                        <Col className="my-1" md="9">
                            <Navbar.Brand className="mx-3" href="/home/video">Video</Navbar.Brand>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="white" >
                <Container>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
            </Container>
        </>
    )
}