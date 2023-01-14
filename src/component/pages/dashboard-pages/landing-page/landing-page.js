import {Card, Col, Container, Row} from "react-bootstrap";
import Example from "../charts/line-chart";
import PieChartSegment from "../charts/pie-chart-segment";
import CardHeader from "react-bootstrap/CardHeader";
import {Text} from "recharts";
import { FaDownload }from "react-icons/fa";
import  "./landing-page.css"
const cardData = [
    {

    }
]
export default function LandingPage(){
    return (
        <Container>
            {/*<Row style={{height:"100px"}}>*/}
            {/*    <Col>*/}
            {/*        <Card>*/}
            {/*            <Row>*/}
            {/*                <Col md={8}>*/}
            {/*                    <h3>101.K</h3>*/}
            {/*                    <h6>101.K</h6>*/}
            {/*                    <h6>101.K</h6>*/}
            {/*                </Col>*/}
            {/*                <Col md={4} className=" text-center m-auto mr-1">*/}
            {/*                    <div className="purpleCardIcon ">*/}
            {/*                        <FaDownload  />*/}
            {/*                    </div>*/}

            {/*                </Col>*/}

            {/*            </Row>*/}

            {/*        </Card>*/}
            {/*    </Col>*/}
            {/*    <Col>*/}
            {/*        <Card></Card>*/}
            {/*    </Col>*/}
            {/*    <Col>*/}
            {/*        <Card></Card>*/}
            {/*    </Col>*/}
            {/*    <Col>*/}
            {/*        <Card></Card>*/}
            {/*    </Col>*/}
            {/*    <Col>*/}
            {/*        <Card></Card>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row style={{height:"300px"}}>
                <Col md={8}>
                    <Card style={{height:"100%"}}>
                        <CardHeader>
                            <Text>
                                Video per Category
                            </Text>
                        </CardHeader>
                        <Example/>
                    </Card>

                </Col>
                <Col md={4}>
                    <Card style={{height:"100%"}}>
                        <CardHeader>
                            <Text>
                                Video per Category
                            </Text>
                        </CardHeader>
                        <PieChartSegment/>
                    </Card>

                </Col>
            </Row>
            <Card className="my-2">
                <Card.Body>This is the dashboard landing page.</Card.Body>
            </Card>
        </Container>
    );
}