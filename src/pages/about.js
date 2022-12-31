import React from 'react';
import { Container } from 'react-bootstrap';
import  '../assets/css/bootstrap.min.css';
import  '../assets/css/styles.css';

function About() {
  return (
    <>
 <div className="section-heading text-center">
               <h3 className="semi-bold">About iMagic Studio</h3>
               <div className="section-heading-line line-thin"></div>
            </div>


      <div className="container-fluid pl-0 pr-0">
         <div className="row no-gutters">
            <div className="col-md-6 col-sm-12 col-12">
               <div className="padding-10-perc">
                  <div className="section-heading text-left">
                   
                     <h4 className="semi-bold font-size-35">Who We Are</h4>
                  </div>
                   <div className="text-content mt-20">
                    <p>iMagic Studio is an integrated Marketing Communications Agency Positioned to assist our clients in achieving their corporate goals, by offering unique quality services through competent and dedicated professionals, backed by modern technology.</p>

                  <p>Bringing together the disciplines of mass communication, design excellence ,with and leading edge technical development over 15 years experience we carefully craft solutions that focus on the customer experience. If our clients’ customers are happy, our clients are happy.</p>

                  <p>Our mission is to deliver exemplary return on investment for our clients’ business activities. We’ve always endeavored to do just that since inception.</p>
                  </div>

               </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
               <div className="full-background min-350"></div>
            </div>
         </div>
      </div>
      <div className="section-block grey-bg background-shape-3">
         <div className="container">
            <div className="section-heading text-center">
               <h3 className="semi-bold">Our Values</h3>
               <div className="section-heading-line line-thin"></div>
            
            </div>
            <div className="row mt-20">
               <div className="col-md-4 col-sm-4 col-12">
                  <div className="features-box-3 text-center">
                     <div className="features-box-3-icon"> <i className="icon-message-1"></i> </div>
                     <h4>HONESTY AND INTEGRITY</h4>
                     <p>We believe our clients, service providers, and associates deserve honesty in all aspects of our business. The needs of our clients and associates will be kept as a first priority</p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-12">
                  <div className="features-box-3 text-center">
                     <div className="features-box-3-icon"> <i className="icon-worldwide"></i> </div>
                     <h4>FAIRNESS, EAGERNESS, AND WILLINGNESS</h4>
                     <p>We always look at what service provider will exceed the client's travel needs in a fair manner with a genuine desire to serve the clients.</p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-12">
                  <div className="features-box-3 text-center">
                     <div className="features-box-3-icon"> <i className="icon-network"></i> </div>
                     <h4>SINCERITY AND PROFESSIONALISM</h4>
                     <p>Writing down our vision and mission is not enough. We believe in the meaning of the words and show it by conducting business in the utmost professional manner.</p>
                  </div>
               </div>     
            </div>
         </div>
      </div>
     
    </>
  );
}

export default About;