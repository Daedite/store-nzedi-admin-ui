import {Button, ButtonToolbar, Card, InputGroup} from "react-bootstrap";
import {HiFolderAdd} from "react-icons/hi";
import React from "react";
import {useNavigate} from "react-router-dom";
import UserTable from "./user.component/user-table";

export default function UserPage(){
    const navigate = useNavigate();
    const createVideoHandler = () => {
        let url = "/home/product-create";
        navigate(url);
    }
    return (
        <Card className="m-4">
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
            <UserTable/>
        </Card>
    );
}