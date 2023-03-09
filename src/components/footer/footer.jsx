

import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem, List } from 'reactstrap';




const Footer = () => {
  return (
        <footer className="container">
            <div className="footer__top">
            <Container>
                <Row>
                        {/* <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 class="d-flex align-items-center gap-1 mb-4">
                                    <span>
                                        <i class="ri-restaurant-line"></i>
                                    </span>{" "}
                                    Primal BBQ
                                </h2>
                            </div>
                        </Col> */}

                        <Col lg='3' md='4' sm='6'>
                            <ListGroup className="contact">
                                <ListGroupItem className="link__item d-flex align-items-center gap-3"><i class="ri-map-pin-line"></i> Lafayette, Louisiana{" "}
                                </ListGroupItem>

                                <ListGroupItem className="link__item d-flex align-items-center gap-3"><i class="ri-mail-line"></i> email@primalBBQ.com{" "}
                                </ListGroupItem>

                                <ListGroupItem className="link__item d-flex align-items-center  gap-3"><i class="ri-phone-line"></i> +1 222 222 2222{" "}
                                </ListGroupItem>

                                <ListGroupItem className="link__item d-flex align-items-center gap-4"><a href="https://www.facebook.com/search/top/?q=primal.bbq" target="blank"><i class="ri-facebook-circle-fill"></i></a><a href="https://www.instagram.com/primal.bbq/" target="blank"><i class="ri-instagram-line"></i></a>{" "}
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                </Row>
            </Container>
            </div>
            <div className="footer__bottom">
            <Container>
                <Row>
                    <Col lg='12'>
                        <p><i class="ri-copyright-line"></i> Primal BBQ. All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
            </div>
        </footer>
    );
};

export default Footer;