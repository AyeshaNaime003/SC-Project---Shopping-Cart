import { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
    // 
    const [storeItems, setStoreItems] = useState([]);

    // 
    useEffect(() => {
        fetch('http://localhost:3000/items') // Replace with the appropriate JSON server endpoint
          .then(response => response.json())
          .then(data => setStoreItems(data))
          .catch(error => console.log(error));
      }, []);

      
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