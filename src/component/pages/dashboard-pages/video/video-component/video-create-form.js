import {Button, Card, Form} from "react-bootstrap";
import {useState} from "react";

export default function VideoCreateForm() {
    const [hasPrice, setHasPrice] = useState(false);

    function toggle(){
        setHasPrice(!hasPrice);
    }

    const checkButtonText = hasPrice ?  "Uncheck me if video is free." : "Check me out if video is not free.";

    return (
        <Card >
            <Form className="m-3" style={{width:"30em"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Video Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter a Title"/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Video</Form.Label>
                    <Form.Control type="file" placeholder="Enter a Title"/>
                    <Form.Text className="text-muted">
                        Please upload a correct video format...
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggle} type="checkbox" label={checkButtonText}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" hidden={!hasPrice}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control prefix="R" type="number" placeholder="Password"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    )
}