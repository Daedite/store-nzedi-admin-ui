import {Col, Row} from "react-bootstrap";
import RootMenu from "../../menu/root-menu";
import TopBar from "../../top-bar/top-bar";
import {Outlet, useNavigate} from "react-router-dom";
import userLoginStore from "../../core/store/user.account.store";
import "./dashboard.page.css"

export default function DashboardPage(){
    const navigate = useNavigate()
    const loginDetail = userLoginStore(state=> state.loginDetail);
    if (loginDetail.email ===''){
        navigate('/login')
        console.log('not login')
    }
    console.log(loginDetail)
    return(
        <>
            <Row >
                <Col>
                    <TopBar></TopBar>
                </Col>
            </Row>
            <Row >
                <Col md={3}>
                    <RootMenu></RootMenu>
                </Col>

                <Col  className="content " style={{backgroundColor: "#e9e9e9",height:"100vh"}}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </>
    )
}