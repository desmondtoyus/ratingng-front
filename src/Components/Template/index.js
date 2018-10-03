import React, { Component } from "react";
import "../../App.css";
import DefaultNavbar from "../defaultNavbar/index";
import Footer from "../footer";

class Career extends Component {
  render() {
    return (
      <div className="main_div_of_home main-container home-container">
        <DefaultNavbar />

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
                <div className="highlights-card">
                  <br />
                  <br />
                  <span className="about-title">Join Our Team</span>
                  <br />
                  <div
                    className="highlights-card-content"
                    style={{ paddingTop: "2px" }}
                  >
                    <div className="col-md-8" style={{ display: "inline" }}>
                      <br />
                      <hr />
                      <p>job description goes here </p>
                      <br />
                      <br />


                      <div className="report-input-fields">
                        <div className="input-group">
                          <a href="submit-report.html">
                            <div
                              className="input-group-btn"
                              style={{ textAlign: "left" }}
                            >
                              <button
                                className="btn btn-submit"
                                type="submit"
                                style={{ marginLeft: "3px" }}
                              >
                                Submit
                              </button>
                            </div>
                          </a>
                        </div>
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

export default Career;
