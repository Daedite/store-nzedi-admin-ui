import {Container, Image, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../util/timtube.png"
import logo2 from "../../util/logo.png"
export default function TopBar(){
    return (
        <Navbar className="p-2 bg-black text-white">
            <Container>
                <img src={logo2} width="100" alt=""/>
                <Navbar.Brand href="#home" className="text-white"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar >
                    <Container>
                        <NavDropdown title="Signed in as: Mark Otto" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/home/profile/47454">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Container>
                </Navbar>
            </Container>
        </Navbar>
    );
}