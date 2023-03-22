import {Card, Col, Container, Row} from "react-bootstrap";
import Example from "../charts/line-chart";
import PieChartSegment from "../charts/pie-chart-segment";
import CardHeader from "react-bootstrap/CardHeader";
import {FaDownload} from "react-icons/fa";
import "./landing-page.css"

const cardData = [
    {}
]
export default function LandingPage() {
    return (
        <Container>
            <Row className=" m-4" style={{height: "30%"}}>
                <Col>

                    <Card>
                        <Row className="m-1">
                            <Col md={8}>
                                <h4>101.K</h4>
                                <h6>Downloads</h6>
                                <a>101.K</a>
                            </Col>
                            <Col md={4} className=" text-center m-auto mr-1">
                                <div className="purpleCardIcon ">
                                    <FaDownload/>
                                </div>

                            </Col>

                        </Row>

                    </Card>
                </Col>
                <Col>

                    <Card>
                        <Row className="m-1">
                            <Col md={8}>
                                <h4>101.K</h4>
                                <h6>Downloads</h6>
                                <a>101.K</a>
                            </Col>
                            <Col md={4} className=" text-center m-auto mr-1">
                                <div className="purpleCardIcon ">
                                    <FaDownload/>
                                </div>

                            </Col>

                        </Row>

                    </Card>
                </Col>
                <Col>

                    <Card>
                        <Row className="m-1">
                            <Col md={8}>
                                <h4>101.K</h4>
                                <h6>Downloads</h6>
                                <a>101.K</a>
                            </Col>
                            <Col md={4} className=" text-center m-auto mr-1">
                                <div className="purpleCardIcon ">
                                    <FaDownload/>
                                </div>

                            </Col>

                        </Row>

                    </Card>
                </Col>
                <Col>

                    <Card>
                        <Row className="m-1">
                            <Col md={8}>
                                <h4>101.K</h4>
                                <h6>Downloads</h6>
                                <a>101.K</a>
                            </Col>
                            <Col md={4} className=" text-center m-auto mr-1">
                                <div className="purpleCardIcon ">
                                    <FaDownload/>
                                </div>

                            </Col>

                        </Row>

                    </Card>
                </Col>
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