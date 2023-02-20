


import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './choose-us.css';



const ChooseUs = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='promo'>
                    <img src="./pics/pork_tacos.png" alt="" className='w-100'/>
                </div>
            </Col>

            <Col lg='6'>
                <div className="choose__content">
                    <h4>We Currently Offer Catering!</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est beatae voluptatibus dolorem suscipit voluptatem, explicabo animi minus maxime facilis. Aliquid atque fugit accusamus omnis exercitationem porro illum in hic nisi.</p>

                </div>

                <div className="feature mt-4">
                    <div className="feature1 d-flex align-items-center justify-content-between gap-5">
                        <div className="single__feature">
                            <span><i class="ri-truck-line"></i></span>
                            <h5>Orders over $xxx get free deilvery!</h5>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default ChooseUs;