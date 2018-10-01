import React, { Component } from 'react';
import Footer from '../footer/index'
import './index.css';
import NavbarrTwo from '../NavbarrTwo';
import { Link } from 'react-router-dom';

import {
    Grid,
    Row,
    Col,
    Panel,
    FormControl,
    
} from "react-bootstrap";
class Screen6 extends Component {
    render() {
        return (
            <div className="main_div_of_screen6 main-container">
                <NavbarrTwo />
                <Grid>
                    <Row style={{margin:" 100px 0 0 0"}}>
                        <Col xs={0} sm={0} md={2} lg={2}></Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <Panel>
                                <Panel.Body>
                                    <Row>
                                        <Col md={4} lg={4} xs={12} sm={12}>
                                            <h3>Post Review</h3>
                                        </Col>
                                        <Col md={8} lg={8} xsHidden smHidden >
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col xs={12} sm={12} lg={12} md={12}>
                                            <div className="border-line">

                                            </div>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col xs={12} md={6} sm={12} lg={6} style={{margin:"5px 0 5px 0"}}>
                                            <div className="uploadImg">


                                                <span style={{ width: "100%", height: "100%", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <span style={{ display: "flex" }}>
                                                        <i aria-hidden='true' className="chrome icon chromeIcon" />
                                                    </span>
                                                    <span style={{ display: "flex" }}>
                                                        <Link to='/' style={{ display: "flex", fontSize: "17px", color: "black", cursor: "pointer" }} >Drag and drop or click to upload</Link>
                                                    </span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6} sm={12} lg={6} style={{margin:"5px 0 5px 0"}}>
                                            <FormControl
                                                className="text_area"
                                                componentClass="textarea"
                                                placeholder=" Website Add the URL this product links to"
                                                rows="5"
                                            />
                                            <br />
                                            <FormControl
                                                className="text_area big_one"
                                                componentClass="textarea"
                                                placeholder="Description"
                                                rows="5"
                                            />
                                            <span className="stars">
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                                <i aria-hidden='true' className='redColor star outline icon' />
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} md={12} lg={12} xs={12}>
                                            <FormControl
                                                className="text_area select align"
                                                componentClass="select"
                                            >
                                             <option value="">Choose Link to='/' category</option>
                                                <option value="United States">United States</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                            </FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4} sm={12} lg={4} xs={12} className="align">
                                            <span className="createCategory">
                                                <i aria-hidden='true' className='redColor plus circle icon' />
                                                <Link to='/'> Create a Category </Link>
                                            </span>
                                        </Col>
                                        <Col md={8} smHidden lg={8} xsHidden></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} md={12} lg={12} xs={12}>
                                            <FormControl
                                            className="text_area"
                                                type="text"
                                            />
                                        </Col>
                                    </Row>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={0} sm={0} md={2} lg={2}></Col>
                    </Row>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Screen6;