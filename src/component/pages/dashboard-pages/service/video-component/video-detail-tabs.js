import Nav from 'react-bootstrap/Nav';
import {Tab, Tabs} from "react-bootstrap";
import Sonnet from "./Sonnet";


export default function VideoDetailTabs() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="home" title="Home">
                <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Sonnet />
            </Tab>
            <Tab eventKey="longer-tab" title="Loooonger Tab">
                <Sonnet />
            </Tab>
            <Tab eventKey="contact" title="Contact" >
                <Sonnet />
            </Tab>
        </Tabs>
    );
}

