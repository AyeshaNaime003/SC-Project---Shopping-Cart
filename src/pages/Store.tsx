import { Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json"

export function Store() {
    return (
        <>
            <Container className="mt-2 mb-5">
                <h1 style={{textAlign:'center'}} className="my-3">View Our Plushies!!!</h1>
                <Row xs={1} sm={2} lg={4}>
                    {storeItems.map(storeItem => (
                        <Col className="d-flex flex-column align-items-center my-2">
                            {/* pass the storeItem as the argument, all the properties will be mapped to the StoreItemProp */}
                            <StoreItem {...storeItem}></StoreItem>
                        </Col>))}
                </Row>
            </Container>
        </>
    )
}