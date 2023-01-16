import {Card} from "react-bootstrap";
import VideoTable from "./video-component/video-table";

export default function VideoPage(){
    return (
        <Card>
            <Card.Body>This is Video page.</Card.Body>
            <VideoTable/>
        </Card>
    );
}