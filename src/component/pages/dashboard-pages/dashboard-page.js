import {Col, Row} from "react-bootstrap";
import RootMenu from "../../menu/root-menu";
import TopBar from "../../top-bar/top-bar";
import {Outlet} from "react-router-dom";

export default function DashboardPage(){
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