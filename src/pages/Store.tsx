import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json"

export function Store(){
    return( 
       <>
       <h1>Store</h1>
       <Row xs={1} sm={2} lg={4}>
        {storeItems.map(storeItem=>(
            <Col className="d-flex flex-column align-items-center my-2">
                {/* pass the storeItem as the argument, all the properties will be mapped to the StoreItemProp */}
                <StoreItem {...storeItem}></StoreItem>
            </Col>))}
       </Row>
       </>
    )
}