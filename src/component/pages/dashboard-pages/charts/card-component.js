import {Card, Row} from "react-bootstrap";
import {Text} from "recharts";

export default function LandingPageCard(props){
    return(
        <Card>
            <Row>
                <Text>{props.default.amount}</Text>
                <Text>{props.default.title}</Text>
                <Text>{props.default.description}</Text>
            </Row>

        </Card>
    )
}