import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import logo from "../../../util/ditkay.png";
import Spinners from "../../util/spinners";
import userAccountStore from "../../core/store/user.account.store";
import {toast, ToastContainer} from "react-toastify";
import Toaster from "../../util/toaster";


function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailIsTrue, setEmailIsTrue] = useState( false);
    const [passwordIsTrue, setPasswordTrue] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const userCreateApi = process.env.REACT_APP_API_BASE_URL+"account"
    const [newUser, setNewUser] = useState();
    const navigate = new useNavigate();
    const addLoginDetail = userAccountStore(state => state.addLoginDetail)


    const bothInputAreTrue = () =>{
        return emailIsTrue === true && passwordIsTrue === true;
    }
    const bothInputAreFalse = () =>{
        return emailIsTrue === false && passwordIsTrue === false;
    }
    const handleLoginSubmit = (event) =>{
        event.preventDefault();
        console.log(email);
        console.log(password);
        // setPassword("")
        // setEmail("")
        setEmailIsTrue(false)
        setPasswordTrue(false)
        setSpinner(false)

        const account = {
            "id": "",
            "email":email,
            "password":password,
            "date": new Date(),
        }
        axios.patch(userCreateApi,account).then(
            (response) => {
                setNewUser(response.data)
                localStorage.setItem('pipoing', JSON.stringify(response.data))
                if(response.data!==null){
                    addLoginDetail(response.data)
                    navigate("/home")
                }
            }
        ).catch((error) => {Toaster("error","Authentication failure!")}).
        finally(() => resetButton())
    }
    function resetButton(){
        setSpinner(true)
        bothInputAreFalse()
    }

    const emailChanged = (event) => {
        setEmailIsTrue(true);
        setEmail(event)
    }
    const passwordChanged = (event) => {
        setPasswordTrue(true)
        setPassword(event)
    }

    const spinnerComponent = <Spinners />
    function signUp(){
        navigate('/signup');
    }
    return (
        <div className="login d-flex justify-content-center ">
            <Col>
                <Row className="text-center">
                    <div className="m-3">
                        <img src={logo} width="150" alt=""/>
                    </div>
                </Row>
                <Row>
                    <div className="container" style={{paddingTop:"40px"}}>
                        <div style={{width:"400px"}} className="card m-auto">
                            <div className="card-header text-center brand-second-color">
                                <h3 className="brand-first-color-text">Login</h3>
                            </div>
                            <div  className="card-body">
                                <Form onSubmit={handleLoginSubmit}>
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
                                        <Button  type="submit"  disabled={!bothInputAreTrue} className="brand-second-color" >
                                            {spinner ? 'login' : spinnerComponent}
                                        </Button>
                                    </Row>
                                    <p className="my-2 small">If you haven't created an account please <Button onClick={signUp} variant="link" className="brand-first-color-text">signup</Button></p>
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

export default LoginPage;
