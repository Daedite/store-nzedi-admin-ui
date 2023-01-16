import {Button, Table} from "react-bootstrap";
import {Navigate, redirect, useNavigate} from "react-router-dom";

export default function VideoTable(){
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
        let url = "/home/video-view/"+id;
        navigate(url)
    };
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.size}</td>
            <td>{props.like}</td>
            <td><Button onClick={(e) => handleClick(props.id)}>View</Button></td>
        </tr>
    )
}

