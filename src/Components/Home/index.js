import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import './index.css';
import DefaultNavbar from '../DefaultNavbar/index';
import Footer from '../footer';
import { Link } from "react-router-dom";


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
                            <p className="searchOver"> Check out the most popular products, services and experiences rated today </p>
                        </Col>
                    </Row>
                    <Row style={{ margin: "1% 0 1% 0" }}>
                     
       
                <div className="col-sm-4 ratingNg-categories">
                    <div className="col-sm-12">
                        <div id="productsActive"></div>
                        <Link className="nav-link" to="/">Products</Link>
                    </div>
                </div>
                <div className="col-sm-4 ratingNg-categories">
                    <div className="col-sm-12">
                        <div id="services"></div>
                        <Link className="nav-link" to="/">Services</Link>
                    </div>
                </div>
                <div className="col-sm-4 ratingNg-categories">
                    <div className="col-sm-12">
                        <div id="experiences"></div>
                        <Link className="nav-link" to="/">Experiences</Link>
                    </div>
                </div>
                    </Row>

                    

                </Grid>
                <div className="neverMiss center">

                        <Row >
      
                        </Row>
                        <Row >
                        <Col sm={3}>     
                            </Col>
                            <Col sm={2}>
                                <Link to="/" className="searchOver"> About Us</Link>
                            </Col>
                            <Col sm={2}>
                                <Link to="/" className="searchOver"> Contact </Link>
                            </Col>
                            <Col sm={2}>
                                <Link to="/" className="searchOver"> Terms and Conditions</Link>
                            </Col>
                            <Col sm={2}>
                                <Link to="/" className="searchOver"> Careers</Link>
                            </Col>
                            <Col sm={3}>      
                            </Col>
                        </Row>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;