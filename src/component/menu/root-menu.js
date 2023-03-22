import {Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import { FaHouseUser, FaUserAlt, FaVideo} from "react-icons/fa";
import './root-menu.css';
import {BiCartAlt, BiCategory, BiSupport} from "react-icons/bi";
import NavigatorTab from "./navigator.tab";
import {useNavigate} from "react-router-dom";


export default function RootMenu(){
    const navigate = useNavigate()
    const handleClick = (event,url) =>{
        event.preventDefault()

        getChildrend()
        event.target.className = "active"
        navigate(url)
    }
    const getChildrend = () => {
        let elements = document.getElementsByClassName("sidebar")
        for (const element of elements[0].childNodes) {
            element.classList.remove("active")
        }
    }
    return(
        <>
            <div className="sidebar">
                <a  onClick={e => handleClick(e,"/home")} >
                    <i> <FaHouseUser className="mx-2 pb-1" style={{fontSize:'20px'}}/>
                    </i>Home</a>
                <a onClick={e => handleClick(e, "/home/product")} ><i>
                    <BiCartAlt className="mx-2 pb-1" style={{fontSize:'20px'}}/>
                </i>Products</a>
                <a onClick={e => handleClick(e,"/home/service")}>
                    <i><BiSupport className="mx-2 pb-1" style={{fontSize:'20px'}}/></i>
                    Services</a>
                <a href="#" onClick={e => handleClick(e)}>
                    <i><BiCategory className="mx-2 pb-1" style={{fontSize:'20px'}}/></i>
                    More</a>
            </div>
        </>
    )
}