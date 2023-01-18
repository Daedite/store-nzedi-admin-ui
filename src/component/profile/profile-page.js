import {useNavigate, useParams} from "react-router-dom";
import {Button, ButtonToolbar, Card, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import React, {useState} from "react";
import CardHeader from "react-bootstrap/CardHeader";
import {FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import {AiOutlineFolderView} from "react-icons/ai";

export default function ProfilePage() {
    const navigate = useNavigate();
    const [hasChanged, setChange] = useState(true);

    let email = useParams().email
    const image = "https://media.istockphoto.com/id/477151294/photo/smile-girl-at-beach.jpg?s=1024x1024&w=is&k=20&c=5SNrc56tXFIeSN0Avumm4zuqfK4kBXaDPHULuPuuUAo=";

    function toggle() {
        setChange(false);
    }

    function editAccount() {
        navigate('/home/edit-account')
    }
    function viewContents() {
        navigate('/home/view-my-video')
    }

    return (
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
                                        <Form.Control plaintext onChange={toggle} defaultValue="Bampeledy Florance"/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Phone number
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control plaintext type="text" onChange={toggle}
                                                      placeholder="+027 64 572 5048"/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Email
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control plaintext readOnly type="text" placeholder="bampeflora@test.com"/>
                                    </Col>
                                </Form.Group>
                                <Row className="align-content-center">
                                    <Button variant="success" disabled={hasChanged}>Success</Button>
                                </Row>
                            </Form>
                        </Row>
                    </Card>

                </Col>
                <Col className="me-4 mt-2">
                    <Card>
                        <CardHeader>
                            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                                <h4>My accounts </h4>
                                <InputGroup>
                                    <Button variant="secondary" title="add new video" onClick={(e) => editAccount()}
                                            disabled="true">
                                        Edit
                                    </Button>
                                </InputGroup>
                            </ButtonToolbar>
                        </CardHeader>

                        <Container>
                        <Row className="mt-4 mb-4">
                            <Col>
                                <h6 className="text-secondary">Active account</h6>
                                <h6 className="text-muted">10 Jun 2020 10:34 pm</h6>
                            </Col>
                            <Col className="text-end">
                                <Button  variant="danger">Block Account</Button>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col>
                                <h6>Blocked account</h6>
                                <h6 className="text-muted">10 Jun 2020 10:34 pm</h6>
                            </Col>
                            <Col className="text-end">
                                <Button variant="success" disabled="true">Block Account</Button>
                            </Col>
                        </Row>
                        </Container>
                    </Card>

                    <Card className="my-4">
                        <CardHeader>
                            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                                <h4>My Reputations </h4>
                                <InputGroup>
                                    <Button variant="success" title="add new video" onClick={(e) => editAccount()}
                                            disabled="true">
                                        <FiThumbsUp size="20px"/>
                                    </Button>
                                </InputGroup>
                            </ButtonToolbar>
                        </CardHeader>

                        <Container>
                            <Row className="mt-4 mb-3">
                                <Col>
                                    <h6 className="text-danger">Active account</h6>
                                    <h6 className="text-muted">10 Jun 2020 10:34 pm</h6>
                                </Col>
                                <Col className="text-end">
                                    <h4 className="text-danger">10  <sub><FiThumbsDown /></sub></h4>
                                </Col>
                            </Row>

                            <Row className="mb-5">
                                <Col>
                                    <h6 className="text-success"> Account Likes</h6>
                                    <h6 className="text-muted">10 Jun 2020 10:34 pm</h6>
                                </Col>
                                <Col className="text-end">

                                    <h4 className="text-success">100  <sub><FiThumbsUp /></sub></h4>

                                </Col>
                            </Row>
                        </Container>
                    </Card>

                    <Card className="my-4">
                        <CardHeader>
                            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                                <h4>My Contents </h4>
                                <InputGroup>
                                    <Button variant="success" title="add new video" onClick={(e) => viewContents()}
                                            disabled="false">
                                        <AiOutlineFolderView size="20px"/>
                                    </Button>
                                </InputGroup>
                            </ButtonToolbar>
                        </CardHeader>

                        <Container>
                            <Row className="my-5">
                                <Col>
                                    <h6 > Number of contents</h6>
                                </Col>
                                <Col className="text-end">

                                    <h4 >100</h4>

                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}