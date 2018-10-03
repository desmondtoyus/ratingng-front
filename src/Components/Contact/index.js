import React, {Component} from 'react';
import './index.css';
import DefaultNavbar from '../DefaultNavbar/index';
import Footer from '../footer';

class Contact extends Component{

    render(){

    return(

        <div className="main_div_of_home main-container home-container" >
        <DefaultNavbar />

    <div className="resources-area" style={{marginTop:'5%'}}>
      <div className="container" >
      <div className="row">
        <div className="col-sm-12">
        </div>
      </div>
        <div className="row">
          <div className="col-md-12 higlights" style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="highlights-card">
              <br/>
              <br/>
              <span className="about-title">Contact Us</span>
              <br/>
              <span className="user-location-country">Good Success Ventures (Rating.Ng), 5345 Pennsylvania Merrillville, IN46410, USA.</span>

              <div className="highlights-card-content" style={{paddingTop:'2px'}}>

                <div className="col-md-8" style={{display: 'inline'}}>
                  <br/>
                  <hr/>
                  <p>Questions? Concerns? Suggestions? We want to hear them! Fill out the form below and we will do our best to answer as quickly and thoroughly as possible. </p>
                  <br/>
                  <br/>
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <input type="email" className="form-control" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Your Phone Number"/>
                    </div>
                    <br/>

                  </div>
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <input type="email" className="form-control" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Your Email Address"/>
                    </div>
                    <br/>

                  </div>
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <textarea className="form-control" rows="8" id="desciption" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Please write a comment here"></textarea>

                    </div>
                    <br/>
                    <br/>

                  </div>
                  <div className="report-input-fields">
                    <div className="input-group">
                      <a href="submit-report.html">
                        <div className="input-group-btn" style={{textAlign: 'left'}}>
                          <button className="btn btn-submit" type="submit" style={{marginLeft: '3px'}}>Submit</button>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              <br/>
              <br/>

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

export default Contact;


    