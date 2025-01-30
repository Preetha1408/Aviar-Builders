import React from "react";
import { Col } from "react-bootstrap";
import "../../css/Home.scss";
import { useNavigate } from "react-router-dom";
import aviar_logo from "../Images/Core/AVIAR_Logo.jpg";
import aviar_text from "../Images/HomePageImages/logo_text.jpg";
import finance_text from "../Images/HomePageImages/finance_text.jpg";
import builders_text from "../Images/Core/builders_text.jpg";

export default function OurWebsites() {  
  const navigate = useNavigate();

  const navigateToFinance = () => navigate("/finance/home");
  const navigateToBuilders = () => navigate("/abs/homepage");

  return (
    <div className="text-center bgc">
      <section className="intro-card p-2">
        <div className="container card-div align-items-center">
          <Col className="intro-card-right text-start order-2 order-lg-1">
            <h2 className="intro-title">Welcome to AVIAR</h2>
            <p className="intro-font">
              AVIAR helps our clients derive greater business value through
              better management of technology. We are committed to delivering
              excellence in creating innovative and flexible solutions for our
              clients.
            </p>
          </Col>
        </div>
      </section>
      <h2 className="intro-title1">Areas of Services</h2>
      <section className="container s2-section">
        <div className="homepage-aboutcard p-2 m-3">
          <div className="card-left"></div>
          <div className="card-right">
            <div
              onClick={() => navigate("/ats/home-page")}
              className="text-primary clickable"
            >
              <div className="image-container">
                <img
                  className="at-logo2"
                  src={aviar_logo}
                  alt="Aviar Logo"
                />
                <img
                  className="at-logo_title"
                  src={aviar_text}
                  alt="Aviar Logo Text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container s2-section">
      <div className="homepage-aboutcard p-2 m-3">
          <div className="card2-left"></div>
          <div className="card-right">
            <div
              onClick={navigateToFinance}
              className="text-primary clickable"
            >
              <div className="image-container">
                <img
                  className="at-logo2"
                  src={aviar_logo}
                  alt="Aviar Logo"
                />
                <img
                  className="at-logo_title"
                  src={finance_text}
                  alt="Finance Logo Text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container s2-section">
      <div className="homepage-aboutcard p-2 m-3">
          <div className="card3-left"></div>
          <div className="card-right">
            <div
               onClick={() => navigate("/abs/homepage")}
              className="text-primary clickable"
            >
              <div className="image-container">
                <img
                  className="at-logo2"
                  src={aviar_logo}
                  alt="Aviar Logo"
                />
                <img
                  className="at-logo_title"
                  src={builders_text}
                  alt="Builders Logo Text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
