import {Button, Table} from "react-bootstrap";
import {Navigate, redirect, useNavigate} from "react-router-dom";
import {GrFormView} from "react-icons/gr";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ProductTable(){
    const [products, setProducts] = useState([])
    const ESHOP_API_PRODUCTS = process.env.REACT_APP_ESHOP_API_BASE_URL + "products"

    useEffect(() => {
        axios.get(ESHOP_API_PRODUCTS,{
            // headers: {
            // 'Access-Control-Allow-Origin':'*',
            // }
        }).then((data) => {
            // console.log(data?.data);
            setProducts(data?.data);
        });
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Sell Price</th>
                    <th>Buy Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => <TableContents name={product.Name} quantity={product.Quantity} buyPrice={product.BuyPrice} sellPrice={product.SellPrice} key={product.Id} id={product.Id}/>)}
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
            <td>{props.quantity}</td>
            <td>{props.buyPrice}</td>
            <td>{props.sellPrice}</td>
            <td className="text-center"><Button onClick={(e) => handleClick(props.id)} title="View details">
                <GrFormView size="20px"/>
            </Button></td>
        </tr>
    )
}

