import {Button, Card, Form, InputGroup} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function VideoCreateForm() {
    const [hasPrice, setHasPrice] = useState(false);
    const [videoCreationResponse, setVideoCreationResponse] = useState(null);
    const [file, setFile] = useState(null);
    const [fileData, setFileData] = useState(null);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [error, setError] = useState(null);
    const timApiBaseURL = process.env.REACT_APP_API_BASE_URL
    let data = null;

    const types = ["video/mp4"];

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
                // console.log(convertDataURIToBinary(base64))
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
        let createVideoUrl = timApiBaseURL+"video/video/create"
        let createVideoDataUrl = timApiBaseURL+"video/video-data-test/create"
        if(price>0) privateVideo = true;
        let video = {"title":title,"date":date,"dateUploaded": new Date(),"description":description,"isPrivate":privateVideo,"price":price}
        // let videoData = {"id":"response.data.id","video":fileData,"fileType":"mp4","size":file.size}

         console.log(readFileDataAsBase64)

        toast.promise(
            axios.post(createVideoUrl,video),
        {
            pending: 'loading ...',
            error: {
                render({data}) {
                    return data.message
                }
            }
        }).then((response) => {
            setVideoCreationResponse(response.data)

            let videoData = {"id":response.data.id,"picture":"","video":fileData,"fileType":"mp4","fileSize":""}
            console.log(videoData)
            toast.promise(
                axios.post(createVideoDataUrl,videoData),
                {
                    pending: 'loading ...',
                    error: {
                        render({data}) {
                            return data.message
                        }
                    }
                }).then((response) => {
                setVideoCreationResponse(response.data)
                console.log(response.data)
            })
        })
    }

    const checkButtonText = hasPrice ?  "Uncheck me if video is free." : "Check me out if video is not free.";

    return (
        <Card >
            <Form className="m-3" style={{width:"30em"}} onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Video Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter a Title" onChange={titleHandler} aria-required={true}/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Video</Form.Label>
                    <Form.Control type="file" onChange={changeHandler} placeholder="Enter a Title" aria-required={true}/>
                    <div className="output">
                        {error && <div className="error">{error}</div>}
                        {file && <div>{file.name}</div>}
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Realise date</Form.Label>
                    <Form.Control type="date" onChange={dateHandler} placeholder="Password" aria-required={true}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggle} type="checkbox" label={checkButtonText}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" hidden={!hasPrice}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control prefix="R" type="number" onChange={priceHandler} placeholder="Password"/>
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