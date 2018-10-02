import React, { Component } from 'react'
import { Grid, Row, Col, Panel, Image, FormGroup, FormControl } from "react-bootstrap";
import './index.css'
import Navbarr from '../Navbarr/index'
import Footer from '../footer/index';
import { Link } from 'react-router-dom';

class screen2 extends Component {
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
            <div className="Main_div_of_screen2 main-container">
            <Navbarr />
            {/* <div className="highlights-card"> */}
                <Grid>
                    <Row>
                        <Col xs={0} sm={0} md={2} lg={2}></Col>
                        <Col xs={12} sm={12} md={8} lg={8} style={{marginTop:"100px"}}>
                            <Panel>
                                <Panel.Body>
                                    <Row className="show-grid">
                                        <Col xs={7} sm={7} md={7} lg={9}>
                                            <i aria-hidden='true' className='pencil large icon' />
                                        </Col>
                                        <Col xs={2} sm={2} md={2} lg={1} className="share_icon">
                                            <i aria-hidden='true' className='share alternate large icon' />
                                        </Col>
                                        <Col xs={3} sm={3} md={3} lg={2}>
                                        <button className="btn my-2 my-sm-0 sign-up" type="submit">Save</button>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row className="show-grid">
                                        <Col xs={7} sm={7} md={7} lg={7}>
                                            <div className="main-img"></div>
                                            <div className="scroll">
                                                <Link to='/' className="left-scroll">
                                                    <i aria-hidden='true' className='angle left large icon' />
                                                </Link>
                                                <Link to='/' className="right-scroll">
                                                    <i aria-hidden='true' className='angle right large icon' />
                                                </Link>
                                                <Row className="scroll-div">
                                                    <Col xs={3} sm={3} md={3} lg={3} className="img-scroll"></Col>
                                                    <Col xs={3} sm={3} md={3} lg={3} className="img-scroll"></Col>
                                                    <Col xs={3} sm={3} md={3} lg={3} className="img-scroll"></Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col xs={5} sm={5} md={5} lg={5}>
                                            <h4 className="name">Product Lorem, ipsum.</h4>
                                            <h6 className="name">Location Lorem, ipsum.</h6>
                                            <div className="url">
                                                www.loremipsum.com
                                            </div>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={4} lg={4}>
                                                    <h5 className="detail">14 Reviews</h5>
                                                </Col>
                                                <Col xs={12} sm={12} md={4} lg={4}>
                                                    <h5 className="detail">Comments</h5>
                                                </Col>
                                                <Col xs={12} sm={12} md={4} lg={4}>
                                                    <h5 className="detail">Photos</h5>
                                                </Col>
                                            </Row>
                                            <br />
                                            <div className="stars">
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <span className="reviews"> 14 reviews</span>
                                            </div>
                                            <br />
                                            <Row>
                                                <Col xs={3} sm={3} md={3} lg={3} className="userImg">
                                                    <Image src={require('../../assets/logo.svg')} circle />
                                                </Col>
                                                <Col xs={9} sm={9} md={9} lg={9}>
                                                    <Row>
                                                        <Col xs={10} sm={11} md={11} lg={11}>
                                                            <h4 className="name">First Last Name</h4>
                                                        </Col>
                                                        <Col xs={2} sm={1} md={1} lg={1} className="dots">
                                                            <Image src={require("../../assets/Dots.png")} responsive />
                                                        </Col>
                                                    </Row>
                                                    <h6 className="name_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet?</h6>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={3} sm={3} md={3} lg={3} className="userImg">
                                                    <Image src={require('../../assets/logo.svg')} circle />
                                                </Col>
                                                <Col xs={9} sm={9} md={9} lg={9}>
                                                    <Row>
                                                        <Col xs={10} sm={11} md={11} lg={11}>
                                                            <h4 className="name">First Last Name</h4>
                                                        </Col>
                                                        <Col xs={2} sm={1} md={1} lg={1} className="dots">
                                                            <Image src={require('../../assets/Dots.png')} responsive />
                                                        </Col>
                                                    </Row>
                                                    <h6 className="name_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet?</h6>
                                                </Col>
                                            </Row>
                                            <h6>14 reviews</h6>
                                            <form>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <FormControl componentClass="textarea" placeholder="Add review" />
                                                </FormGroup>
                                            </form>
                                            <Row>
                                                <Col xs={3} sm={3} md={3} lg={3} className="userImg">
                                                    <Image src={require('../../assets/logo.svg')} circle />
                                                </Col>
                                                <Col xs={9} sm={9} md={9} lg={9}>
                                                    <h4 className="name"> <span className="myFaves">You</span> saved to <span className="myFaves">My Faves</span></h4>
                                                    <h6 className="name_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet?</h6>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Panel.Body>
                            </Panel>
                            <br />
                            <div className="align_center">
                                <i aria-hidden='true' className='star huge icon big_start' />
                                <i aria-hidden='true' className='star huge icon big_start' />
                                <i aria-hidden='true' className='star huge icon big_start' />
                                <i aria-hidden='true' className='star huge icon big_start' />
                                <i aria-hidden='true' className='star huge icon big_start' />
                            </div>
                            <br />
                            <h1 className="align_center more_products">More Products Like This</h1>
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
                                        {/* <div>{index + 1}</div> */}
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
                {/* </div> */}
                <Footer />
            </div>
        );
    }
}

export default screen2;