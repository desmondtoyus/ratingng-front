import React, { Component } from "react";
import "../../App.css";
import './index.css';
import { Button, Row, Col } from 'react-bootstrap';
import DefaultNavbar from '../DefaultNavbar/index';
import Footer from "../footer";

class Screen1 extends Component {
  render() {
    return (
      <div className="main_div_of_home main-container home-container">
        <DefaultNavbar />
        <div className="resources-area" style={{ marginTop: "10%" }}>
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
                  <div
                    className="highlights-card-content"
                    style={{ paddingTop: "2px" }}
                  >
                       <div className="main_div_of_screen1"> 
          <Row >
          <Col xs={0} sm={0} md={2} lg={2}></Col>
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

<Col md={12} sm={12} lg={12} xs={12} style={{margin:"2% 0 0 0"}}>

<Row>
<Col md={4} sm={12} xs={12} lg={4} style={{margin:"5px 0 5px 0"}}>
<h3 className="name_review">Name</h3>
<p className="myFaves_n_travel">My Faves</p>
      <p className="myFaves_n_travel">Travel</p>
</Col>
<Col md={4} sm={12} xs={12} lg={4} style={{margin:"5px 0 20px 0"}}>
<h3 style={{visibility:"hidden"}}>Name</h3>
<p className="myFaves_n_travel_text">271 Faves</p>
<p className="myFaves_n_travel_text">271 Faves</p>
</Col>
<Col md={4} sm={12} xs={12} lg={4} style={{margin:"5px 0 5px 0"}}>
<h3 className="name_review">Last saved to</h3>
<p className="myFaves_n_travel_text">14 days ago</p>
<p className="myFaves_n_travel_text">7 days ago</p>
</Col>
</Row>

</Col>
                  </div>
            </Col>
          </Row>
        </div>
                  </div>
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

export default Screen1;
