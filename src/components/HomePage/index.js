import React, { useState } from "react";
import { Row, Col, Container, Button, Modal, Card, ProgressBar, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
// Styles
import "../../css/HomePage.scss";
import Sitemap from "../Sitemap";
import AboutUs from "../AboutUs";

function HomePage() {
  

  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [openTeam01Modal, setOpenTeam01Modal] = useState(false);
  const [openTeam02Modal, setOpenTeam02Modal] = useState(false);
  const [openTeam03Modal, setOpenTeam03Modal] = useState(false);
  const [openTeam04Modal, setOpenTeam04Modal] = useState(false);
  const handleClose = () => setOpenTeam01Modal(false);
  const handleTeam02Close = () => setOpenTeam02Modal(false);
  const handleTeam03Close = () => setOpenTeam03Modal(false);
  const handleTeam04Close = () => setOpenTeam04Modal(false);
  const handleSubmit = () => setView(false);


  return (
    <div className="content-margin">
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row home-row-media mt-4">
            <div
              className="col-12 col-md-8 hero-div order-2 order-lg-1 order-md-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <h1>Welcome to AVIAR Technology Services</h1>
              </div>
              <div className="">
                <h2 className="">
                  AVIAR Technology Services help our clients derive greater business value through better management of
                  technology. We are committed to delivering excellence in creating innovative and flexible solutions
                  for our clients.
                </h2>
              </div>
            </div>
            <div className="col-6 col-md-4 order-1 order-lg-2 order-md-2" data-aos="zoom-in" data-aos-delay="200">
              <img src={require("./hero-img.png")} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-2">
        <section id="skills " className="skills section-mobile">
          <h3 class="why-choose why-choose-media">WHY CHOOSE US AVIAR TECHNOLOGY SERVICES?</h3>
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                {/* <img src={require("./skills.png")} className="why-choose-image" alt="" /> */}
                {/* <img src={require("./skills.1.png")} className="why-choose-image" alt="" /> */}
                <img src={require("./skills_2.png")} className="why-choose-image" alt="" />
                {/* <img src={require("./technology-focused.png")} className="why-choose-image" alt="" /> */}
              </div>
              <div className="col-lg-6 pt-4" data-aos="fade-left" data-aos-delay="100">
                <p className="fs-normal why-choose-text">
                  Out of box thinking from our efficient leadership team and employees has enhanced business revenues
                  Simple and clean approach.
                </p>
                <p className="fs-normal why-choose-text">
                  Our offshore is in the tier 3 town of India, enabling us to deliver high quality work with very
                  minimal or negligible operational costs
                </p>
                <p className="fs-normal why-choose-text">
                  Growth company with excellent financial records—Reduced TCO for clients
                </p>
                <div className="skills-content">
                  <div className="progress">
                    <span className="skill fs-20 ">
                      Application Development<i className="val fs-20">80%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <ProgressBar now={80} />{" "}
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill fs-20">
                      Web Designer <i className="val fs-20">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <ProgressBar now={90} />
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill fs-20">
                      Mobile App Development <i className="val fs-20">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <ProgressBar now={75} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* services */}
      <section id="services" class="services section-mobile">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2 className="why-choose why-choose-media">Our Services</h2>
          </div>

          <div class="row gy-5">
            <div class="col-xl-4 col-md-6 p-2" data-aos="zoom-in" data-aos-delay="200">
              <div class="service-item">
                <div class="img">
                  <img src={require("../Images/services-1.jpg")} className="img-fluid" alt="" />{" "}
                </div>
                <div class="details position-relative shadow-lg">
                  <div class="icon">
                    <i class="bi bi-activity"></i>
                  </div>
                  <a href="/ats/consulting-solutions" className="stretched-link hide-link">
                    <h3>CONSULTING SERVICES</h3>
                  </a>
                  <p>
                    We offer a broad portfolio of software project consulting services spanning diverse technologies.
                  </p>
                  <a href="/ats/consulting-solutions" class="read-more hide-link">
                    <span className="mt-2 d-flex justify-content-center fs-18">Read More</span>{" "}
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div class="service-item">
                <div class="img">
                  <img src={require("../Images/services-2.jpg")} className="img-fluid" alt="" />
                </div>
                <div class="details position-relative shadow-lg">
                  <div class="icon">
                    <i class="bi bi-broadcast"></i>
                  </div>
                  <a href="/ats/staffing-solutions" class="stretched-link hide-link">
                    <h3>STAFFING SOLUTIONS</h3>
                  </a>
                  <p>
                    We have the skills and processes to match your business-critical needs and provide contract staffing
                    and direct placement services.
                  </p>
                  <a href="/ats/staffing-solutions" class="read-more hide-link">
                    <span className="mt-2 d-flex justify-content-center fs-18">Read More</span>{" "}
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div class="service-item">
                <div class="img">
                  <img src={require("../Images/services-5.jpg")} className="img-fluid" alt="" />
                </div>
                <div class="details position-relative shadow-lg">
                  <div class="icon">
                    <i class="bi bi-easel"></i>
                  </div>
                  <a href="/ats/geographical-information-services" class="stretched-link hide-link">
                    <h3>GEOGRAPHICAL INFORMATION SYSTEMS</h3>
                  </a>
                  <p>
                    We will provide accurate survey of Land development, urban development, Smart city planning, parcel
                    mapping,
                  </p>
                  <a href="/ats/geographical-information-services" class="read-more hide-link">
                    <span className=" mt-2 d-flex justify-content-center fs-18">Read More</span>{" "}
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us */}
      <section id="about" class="about about-bg">
        <div class="container" data-aos="fade-up">
          <div class="about-title">
            <h2>About Us</h2>
            <p className="fs-25 about-color about-font-size">
              Established in 2015 and headquartered in Bloomington, Illinois, we specialize in a broad range of IT
              consulting and staffing solutions. Our solutions can be tailored to match our clients’ needs while
              maintaining the flexibility to adapt to dynamic market and business requirements. We have been providing
              our services to Corporate and small business clients with remarkable results..
            </p>
            <br />
            <p className="fs-25 about-color about-font-size">
              AVIAR Technology Services help our clients derive greater business value through better management of
              technology. We are committed to delivering excellence in creating innovative and flexible solutions for
              our clients.
            </p>
          </div>
        </div>
      </section>
      <section id="summary" class="summary summary-paading">
        <div className="container">
          {/* <div class="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
              consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
              sit in iste officiis commodi quidem hic quas.
            </p>
          </div> */}
          <div class="row">
            <div class="col-lg-6">
              <div class="icon-box icon_padding">
                <h4 className="">
                  <a className="hide-link fs-25 about-title-size">
                    {" "}
                    Leveraging technology for across the board is standard
                  </a>
                </h4>
                <p className="fs-20 inline about-font-size">
                  AVIAR Technology Services helps from state-of-art data collection systems to supply chain management,
                  no aspect of a business is left untouched by us. We enable companies use tech continuously to produce
                  new goods and services. Beyond products, AVIAR Technology Services plays a role in marketing,
                  recruiting, and internal communications. We use tech to improve not only the lives of your customers
                  but also your internal workflows. AVIAR Technology Services helps businesses dipping into the tech
                  industry and embracing a customer-centric and digital-first mindset.
                </p>
              </div>
            </div>

            <div class="col-lg-6 summary-top">
              <div class="icon-box p-3 icon_padding_right">
                <h4 className="mt-3">
                  <a className="hide-link fs-25 about-title-size">
                    AVIAR Technology Services enables your business to become technology company
                  </a>
                </h4>
                <p className="fs-20 about-font-size">Every company is a technology company.</p>
                <br />
                <p className="fs-20 about-font-size">
                  Why? With no signs of slowing down, our fast-paced digital-first environment transforms all businesses
                  into technology companies. As Forbes points out,
                </p>
                <br />
                <p className="fs-20 about-font-size">
                  “Today, no company can make, deliver or market its product efficiently without technology.”
                </p>
                <br />
                <p className="fs-20 about-font-size">
                  However, the use of technology is only one factor in determining industry status. The speed of digital
                  innovation followed by ever-changing consumer expectations makes using, creating and selling
                  technology a part of every organization's journey.
                </p>
                <br />
                <p className="fs-20 about-font-size">
                  “Every company is a technology company because tech touches every aspect of our lives.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* summary */}

      {/* teams */}
      <AboutUs />
      <Sitemap />
    </div>
  );
}

export default HomePage;
