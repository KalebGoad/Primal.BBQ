

import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem, List } from 'reactstrap';


const footerQuickLinks =[
    {
        display: "Terms & Conditions",
        url: '#'
    },
    {
        display: "Privacy Policy",
        url: '#'
    },
    {
        display: "Payment Method",
        url: '#'
    },

];

const footerLinks =[
    {
        display: "About Us",
        url: '#'
    },
    {
        display: "Menu",
        url: '#'
    },
    {
        display: "Recipes",
        url: '#'
    },
    {
        display: "Contact",
        url: '#'
    },

];



const Footer = () => {
  return <footer className="footer">
    <div className="footer__top">
            <Container>
                <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 class="d-flex align-items-center gap-1 mb-4">
                                    <span>
                                        <i class="ri-restaurant-line"></i>
                                    </span>{" "}
                                    Primal BBQ
                                </h2>
                                <p>Place holder text</p>
                            </div>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">
                                Info Links
                            </h5>

                            <ListGroup>

                            { footerQuickLinks.map((item,index) => (
                                <ListGroupItem key={index} className="link__item">
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))};
                                
                            </ListGroup>
                        </Col>

                        <Col lg='2' md='4' sm='6'>
                            <h5 className="footer__link-title">
                                Quick Links
                            </h5>

                            <ListGroup>

                            { footerLinks.map((item,index) => (
                                <ListGroupItem key={index} className="link__item">
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))};
                                
                            </ListGroup>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">Contact</h5>

                        <ListGroup>
                            <ListGroupItem className="link__item d-flex align-items-center gap-3"><i class="ri-map-pin-line"></i> Lafayette, Louisiana{" "}
                            </ListGroupItem>

                            <ListGroupItem className="link__item d-flex align-items-center gap-3"><i class="ri-mail-line"></i> email@primalBBQ.com{" "}
                            </ListGroupItem>

                            <ListGroupItem className="link__item d-flex align-items-center gap-3"><i class="ri-phone-line"></i> +1 222 222 2222{" "}
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
}

export default Footer;