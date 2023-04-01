import {Card, Col, Container, Row} from "react-bootstrap";
import Example from "../charts/line-chart";
import PieChartSegment from "../charts/pie-chart-segment";
import CardHeader from "react-bootstrap/CardHeader";
import {FaDownload, FaStoreAlt} from "react-icons/fa";
import "./landing-page.css"
import {GiBrokenPottery, GiSellCard} from "react-icons/gi";
import {GrReturn} from "react-icons/gr";

const cardData = [
    {}
]
export default function LandingPage() {
    return (
        <Container>
            <Row className=" m-4" style={{height: "30%"}}>
                <NoticeCard title={"sold out product"} amount={"10"} percentage={"2"} icon={<GiSellCard/>}></NoticeCard>
                <NoticeCard title={"product in stock"} amount={"20"} percentage={"5"} icon={<FaStoreAlt/>}></NoticeCard>
                <NoticeCard title={"returned product"} amount={"5"} percentage={"1"} icon={<GrReturn/>}></NoticeCard>
                <NoticeCard title={"spoiled product"} amount={"0"} percentage={"0"} icon={<GiBrokenPottery></GiBrokenPottery>}></NoticeCard>
            </Row>
            <Row className="mx-4" style={{height: "300px"}}>
                <Col md={8} style={{height: "100%"}}>
                    <Card style={{height: "100%"}}>
                        <CardHeader>
                            <h4>
                                Product per Category
                            </h4>
                        </CardHeader>
                        <Example/>
                    </Card>

                </Col>
                <Col md={4} style={{height: "100%"}}>
                    <Card style={{height: "100%"}}>
                        <CardHeader>
                            <h4>
                                Products
                            </h4>
                        </CardHeader>
                        <PieChartSegment/>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

function NoticeCard(props) {
    return(
        <Col>
            <Card>
                <Row className="m-1">
                    <Col md={8}>
                        <h4>{props.amount}</h4>
                        <h6>{props.title}</h6>
                        <a>{props.percentage} %</a>
                    </Col>
                    <Col md={4} className=" text-center m-auto mr-1">
                        <div className="purpleCardIcon">
                            {props.icon}
                        </div>

                    </Col>

                </Row>

            </Card>
        </Col>
    )
}