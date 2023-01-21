import {useParams} from "react-router-dom";
import {Button, ButtonToolbar, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import VideoPlayer from "./video-player/video-player";
import CardHeader from "react-bootstrap/CardHeader";
import {FaEdit} from "react-icons/fa"
import Modal from "react-bootstrap/Modal";
import React from "react";
import VideoDetailTabs from "./video-component/video-detail-tabs";
import Sonnet from "./video-component/Sonnet";

export default function ViewVideoDetail() {
    const [modalShow, setModalShow] = React.useState(false);
    let videoId = useParams().videoId
    console.log(videoId)

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                                <h4> video title</h4>
                                <InputGroup>
                                    <Button variant="info" onClick={() => setModalShow(true)}>
                                        <FaEdit/>
                                    </Button>
                                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}
                                    />
                                </InputGroup>
                            </ButtonToolbar>

                        </CardHeader>
                        <Container>
                            <br/>
                            <VideoPlayer/>
                        </Container>
                    </Card>
                </Col>
                <Col className="me-3">
                    <Card>
                        <Container className="m-2">
                            <VideoDetailTabs/>
                        </Container>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Container>
                    <Card className="m-2">
                        <Sonnet/>
                    </Card>
                </Container>

            </Row>
        </>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Video
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Video</Form.Label>
                        <Form.Control type="file" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            You are replacing the current video with the one you are about to upload.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    );
}