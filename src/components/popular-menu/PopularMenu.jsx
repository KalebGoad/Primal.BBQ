import React from 'react'

import { Container,Row,Col } from 'reactstrap';
// import {productData}  from '../../assets/data/products';  
import data from '../../assets/data/data';
import MyProducts from '../products/products';
import './popularMenu.css';

const PopularMenu = ({productItems}) => {

    return (
        <section className="pt-0">
            <Container>
                <Row className="menuItems">
                    <Col lg= '12' className="mb-5">
                        <h2>Popular food menu</h2>
                    </Col>

                    {
                        productItems.map(item=>(
                            <Col lg="3" key={productItems.id}>
                                <MyProducts item={productItems}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}

export default PopularMenu;