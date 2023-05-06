import { Card, Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFeather, faHeart, faRecycle, faStar } from '@fortawesome/free-solid-svg-icons';


import "../styles/home.css"; // Import the CSS file

export function Home() {
    return (
        <>
            {/* MAIN BANNER */}
            <img src="..\src\data\assets\banner.png" alt="" className="banner" />
            {/* FEATURES */}
            <Container className="features mt-1">
                <Row>
                    <Col xs={12} md={3} className='mt-2'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faFeather} className="icons" />
                        </div>
                        <h3>Extra Soft</h3>
                        <p>Softest materials for a cuddly companion.</p>
                    </Col>
                    <Col xs={12} md={3} className='mt-2'>
                        <FontAwesomeIcon icon={faStar} className="icons" />
                        <h3>Unique Designs</h3>
                        <p>Exclusive designs you won't find elsewhere.</p>
                    </Col>
                    <Col xs={12} md={3} className='mt-2'>
                        <FontAwesomeIcon icon={faRecycle} className="icons" />
                        <h3>Eco-Friendly Materials</h3>
                        <p>Eco-friendly materials for a guilt-free purchase.</p>
                    </Col>
                    <Col xs={12} md={3} className='mt-2'>
                        <FontAwesomeIcon icon={faHeart} className="icons" />
                        <h3>Customer Satisfaction</h3>
                        <p>Satisfaction guaranteed, or your money back.</p>
                    </Col>
                </Row>
            </Container>
            {/* CAROUSEL -> CUSTOMER REVIEWS */}
            <Carousel className="mt-5 customers-review" controls={true}>
                <Carousel.Item>
                    <div className="d-flex flex-column align-items-center">
                        {/* <img src="../data/assets/customer1.jpg" alt="Customer 1" /> */}
                        <p> "I love my new plushie! It's so soft and cuddly. Highly recommend!" </p>
                        <h3> Jane Doe </h3>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex flex-column align-items-center">
                        {/* <img src="../data/assets/customer2.jpg" alt="Customer 2" /> */}
                        <p> "I am in love with the design of my plushie. It's so unique and fun!" </p>
                        <h3> John Smith </h3>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex flex-column align-items-center">
                        {/* <img src="../data/assets/customer3.jpg" alt="Customer 3" /> */}
                        <p> "The fact that these plushies are eco-friendly makes me feel good about my purchase." </p>
                        <h3> Mary Johnson </h3>
                    </div>
                </Carousel.Item>
            </Carousel>
            {/* BEST PRODUCTS */}
            <Container className="best-products mt-1">
                <h1>View Our Best Products!</h1>
                <Row>
                    <Col xs={12} md={3} className='mt-2'>
                        <img src="..\src\data\assets\bestproduct1.jpg" alt="" />
                        <h3>Marshmewlo</h3>
                    </Col>
                    <Col xs={12} md={3} className='mt-2 d-flex flex-column 
                    justify-content-center
                    align-items-center'>
                        <img src="..\src\data\assets\bestproducts2.jpeg" alt="" />
                        <h3>Choi San</h3>

                    </Col>
                    <Col xs={12} md={3} className='mt-2'>
                        <img src="..\src\data\assets\bestproduct3.jpg" alt="" />
                        <h3>Banana Pingoo</h3>

                    </Col>
                    <Col xs={12} md={3} className='mt-2'>
                        <img src="..\src\data\assets\bestproduct4.jpg" alt="" />
                        <h3>Grizz</h3>

                    </Col>
                </Row>
            </Container>
            {/* FOOTER */}
        </>
    )
}