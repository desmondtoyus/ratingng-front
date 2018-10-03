import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import './index.css';
import DefaultNavbar from '../DefaultNavbar/index';
import Footer from '../footer';


class Home extends Component {
    render() {
        return (
            <div className="main_div_of_home main-container home-container">
                <DefaultNavbar />
                <Grid>
                    <Row style={{margin:"120px 0 0 0"}}>
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <img alt="ratingng log" className="ratingLogo" src={require('../../assets/ratingNgLogo.svg')} />
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <h1 className="rateAnyproduct"> Rate any product, service or experience </h1>
                        </Col>
                    </Row>
                    <Row style={{ margin: "1% 0 1% 0" }}>
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <p className="searchOver"> Search over 20,000 products, services or experiences and shop with confidence </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} lg={3} smHidden xsHidden></Col>
                        <Col sm={12} md={6} lg={6} xs={12}>
                            <form  id="search-form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input id="1" className="form-control" type="text" name="search" placeholder="Search products, services or experiences" aria-label="Search"
                                            required />
                                        <span className="input-group-btn">
                                            <button className="btn my-2 my-sm-0 search" type="submit">
                                                <i className="glyphicon glyphicon-search" aria-hidden="true"></i> Search
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </Col>
                        <Col md={3} lg={3} smHidden xsHidden></Col>
                    </Row>
                    <Row style={{ margin: "1% 0 1% 0" }}>
                        <Col md={12} sm={12} lg={12} xs={12}>
                            <h1 className="rateAnyproduct"> Today<sup style={{ fontSize: "30px" }}>,</sup>s Hottests Ratings </h1>
                        </Col>
                    </Row>
                    <Row style={{ margin: "1% 0 1% 0" }}>
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <p className="searchOver"> Check out the most popular products, services and experiences reated today </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} lg={12} xs={12}>
                            <div className="align_center">
                                <span> <i aria-hidden='true' className='star huge icon big-start' /> <p className="star_content"> Products </p> </span>
                                <span> <i aria-hidden='true' className='star huge icon big-start' /> <p className="star_content"> Services </p> </span>
                                <span> <i aria-hidden='true' className='star huge icon big-start' /> <p className="star_content"> Experiences </p> </span>

                            </div>
                        </Col>
                    </Row>

                    <Row>
                    </Row>

                </Grid>
                <div className="neverMiss">
                    <Grid>
                        <Row>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <h1 className="rateAnyproduct"> Never Miss A Message </h1>
                            </Col>
                        </Row>
                        <Row style={{ margin: "1% 0 1% 0" }}>
                            <Col sm={12} md={12} lg={12} xs={12}>
                                <p className="searchOver"> Join our exclusive list for one off deals and more </p>
                            </Col>
                        </Row>
                         <Row>
                        <Col md={3} lg={3} smHidden xsHidden></Col>
                        <Col sm={12} md={6} lg={6} xs={12}>
                            <form  id="search-form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input id="1" className="form-control" type="text" name="search" placeholder="Enter your email address..." aria-label="Search"
                                            required />
                                        <span className="input-group-btn">
                                            <button className="btn my-2 my-sm-0 search" type="submit">
                                                <i className="glyphicon glyphicon-search" aria-hidden="true"></i> Search
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </Col>
                        <Col md={3} lg={3} smHidden xsHidden></Col>
                    </Row>
                    </Grid>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;