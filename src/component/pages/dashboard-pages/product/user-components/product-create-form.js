import {Button, Card, Form, InputGroup} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import uuid from "react-uuid";


export default function ProductCreateForm() {
    const [hasPrice, setHasPrice] = useState(false);
    const [videoCreationResponse, setVideoCreationResponse] = useState(null);
    const [file, setFile] = useState(null);
    const [fileData, setFileData] = useState(null);
    const [fileType, setFileType] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [buyPrice, setBuyPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(null);
    const timAdminApiBaseURL = process.env.REACT_APP_ESHOP_API_BASE_URL
    let data = null;

    const types = ["service/mp4","image/png"];

    function toggle(){
        setHasPrice(!hasPrice);
    }

    function readFileDataAsBase64(e) {
        const file = e.target.files[0];

        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            };

            reader.onerror = (err) => {
                reject(err);
            };

            reader.readAsDataURL(file);
        });
    }

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
            setError("Please select an image file (mp4)");
        }
        // console.log(data)
    };

    const titleHandler = (e) => {
        let title = e.target.value;
        if(title){
            setTitle(title);
        }
    }

    const dateHandler = (e) => {
        let date = e.target.value;
        if(date){
            setDate(date);
        }
    }
    const descriptionHandler = (e) => {
        let description = e.target.value;
        if(description){
            setDescription(description);
        }
    }
    const priceHandler = (e) => {
        let price = e.target.value;
        if(price){
            setPrice(price);
        }
    }
    const buyPriceHandler = (e) => {
        let buyPrice = e.target.value;
        if(price){
            setBuyPrice(buyPrice);
        }
    }

    const setQuantityHandler = (e) => {
        let quantity = e.target.value;
        if(price){
            setQuantity(quantity);
        }
    }

    let BASE64_MARKER = ';base64,';

    function convertDataURIToBinary(dataURI) {
        let base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        let base64 = dataURI.substring(base64Index);
        let raw = window.atob(base64);
        let rawLength = raw.length;
        let array = new Uint8Array(new ArrayBuffer(rawLength));

        for(let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        let privateVideo = false
        let createProductUrl = process.env.REACT_APP_ESHOP_API_BASE_URL+"product"
        let createProductMediaUrl = process.env.REACT_APP_ESHOP_API_BASE_URL+"product-media"
        let createMediaUrl = process.env.REACT_APP_ESHOP_API_BASE_URL+"media"
        if(price>0) privateVideo = true;
        let video = {
            "id": uuid(),
            "name":title,
            "buyPrice":Number(price),
            "sellPrice":Number(buyPrice),
            "quantity": Number(quantity),
            "description":description,
            }

         console.log(readFileDataAsBase64)

        console.log(video)
        // Posting Product.
        toast.promise(
            axios.post(createProductUrl,video),
        {
            pending: 'loading ...',
            error: {
                render({data}) {
                    return data.message
                }
            }
        }).then((productResponse) => {
            setVideoCreationResponse(productResponse.data)
            if(productResponse.data){
                console.log(productResponse.data)
                let media = {"id":uuid(), "image":fileData,"description":"mp4"}
                console.log(media)
                //creating media
                toast.promise(
                    axios.post(createMediaUrl,media),
                    {
                        pending: 'loading ...',
                        error: {
                            render({data}) {
                                return data.message
                            }
                        }
                    }).then((response) => {
                    console.log(response.data)
                    if(response.data){
                        let productMedia = {"id":uuid(),"mediaId":response.data.id,"mediaType":fileType,"productId":productResponse.data.Id}
                        //Creating product media
                        axios.post(createProductMediaUrl,productMedia).then((productMediaResponse) => {
                            console.log(productMediaResponse.data)
                        })
                    }
                })
            }
        })
    }

    const checkButtonText = hasPrice ?  "Uncheck me if service is free." : "Check me out if service is not free.";

    return (
        <Card style={{width:"auto"}}>
            <Form className="m-3" style={{width:"30em"}} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter a Title"  onChange={titleHandler} aria-required={true}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="file" onChange={changeHandler} placeholder="Enter a Title" aria-required={true}/>
                    <div className="output">
                        {error && <div className="error">{error}</div>}
                        {file && <div>{file.name}</div>}
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control prefix="R" type="number" onChange={priceHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Buy Price</Form.Label>
                    <Form.Control prefix="R" type="number" onChange={buyPriceHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control prefix="R" type="number" onChange={setQuantityHandler} />
                </Form.Group>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Description</InputGroup.Text>
                    <Form.Control as="textarea" onChange={descriptionHandler} aria-label="With textarea" aria-required={true} />
                </InputGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            <ToastContainer position={toast.POSITION.BOTTOM_CENTER} closeOnClick={false} hideProgressBar />
        </Card>
    )
}