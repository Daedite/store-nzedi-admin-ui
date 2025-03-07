import {Button, ButtonToolbar, Card, InputGroup} from "react-bootstrap";
import VideoTable from "./video-component/video-table";
import {HiFolderAdd} from "react-icons/hi";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function VideoPage(){
    const navigate = useNavigate();
    const createVideoHandler = () => {
        let url = "/home/service-create";
        navigate(url);
    }
    return (
        <Card className="m-4">
            <Card.Body>
                <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                    <h4> Services </h4>
                    <InputGroup>
                        <Button variant="info" title="add new video" onClick={(e) => createVideoHandler()}>
                            <HiFolderAdd size="25"/>
                        </Button>
                    </InputGroup>
                </ButtonToolbar>
            </Card.Body>
            <VideoTable/>
        </Card>
    );
}