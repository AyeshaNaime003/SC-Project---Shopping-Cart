import { Card, Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather, faStar } from '@fortawesome/free-solid-svg-icons';


import "../styles/home.css"; // Import the CSS file

export function Home() {
    return
        <>
            {/* MAIN BANNER */}
            <img src="..\src\data\assets\banner.png" alt="" className="banner" />
            {/* FEATURES */}
            <Container className="features mt-1">
                <Row>
                    <Col xs={12} md={6} className='mt-5'>
                            <div className="icon">
                                <FontAwesomeIcon icon={faFeather} className="icons" />
                            </div>
                            <h3>Extra Soft</h3>
                            <p>Our plushies are made with the softest materials to give you a cuddly and comfortable companion.</p>
                    </Col>
                    <Col xs={12} md={6} className='mt-5'>
                            <div className="icon">
                            <FontAwesomeIcon icon={faStar} />
                            </div>
                            <h3>Unique Designs</h3>
                            <p>Our plushies come in a variety of unique designs that you won't find anywhere else.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='mt-5'>
                            <div className="icon">
                                {/* <FaRecycle /> */}
                            </div>
                            <h3>Eco-Friendly Materials</h3>
                            <p>We use eco-friendly materials to make our plushies, so you can feel good about your purchase.</p>
                    </Col>
                    <Col xs={12} md={6} className='mt-5'>
                            <div className="icon">
                                {/* <FaSmile /> */}
                            </div>
                            <h3>Customer Satisfaction</h3>
                            <p>We strive to make our customers happy with every purchase. If you're not satisfied, we'll make it right.</p>
                    </Col>
                </Row>
            </Container>
            {/* best products */}
            {/* cutomer review */}
        </>
}