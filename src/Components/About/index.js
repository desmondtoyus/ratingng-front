import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";


import './index.css';
import DefaultNavbar from '../defaultNavbar/index';
import Footer from '../footer';


class About extends Component {
    render() {
        return (
            <div className="main_div_of_home main-container home-container">
                <DefaultNavbar />
                <Grid style={{marginTop:'150px'}}>
                <Row>
                        <Col md={12} sm={12} lg={12} xs={12}>
                            <div className="align_center">
                                <span> <i aria-hidden='true' className='star huge icon big-start' />  </span>
                                <span> <i aria-hidden='true' className='star huge icon big-start' /> </span>
                                <span> <i aria-hidden='true' className='star huge icon big-start' /> </span>

                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <h1 className="about_us"> About Us</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3} lg={3} smHidden xsHidden></Col>
               
                        <Col md={3} lg={3} smHidden xsHidden></Col>
                    </Row>
                    <Row style={{ margin: "1% 0 1% 0" }}>
                        <Col sm={12} md={12} lg={12} xs={12}>
                            <div className='about_us_text'> <p > Rating.ng is a nonprofit and independent organization (based in the United States) that works with consumers to ensure truth, fairness and transparency in the Nigerian marketplace.  We aspire to bring about standard and accountability through customer/client reviews and ratings.

Our platform gives customers an opportunity to rate and comment on products they have purchased or services they have received from any store, company or individuals, no matter what part of the country they are in (including online stores).


</p><p>These ratings and comments will enable Prospective customers make informed decisions before making a purchase. Thereby protecting customers while fostering good business practices.

Businesses can never change or re-order their ratings or reviews, however, businesses can respond to comments about themselves or their products.

Businesses can use our third-party review and ratings tool to allow customers to review products they purchased. To use this feature, you will need to add our tag to your website. 
</p></div>
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

export default About;