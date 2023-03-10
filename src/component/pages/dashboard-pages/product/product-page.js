import {Button, ButtonToolbar, Card, InputGroup} from "react-bootstrap";
import {HiFolderAdd} from "react-icons/hi";
import VideoTable from "../service/video-component/video-table";
import React from "react";
import ProductTable from "./user-components/product-table";
import {useNavigate} from "react-router-dom";

export default function ProductPage(){
    const navigate = useNavigate();
    const createVideoHandler = () => {
        let url = "/home/product-create";
        navigate(url);
    }
    return (
        <Card>
            <Card.Body>
                <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                    <h4> Products </h4>
                    <InputGroup>
                        <Button variant="info" title="add new video" onClick={(e) => createVideoHandler()}>
                            <HiFolderAdd size="25"/>
                        </Button>
                    </InputGroup>
                </ButtonToolbar>
            </Card.Body>
            <ProductTable/>
        </Card>
    );
}