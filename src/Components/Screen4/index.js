import React, { Component } from 'react'
import { Grid, Row, Col, Panel, } from "react-bootstrap";
import './index.css'
import Navbarr from '../Navbarr/index'
import Footer from '../footer/index'

class Screen4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
                { name: 'Product Lorem Ipsum', title: 'Lorem ipsum dolor sit amet', subtitle: 'Location Iorem Ipsum' },
            ]
        };
    }
    render() {
        return (
            <div className="Main_div_of_screen4 main-container bodyWhite">
            <Navbarr />

            <div className="navbar_borderLine">  </div>
                <Grid>
                    <Row style={{margin:" 100px 0 0 0"}}>
                        <Col xs={0} sm={0} md={2} lg={2}></Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <div className="align_center">
                                <i aria-hidden='true' className='star huge icon big_start' />
                            </div>
                            <br />
                            <h1 className="align_center more_products">Highest Rate Products</h1>
                            <br />
                            <h3 className="align_center shop_with_confidence">Shop with confidence from over 20,000 rated products.</h3>
                            <br />
                        </Col>
                        <Col xs={0} sm={0} md={2} lg={2}></Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        {this.state.cards.map((card, index) => {
                            return <Col xs={6} sm={4} md={4} lg={3} key={index}>
                                <Panel>
                                    <Panel.Heading style={{ height: '150px' }}>
                                     
                                    </Panel.Heading>
                                    <Panel.Body>
                                        <h4 className="card_name">{card.name}</h4>
                                        <h6>
                                            <i aria-hidden='true' className='redColor star outline icon' />
                                            <i aria-hidden='true' className='redColor star outline icon' />
                                            <i aria-hidden='true' className='redColor star outline icon' />
                                            <i aria-hidden='true' className='redColor star outline icon' />
                                            <i aria-hidden='true' className='redColor star outline icon' />
                                            14 reviews
                                            </h6>
                                        <h5>{card.title}</h5>
                                        <h6>{card.subtitle}</h6>
                                    </Panel.Body>
                                </Panel>
                            </Col>
                        })}
                    </Row>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Screen4;