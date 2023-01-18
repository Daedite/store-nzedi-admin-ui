import {useParams} from "react-router-dom";
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useState} from "react";

export default function ProfilePage(){
    const [hasChanged, setChange] = useState(true);

    let email = useParams().email
    const image ="https://media.istockphoto.com/id/477151294/photo/smile-girl-at-beach.jpg?s=1024x1024&w=is&k=20&c=5SNrc56tXFIeSN0Avumm4zuqfK4kBXaDPHULuPuuUAo=";

    function toggle(){
        setChange(false);
    }

    return(
        <Container className="m-4">
            <Row>
                <Col className="m-2">
                    <Card>
                        <Image className="m-4" src={image} width="90%"></Image>
                        <Row className="m-4">
                            <Col>
                            <h3> My Profile</h3>
                            </Col>
                            <Col>
                            <p className="text-muted small">Last Login at 10 Aug 2022 10:30 AM</p>
                            <p className="text-muted small">Last Login at 10 Aug 2022 10:30 AM</p>
                            </Col>
                        </Row>

                        <Row className="m-3">
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Full Name
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control plaintext onChange={toggle} defaultValue="Bampeledy Florance" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Phone number
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control  plaintext type="text" onChange={toggle} placeholder="+027 64 572 5048"  />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Email
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control  plaintext readOnly type="text" placeholder="bampeflora@test.com"  />
                                    </Col>
                                </Form.Group>
                                <Row  className="align-content-center">
                                    <Button variant="success" disabled={hasChanged}>Success</Button>
                                </Row>
                            </Form>
                        </Row>
                    </Card>

                </Col>
                <Col className="m-2"></Col>
            </Row>
        </Container>
)
}