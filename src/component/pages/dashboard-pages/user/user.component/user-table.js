import {Button, Table} from "react-bootstrap";
import {Navigate, redirect, useNavigate} from "react-router-dom";
import {GrFormView} from "react-icons/gr";
import {useEffect, useState} from "react";
import axios from "axios";

export default function UserTable(){
    const [userList, setUserList] = useState([])
    const ESHOP_API_USERS = process.env.REACT_APP_API_BASE_URL + "user/account/"
    const ESHOP_API_ACCOUNTS = process.env.REACT_APP_API_BASE_URL + "account"
    let users = [];
    useEffect(() => {
        axios.get(ESHOP_API_ACCOUNTS,{
            // headers: {
            // 'Access-Control-Allow-Origin':'*',
            // }
        }).then((data) => {
            if(data.data!==null){
                // console.log(data.data)
                for (const datum of data.data) {
                    axios.get(ESHOP_API_USERS+datum.Id,{
                        // headers: {
                        // 'Access-Control-Allow-Origin':'*',
                        // }
                    }).then((userData) => {

                        console.log(userData)
                        let user = {"id":userData.data.AccountId,"name":userData.data.FirstName,"surname":userData.data.LastName,"email":datum.Email,"accountOpeningDate":datum.Date,"dateOfBirth":userData.data.DateOfBirth}
                        users.push(user)
                    })
                }
                console.log(users)
                setUserList(users);
            }
        });
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Date of birth</th>
                    <th>Email</th>
                    <th>Date joining</th>
                </tr>
                </thead>
                <tbody>
                {userList != null &&
                    userList.map(userList => <TableContents name={userList.name} surname={userList.surname} email={userList.email} accountOpeningDate={userList.accountOpeningDate} dateOfBirth = {userList.dateOfBirth} key={userList.id} id={userList.id}/>)
                }
                </tbody>
            </Table>
        </>
    )
}

function TableContents(props) {
    const navigate = useNavigate();
    const handleClick = (id) => {
        let url = "/home/product-view/"+id;
        navigate(url)
    };
    return (
        <tr>
            <td></td>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.dateOfBirth}</td>
            <td>{props.email}</td>
            <td>{props.accountOpeningDate}</td>
            <td className="text-center"><Button onClick={(e) => handleClick(props.id)} title="View details">
                <GrFormView size="20px"/>
            </Button></td>
        </tr>
    )
}

