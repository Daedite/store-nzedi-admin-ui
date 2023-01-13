import {Container, Image, Navbar} from "react-bootstrap";
import logo from "../../util/timtube.png"
import logo2 from "../../util/logo.png"
export default function TopBar(){
    return (
        <Navbar className="p-2 bg-black text-white">
            <Container>
                <img src={logo2} width="100" alt=""/>
                <Navbar.Brand href="#home" className="text-white"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end text-white">
                    <Navbar.Text className="text-white">
                        Signed in as: <a href="#login" className="text-white">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}