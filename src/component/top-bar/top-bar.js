import {Container, Image, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../util/timtube.png"
import logo2 from "../../util/logo.png"
import {useEffect, useState} from "react";
import axios from "axios";
export default function TopBar(){
    const session = JSON.parse(localStorage.getItem('pipoing'));
    const [userEmail, setUserEmail] = useState("");
    const getUserApi = process.env.REACT_APP_API_BASE_URL+"user/user/get/";
    const [userName, setUserName] = useState("")

    useEffect(() => {
        axios.get(getUserApi+session.email).then((data)=> {
            if(data.data.name||data.data.surname){
               setUserName(data.data.name+" "+data.data.surname)
            }
        });
    })

    useEffect(()=>{
        if(session.email){
            setUserEmail(session.email)
        }
    })

    return (
        <Navbar className="p-2 bg-black text-white">
            <Container>
                <img src={logo2} width="100" alt=""/>
                <Navbar.Brand href="#home" className="text-white"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar >
                    <Container>
                        <NavDropdown title={"Signed in as: "+userName} id="basic-nav-dropdown">
                            <NavDropdown.Item href={"/home/profile/" + userEmail}>Profile</NavDropdown.Item>
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