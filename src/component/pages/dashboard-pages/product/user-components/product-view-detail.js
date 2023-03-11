import {useNavigate, useParams} from "react-router-dom";
import {Button, ButtonToolbar, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {FaEdit} from "react-icons/fa"
import Modal from "react-bootstrap/Modal";
import React, {useEffect, useState} from "react";
import ProductPicture from "./product-picture";
import ProductSonnet from "./productSonnet";
import ProductDetailTabs from "./product-detail-tabs";
import axios from "axios";
import {RiDeleteBin6Line} from "react-icons/ri";
import {BiImageAdd} from "react-icons/bi";

export default function ProductViewDetail() {
    const [modalShow, setModalShow] = React.useState(false);
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const ESHOP_API_PRODUCT = process.env.REACT_APP_ESHOP_API_BASE_URL + "product/"
    let productId = useParams().productId
    const navigate = useNavigate();
    const [product, setProduct] = useState(example)

    // console.log(productId)
    useEffect(() => {
        console.log(productId)
        // if (productId==='') navigate("/home/product")

        axios.get(ESHOP_API_PRODUCT+productId,{
            // headers: {
            // 'Access-Control-Allow-Origin':'*',
            // }
        }).then((data) => {
            // console.log(data?.data);
            setProduct(data?.data);
        });
    },[productId])

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                                <h4> {product.Name}</h4>
                                <InputGroup>
                                    <Button className="mx-1" variant="warning" onClick={() => setDeleteModalShow(true)}>
                                        <RiDeleteBin6Line/>
                                    </Button>
                                    <PictureDeleteModal show={deleteModalShow} onHide={() => setDeleteModalShow(false)}
                                    />

                                    <Button variant="info" onClick={() => setModalShow(true)}>
                                        <BiImageAdd/>
                                    </Button>
                                    <MyVerticallyCenteredModal productId={productId} show={modalShow} onHide={() => setModalShow(false)}
                                    />
                                </InputGroup>
                            </ButtonToolbar>

                        </CardHeader>
                        <Container>
                            <br/>
                            <ProductPicture productId={product.Id}/>
                        </Container>
                    </Card>
                </Col>
                <Col className="me-3">
                    <Card>
                        <Container className="m-2">
                            <ProductDetailTabs product={product}/>
                        </Container>
                    </Card>
                    <Card className="mt-2">
                        <CardHeader>Description</CardHeader>
                        <Container className="m-2">
                            <ProductSonnet description={product.Description}/>
                        </Container>
                    </Card>
                </Col>
            </Row>
            {/*<Row>*/}
            {/*    <Container>*/}
            {/*        <Card className="m-2">*/}
            {/*            <ProductSonnet description={product.Description}/>*/}
            {/*        </Card>*/}
            {/*    </Container>*/}

            {/*</Row>*/}
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
                    Add A Picture
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
function PictureDeleteModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    About to delete a picture
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Video</Form.Label>
                        <Form.Control type="file" placeholder="Enter email"/>
                        <Form.Text className="text-muted" hidden={true}>
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
const example ={
    "BuyPrice": 0,
    "Description": " ",
    "Id": "",
    "Name": " ",
    "Quantity": 0,
    "SellPrice": 0
}