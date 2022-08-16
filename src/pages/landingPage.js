import React from "react";
import Header from "../components/header";
import "./style.css";
import houseVector from "../assets/houseVector.jpeg";
import Footer from "../components/footer";
const LandingPage = () => {
  return (
    <div className="container">
      <section className="landingContainer">
        <div className="landingWrapper">
          <Header />
          <div className="mainText">
            <h2 className="headingText">
              Modern Housing <br />
              Affordable Rates
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum non nunc vitae libero volutpat pretiumros. volutpat
              pretiumros
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </section>
      <section className="ads">
        <div className="adsWrapper">
          <div className="adItem">
            <h6>Property Type</h6>
            <p>Residential</p>
          </div>
          <div className="adItem">
            <h6>Property Type</h6>
            <p>Residential</p>
          </div>
          <div className="adItem">
            <h6>Property Type</h6>
            <p>Residential</p>
          </div>
          <div className="adItem">
            <h6>Property Type</h6>
            <p>Residential</p>
          </div>
          <div className="adItem">
            <h6>Property Type</h6>
            <p>Residential</p>
          </div>
        </div>
      </section>
      <section className="aboutContainer">
        <div className="bannerBody">
          <div className="banner">
            <h6>RPP Categories</h6>
            <h2>Explore Our Range of Facilities</h2>
          </div>
        </div>
        <div className="bannerImage">
          <div className="bannerImg">            
          <img src={houseVector} alt="" />
            <img src={houseVector} alt="" />
            <img src={houseVector} alt="" />
          </div>
          <div className="bannerImg">
            <img src={houseVector} alt="" />
            <img src={houseVector} alt="" />
            <img src={houseVector} alt="" />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;
