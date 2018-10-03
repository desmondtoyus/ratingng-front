import React, { Component } from "react";
import "../../App.css";
import './index.css';
import { Button, Row, Col,} from 'react-bootstrap';
import LogginNavbar from '../LogginNavbar/index';
import Footer from "../footer";

class Screen3 extends Component {
  render() {
    return (
      <div className="main_div_of_home main-container home-container">
        <LogginNavbar />

        <div className="resources-area" style={{ marginTop: "5%" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12" />
            </div>
            <div className="row">
              <div
                className="col-md-12 higlights"
                style={{
                  height: "100%",
                  paddingLeft: "25px",
                  position: "relative",
                  zIndex: "2"
                }}
              >
                <div className="highlights-card" style={{width:'80%', marginRight:'7%', marginLeft:'auto'}}>
                  <br />
                  <div
                    className="highlights-card-content"
                    style={{ paddingTop: "2px" }}
                  >
                    <div className="col-md-10" style={{ display: "inline" }}>
                      <br />
                      <div className="main_div_of_screen3">
                      <Row >
          {/* <Col xs={0} sm={0} md={2} lg={2}></Col> */}
                        <Col xs={12} sm={12} md={12} lg={12}>

                  <div className="sub_div">
                    <span className="bianca">Bianca Lungu Montoya</span>
                    <p className="border-line"></p>
                    <Col md={8}>
                 
                      <span className="followers_text">25 Followers</span>
                      <span className="followers_text">25 Following</span>
                    </Col>
                    <Col md={8}>
                    <div className="div_of_buttons">
                      <Button className="faves_btn"> Faves </Button>
                      <Button className="reviews_btn"> Reviews </Button>
                    </div>
                    </Col>
                  

                    <Row style={{marginTop:"30px"}}>
                      <Col md={6} sm={12}>
                    <h4 className="name_review">Name</h4>

                        <h3 className="product_lorem">Product Lorem Ipsum</h3>
                        <h4 className="location_lorem">Location lorem ipsum</h4>
                        <p className="review-and-photos_text">
                          <span>
                            <i aria-hidden='true' className='redColor star outline icon' />
                            54 reviews
                            </span>
                        </p>
                        <p className="review-and-photos_text">
                          <span>
                            <i aria-hidden='true' className='goldenColor chrome icon' />
                            5 photos
                            </span>
                        </p>

                      
                        <h3 className="product_lorem">Product Lorem Ipsum</h3>
                        <h4 className="location_lorem">Location lorem ipsum</h4>
                        <p className="review-and-photos_text">
                          <span>
                            <i aria-hidden='true' className='redColor star outline icon' />
                            54 reviews
                            </span>
                        </p>
                        <p className="review-and-photos_text">
                          <span>
                            <i aria-hidden='true' className='goldenColor chrome icon' />
                            5 photos
                            </span>
                        </p>
                      </Col>
                      <Col md={6} sm={12}>
                    <h4 className="name_review">Review</h4>

                      <div className="stars" style={{ display: "flex", flexWrap: "wrap" }}>
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <span className="date"> 9/17/2018</span>
                        </div>
                        <p className="lorem_ipsum_paragraph">
                          Lorem ipsum dollor sit amet, consectetur adipiscing elt,
                          sed do euismod tempor indcididunt ut labor et dolore magna aliqua. Ut enim ad minim venium,
                          quis nostrud exercitation ullamco laboris
                            </p>

                    
                        <div className="stars" style={{ display: "flex", flexWrap: "wrap" }}>
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <i aria-hidden='true' className='redColor star outline icon' />
                          <span className="date"> 9/17/2018</span>
                        </div>
                        <p className="lorem_ipsum_paragraph">
                          Lorem ipsum dollor sit amet, consectetur adipiscing elt,
                          sed do euismod tempor indcididunt ut labor et dolore magna aliqua. Ut enim ad minim venium,
                          quis nostrud exercitation ullamco laboris
                            </p>
                      </Col>
                      <Col xs={0} sm={0} md={2} lg={2}></Col>
                    </Row>
                   
                  </div>
            </Col >
          </Row >


</div>
                    </div>
                  </div>

                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Screen3;
