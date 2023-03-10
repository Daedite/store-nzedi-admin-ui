import {Tab, Tabs} from "react-bootstrap";
import ProductSonnet from "./productSonnet";


export default function ProductDetailTabs(props) {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill>
            <Tab eventKey="Quantity" title="Quantity">
                <ProductSonnet description={props.product.Quantity}/>
            </Tab>
            <Tab eventKey="Sell Price" title="Sell Profile">
                <ProductSonnet description={props.product.SellPrice}/>
            </Tab>
            <Tab eventKey="Buy price" title="Buy price">
                <ProductSonnet description={props.product.BuyPrice}/>
            </Tab>

        </Tabs>
    );
}

