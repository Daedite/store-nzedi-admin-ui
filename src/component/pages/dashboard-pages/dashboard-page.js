import {Col, Row} from "react-bootstrap";
import RootMenu from "../../menu/root-menu";
import TopBar from "../../top-bar/top-bar";
import {Outlet, useNavigate} from "react-router-dom";
import userLoginStore from "../../core/store/user.account.store";

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
            <Row style={{height:"100%"}}>
                <Col md="3" style={{backgroundColor: "#fff", height: "100%"}}>
                    <RootMenu></RootMenu>
                </Col>
                <Col md="9" className="p-2" style={{backgroundColor: "#e9e9e9"}}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </>
    )
}