import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import "./../user.css"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailIsTrue, setEmailIsTrue] = useState( false);
    const [passwordIsTrue, setPasswordTrue] = useState(false);

    const bothInputAreTrue = () =>{
        return emailIsTrue === true && passwordIsTrue === true;
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(email);
        console.log(password);
        setPassword("")
        setEmail("")
    }

    const emailChanged = (event) => {
        // setEmailIsTrue(!emailIsTrue);
        setEmail(event)
    }
    const passwordChanged = (event) => {
        // setPasswordTrue(!passwordIsTrue)
        setPassword(event)
    }

    const navigate = new useNavigate();
    function signUp(){
        navigate('/');
    }
    function register(){

    }
    return (
        <div className="login d-flex justify-content-center ">
            <div className="container" style={{paddingTop:"130px"}}>
                <div style={{width:"470px"}} className="card m-auto">
                    <div className="card-header text-center brand-second-color">
                        <h3>Register</h3>
                    </div>
                    <div  className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  onChange={(e) =>emailChanged(e.target.value)} type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  onChange={(e) => passwordChanged(e.target.value)} type="password" placeholder="Password"/>
                            </Form.Group>
                            <Row className="mx-auto">
                                <Button  type="submit" disabled={!bothInputAreTrue()} className="brand-second-color">
                                    Submit
                                </Button>
                            </Row>
                            <p className="my-2 small">If you have an account please <Button variant="link" onClick={signUp} className="text-success">sign in</Button></p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;
