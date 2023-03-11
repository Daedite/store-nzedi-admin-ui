import {Button, Table} from "react-bootstrap";
import {Navigate, redirect, useNavigate} from "react-router-dom";
import {GrFormView} from "react-icons/gr";
import {useEffect, useState} from "react";
import axios from "axios";

export default function VideoTable(){
    const [videos, setVideos] = useState([])
    const ESHOP_API_PRODUCTS = process.env.REACT_APP_ESHOP_API_BASE_URL + "products"

    // useEffect(() => {
    //     axios.get(ESHOP_API_PRODUCTS,{
    //         // headers: {
    //         // 'Access-Control-Allow-Origin':'*',
    //         // }
    //     }).then((data) => {
    //         console.log(data?.data);
    //         setVideos(data?.data);
    //     });
    // }, []);

    const videoTable = [
        {id:'2031',title:'example',size: 10, like: 20},
        {id:'2032',title:'example',size: 10, like: 20},
        {id:'2033',title:'example',size: 10, like: 20},
        {id:'2034',title:'example',size: 10, like: 20},
        {id:'2035',title:'example',size: 10, like: 20},
    ];
    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                {videoTable.map(x => <TableContents title={x.title} size={x.size} like={x.like} key={x.id} id={x.id}/>)}
                </tbody>
            </Table>
        </>
    )
}

function TableContents(props) {
    const navigate = useNavigate();
    const handleClick = (id) => {
        let url = "/home/service-view/"+id;
        navigate(url)
    };
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.buyPrice}</td>
            <td>{props.sellPrice}</td>
            <td className="text-center"><Button onClick={(e) => handleClick(props.id)} title="View details">
                <GrFormView size="20px"/>
            </Button></td>
        </tr>
    )
}

