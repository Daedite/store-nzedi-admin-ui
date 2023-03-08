import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import "./../user.css"
import Spinners from "../../util/spinners";
import logo from "../../../util/ditkay.png"
import axios from "axios";
import uuid from "react-uuid";
import Toaster from "../../util/toaster";
import {ToastContainer} from "react-toastify";


export default  function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailIsTrue, setEmailIsTrue] = useState( false);
    const [passwordIsTrue, setPasswordTrue] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const userCreateApi = process.env.REACT_APP_API_BASE_URL+"account"
    const [newUser, setNewUser] = useState(null);
    const navigate = new useNavigate();

    const bothInputAreTrue = () =>{
        return emailIsTrue === true && passwordIsTrue === true;
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(email);
        console.log(password);
        // setPassword("")
        // setEmail("")
        setEmailIsTrue(false)
        setPasswordTrue(false)
        setSpinner(false)

        const account = {
            "id": uuid(),
            "email":email,
            "password":password,
            "date": new Date(),
        }
        console.log(account)
    axios.post(userCreateApi,account,{
        }).then(
        (response) => {
            setNewUser(response.data)
            if(response.data!==null){
                console.log(response.data)
                navigate("/")
            }
        }
    ).catch((error) => {Toaster("error","Authentication failure!")}).finally(() => resetButton())
    }
    function resetButton(){
        setSpinner(true)
        bothInputAreFalse()
    }
    const bothInputAreFalse = () =>{
        return emailIsTrue === false && passwordIsTrue === false;
    }

    const emailChanged = (event) => {
        setEmailIsTrue(true);
        setEmail(event)
    }
    const passwordChanged = (event) => {
        setPasswordTrue(true)
        setPassword(event)
    }

    function signUp(){
        navigate('/');
    }
    function register(){

    }
    const spinnerComponent = <Spinners />
    return (
        <div className="login d-flex justify-content-center ">
            <Col>
                <Row className="text-center">
                    <div className="m-3">
                        <img src={logo} width="150" alt=""/>
                    </div>
                </Row>
                <Row>
                    <div className="container" style={{paddingTop:"80px"}}>
                        <div style={{width:"470px"}} className="card m-auto">
                            <div className="card-header text-center brand-second-color">
                                <h3 className="brand-first-color-text">Register</h3>
                            </div>
                            <div  className="card-body">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="brand-first-color-text">Email address</Form.Label>
                                        <Form.Control value={email}  onChange={(e) =>emailChanged(e.target.value)} type="email" placeholder="Enter email"/>
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="brand-first-color-text">Password</Form.Label>
                                        <Form.Control value={password}  onChange={(e) => passwordChanged(e.target.value)} type="password" placeholder="Password"/>
                                    </Form.Group>
                                    <Row className="mx-auto">
                                        <Button  type="submit"  disabled={!bothInputAreTrue()} className="brand-second-color" >
                                            {spinner ? 'Submit' : spinnerComponent}
                                        </Button>
                                    </Row>
                                    <p className="my-2 small">If you have an account please<Button variant="link" onClick={signUp} className="brand-first-color-text">sign in</Button></p>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Row>
            </Col>
            <ToastContainer/>
        </div>
    );
}


