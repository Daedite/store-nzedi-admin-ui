import {Container, Image, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../util/timtube.png"
import logo2 from "../../util/logo.png"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function TopBar(){
    const [accountId, setAccountId] = useState("")
    const [userEmail, setUserEmail] = useState("");
    const getUserApi = process.env.REACT_APP_API_BASE_URL+"user/account/";
    const [userName, setUserName] = useState("")
    const navigate = new useNavigate();
    const SESSION_KEY = process.env.REACT_APP_SESSION_KEY


    useEffect(() => {
        let session = null
        if(localStorage.getItem(SESSION_KEY)){
            session = JSON.parse(localStorage.getItem(SESSION_KEY))
            setAccountId(session.Id)
            setUserEmail(session.Email)
        }else{
            navigate('/')
            return
        }
        // console.log(getUserApi+session.Id)
        axios.get(getUserApi+session.Id).then((data)=> {
            // console.log(data.data)
            if(data.data.FirstName||data.data.LastName){
               setUserName(data.data.FirstName+" "+data.data.LastName)
            }else{
                setUserName("Administrator")
            }
        });
    },[getUserApi])


    const logOut = () => {
        localStorage.removeItem('pipoing')
        navigate("/")
    }

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
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Container>
                </Navbar>
            </Container>
        </Navbar>
    );
}