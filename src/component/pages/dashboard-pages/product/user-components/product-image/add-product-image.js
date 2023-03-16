import React, {useState} from "react";
import {toast} from "react-toastify";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import {Button, Form, InputGroup} from "react-bootstrap";
import uuid from "react-uuid";
import {useNavigate} from "react-router-dom";

export default function AddPicture(props) {

    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [fileData, setFileData] = useState(null);
    const [fileType, setFileType] = useState("");
    const [error, setError] = useState(null);
    const productId = props.productid
    const navigate = useNavigate();
    const descriptionHandler = (e) => {
        let description = e.target.value;
        if (description) {
            setDescription(description);
        }
    }

    const types = ["image/jpg", "image/png"];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        setFileType(selected.type)

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
            const reader = new FileReader();
            reader.readAsArrayBuffer(selected)
            reader.onload = () => {
                let base64 = btoa(
                    new Uint8Array(reader.result)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                setFileData(base64);
            };
        } else {
            setFile(null);
            setError("Please select an image file " + types);
        }
        // console.log(data)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(productId)
        let createMediaUrl = process.env.REACT_APP_ESHOP_API_BASE_URL + "media"
        let createProductMediaUrl = process.env.REACT_APP_ESHOP_API_BASE_URL + "product-media"

        // let media = {"id":productId, "image":fileData,"description":description}
        const media = {"id": uuid(), "image": fileData, "description": description}

        axios.post(createMediaUrl, media).then((response) => {
            if (response.data) {
                console.log(response.data)
                let productMedia = {
                    "id": uuid(),
                    "mediaId": response.data.id,
                    "mediaType": "fileType",
                    "productId": productId
                }
                //Creating product media
                toast.promise(axios.post(createProductMediaUrl, productMedia), {
                    pending: 'loading ...',
                    error: {
                        render({data}) {
                            return data.message
                        }
                    }
                }).then((productMediaResponse) => {
                    console.log(productMediaResponse.data)
                    event.target.reset()
                    window.location.reload()
                })
            }
        })
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add A Picture
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} placeholder="Enter a Title"
                                      aria-required={true}/>
                        <div className="output">
                            {error && <div className="error">{error}</div>}
                            {file && <div>{file.name}</div>}
                        </div>
                    </Form.Group>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Description</InputGroup.Text>
                        <Form.Control as="textarea" onChange={descriptionHandler} aria-label="With textarea"
                                      aria-required={true}/>
                    </InputGroup>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    );
}
