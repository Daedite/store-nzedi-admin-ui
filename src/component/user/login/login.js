import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function LoginPage() {
    const navigate = new useNavigate();
    function signIn(){
        navigate('/signup');
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Row className="mx-auto">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Row>
            <p className="my-2 small">If you haven't created an account please <Button onClick={signIn} variant="link" className="text-success">signup</Button></p>
        </Form>
    );
}

export default LoginPage;
