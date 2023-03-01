import {useNavigate, useParams} from "react-router-dom";
import {Button, ButtonToolbar, Card, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import CardHeader from "react-bootstrap/CardHeader";
import {FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import {AiOutlineFolderView} from "react-icons/ai";
import "./profile-page.css"
import userLoginStore from "../core/store/user.account.store";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import { format } from "date-fns";


export default function ProfilePage() {
    const navigate = useNavigate();
    const [hasChanged, setHasChanged] = useState(true);
    const [user, setUser] = useState(null);
    const session = JSON.parse(localStorage.getItem('pipoing'))
    const getUserApi = process.env.REACT_APP_API_BASE_URL+"user/user/get/"
    const createUserApi = process.env.REACT_APP_API_BASE_URL+"user/user/create"
    const updateUserApi = process.env.REACT_APP_API_BASE_URL+"user/user/update"
    const getRoleApi = process.env.REACT_APP_API_BASE_URL+"user/role/get/"
    let userKeeper = {"name":"client with no name","phone":"232843875445","asUser":false}
    const userEmail = useParams().email
    const [userRole, setUserRole] = useState(false)

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [cellphone, setCellphone] = useState("")
    const [role, setRole] = useState("")
    const dataFormated = format(new Date(),'yyyy-MM-dd')
    const [birthDate, setBirthDate] = useState(dataFormated)

    function getUserRole(email){
        axios.get(getUserApi+email).then((data)=> {
            console.log(data?.data);
            if(data.data.roleId!==''){
                axios.get(getRoleApi+data?.data.roleId)
            }
        });
    }

    function getRole(roleId){
        if(roleId!==''){
            axios.get(getRoleApi+roleId).then((data) =>{
                if(data.data.name === 'admin'){
                    setUserRole(true)
                }
            })
        }
    }

    useEffect(() => {
        // we are verifying with session value to avoid unauthenticated user to view a profile
        // in the future we should check ttl of a session.
        // If the session is valid we call for user detail(name,...roleId) else
        console.log(session)
        if(session){
            axios.get(getUserApi+userEmail).then((data)=> {
                console.log(data?.data);
                if(data.data.email!==''){
                    setUser(data?.data)
                    userKeeper = data.data
                    setName(data?.data.name)
                    setSurname(data?.data.surname)
                    setBirthDate(data?.data.birthDate)
                    setRole(data?.data.roleId)
                }
            });
        }else{
            navigate('/')
        }
    },[])

    let email = useParams().email
    const image = "https://media.istockphoto.com/id/477151294/photo/smile-girl-at-beach.jpg?s=1024x1024&w=is&k=20&c=5SNrc56tXFIeSN0Avumm4zuqfK4kBXaDPHULuPuuUAo=";

     const toggle = () => {
        setHasChanged(false);
    }
    const hasUser = ()=>{
        return !!(name || surname || cellphone || birthDate);
    }

    function editAccount() {
        navigate('/home/edit-account')
    }

    function viewContents() {
        navigate('/home/view-my-video')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            "email":email,
            "name":name,
            "surname":surname,
            "birthDate": birthDate,
            "roleI":role,
        }
        if(hasUser()){
            console.log('update')
            axios.post(updateUserApi,user).then(
                (response) => {
                    if(response.data!==null){
                        setUser(response.data)
                    }
                }
            )
        }else{
            console.log('create')
            axios.post(createUserApi,user).then(
                (response) => {
                    if(response.data!==null){
                        setUser(response.data)
                    }
                }
            )
        }

        console.log(user)

    }

    const nameChanged = (event) =>{
        toggle()
        setName(event)
    }

    const surnameChanged = (event) =>{
        toggle()
        setSurname(event)
    }

    const cellphoneChanged = (event) =>{
        toggle()
        setCellphone(event)
    }

    const birthDateChanged = (event) =>{
        toggle()
        setBirthDate(event)
    }
    return (
        <Container className="m-4">
            <Row>
                <Col className="m-2">
                    <Card>
                        <Image className="m-4" src={image} width="90%"></Image>
                        <Row className="m-4">
                            <Col>
                                <h3> My Profile</h3>
                            </Col>
                            <Col>
                                <p className="text-muted small">Last Login at 10 Aug 2022 10:30 AM</p>
                                <p className="text-muted small">Last Login at 10 Aug 2022 10:30 AM</p>
                            </Col>
                        </Row>

                        <Row className="m-3">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Name
                                    </Form.Label>
                                    <Col sm="7">
                                        {name ?
                                        <Form.Control value={name}  plaintext onChange={(e) =>nameChanged(e.target.value)} defaultValue={userKeeper.name}/> :
                                            <Form.Control value={name}  style={{borderColor:"red"}} onChange={(e) =>nameChanged(e.target.value)} defaultValue={userKeeper.name}/>}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Surname Name
                                    </Form.Label>
                                    <Col sm="7">
                                        {surname ?
                                            <Form.Control value={surname}  plaintext onChange={(e) =>surnameChanged(e.target.value)} defaultValue={userKeeper.name}/> :
                                            <Form.Control value={surname} style={{borderColor:"red"}} onChange={(e) =>surnameChanged(e.target.value)} defaultValue={userKeeper.name}/>}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Phone number
                                    </Form.Label>
                                    <Col sm="7">
                                        {cellphone ?
                                        <Form.Control value={cellphone} plaintext type="number" onChange={(e) =>cellphoneChanged(e.target.value)} placeholder={userKeeper.phone} title="no worries if it's not reflecting"/>:
                                        <Form.Control value={cellphone} style={{borderColor:"red"}} type="number" onChange={(e) =>cellphoneChanged(e.target.value)} placeholder={userKeeper.phone}/>}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Birthdate
                                    </Form.Label>
                                    <Col sm="7">
                                        {birthDate ?
                                            <Form.Control value={birthDate} plaintext type="date" onChange={(e) =>birthDateChanged(e.target.value)} placeholder={userKeeper.phone}/>:
                                            <Form.Control value={birthDate} className="empty-input" type="date" onChange={(e) =>birthDateChanged(e.target.value)} />}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="5">
                                        Email
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control plaintext readOnly type="text" placeholder={userEmail}/>
                                    </Col>
                                </Form.Group>
                                <Row className="align-content-center">
                                    <Button type="submit" variant="success" disabled={hasChanged}>Success</Button>
                                </Row>
                            </Form>
                        </Row>
                    </Card>
                </Col>


                <Col className="me-4 mt-2">
                    <Card>
                        <CardHeader>
                            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                                <h4>My accounts </h4>
                                <InputGroup>
                                    <Button variant="secondary" title="add new video" onClick={(e) => editAccount()}
                                            disabled={true}>
                                        Edit
                                    </Button>
                                </InputGroup>
                            </ButtonToolbar>
                        </CardHeader>

                        <Container>
                        <Row className="mt-4 mb-4">
                            <Col>
                                <h6 className="text-secondary">Active account</h6>
                                <h6 className="text-muted">10 Jun 2020 10:34 pm</h6>
                            </Col>
                            <Col className="text-end">
                                <Button  variant="danger">Block Account</Button>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col>
                                <h6>Blocked account</h6>
                                <h6 className="text-muted">10 Jun 2020 10:34 pm</h6>
                            </Col>
                            <Col className="text-end">
                                <Button variant="success" disabled={true}>Block Account</Button>
                            </Col>
                        </Row>
                        </Container>
                    </Card>

                    <Card className="my-4">
                        <CardHeader>
                            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                                <h4>My Reputations </h4>
                                <InputGroup>
                                    <Button variant="success" title="add new video" onClick={(e) => editAccount()}
                                            disabled={true}>
                                        <FiThumbsUp size="20px"/>
                                    </Button>
                                </InputGroup>
                            </ButtonToolbar>
                        </CardHeader>

                        <Container>
                            <Row className="mt-4 mb-3">
                                <Col>
                                    <h6 className="text-danger">Active account</h6>
                                    <h6 className="text-muted">10 Jun 2020 10:34 pm</h6>
                                </Col>
                                <Col className="text-end">
                                    <h4 className="text-danger">10  <sub><FiThumbsDown /></sub></h4>
                                </Col>
                            </Row>

                            <Row className="mb-5">
                                <Col>
                                    <h6 className="text-success"> Account Likes</h6>
                                    <h6 className="text-muted">10 Jun 2020 10:34 pm</h6>
                                </Col>
                                <Col className="text-end">

                                    <h4 className="text-success">100  <sub><FiThumbsUp /></sub></h4>

                                </Col>
                            </Row>
                        </Container>
                    </Card>

                    <Card className="my-4">
                        <CardHeader>
                            <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                                <h4>My Contents </h4>
                                <InputGroup>
                                    <Button variant="success" title="add new video" onClick={(e) => viewContents()}
                                            disabled={false}>
                                        <AiOutlineFolderView size="20px"/>
                                    </Button>
                                </InputGroup>
                            </ButtonToolbar>
                        </CardHeader>

                        <Container>
                            <Row className="my-5">
                                <Col>
                                    <h6 > Number of contents</h6>
                                </Col>
                                <Col className="text-end">

                                    <h4 >100</h4>

                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}