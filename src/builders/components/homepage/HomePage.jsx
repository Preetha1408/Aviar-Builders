import { React, useState, useEffect } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image8 from "../../Images/HomePageImages/image8.jpg";
import image9 from "../../Images/HomePageImages/image9.jpg";
import image10 from "../../Images/HomePageImages/image10.jpg";
import IMG10 from "../../Images/IMG10.jpg";
import IMG8 from "../../Images/IMG8.jpg";
import IMG13 from "../../Images/IMG13.jpg";
import "../../../css/builders/BuildersHomePage.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../core/loader";

function HomePage() {
  const navigate = useNavigate(); 
  const [isLoading, setIsLoading] = useState(false);

    // Scroll to the top of the page on mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const customconstruction = () => {
    setIsLoading(true); 
    setTimeout(() => {
      setIsLoading(false);
      navigate("/abs/services/customconstruction");
    }, 2000);
  };
  const MyCarousel = () => {
    return (
      <div className="carousel-main">
        <Carousel className="w-100 h-50" interval={2000}>
          <Carousel.Item>
            <div className="maindiv">
              <img className="carousel-image" src={IMG10} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="maindiv">
              <img className="carousel-image" src={IMG8} alt="Second slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="maindiv">
              <img className="carousel-image" src={IMG13} alt="Third slide" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center flex-column text-center">
        {/* <div className="d-flex justify-content-end">
          <div className="logo"></div>
        </div> */}
      
    
        <div className="carousel-main">
          <MyCarousel />
        </div>
    
      <section className="maindiv w-100">
        <div className="AVIAR-intro pt-4">
          <br/>
          < br/>
          <br/>
          <div className="container">
            <h2 className="pb-2">AVIAR BUILDERS</h2>
            <br/>
            <div className=" maindiv">
              <p className="AVIARtext-intro ">
              Work with AVIAR Builders and experience the difference of working with the custom home builder in Bloomington & Champaign.
               We work with you to understand your needs and give the best home of your dream in your price range.
               We'll help you in every step of your home plan to construction to move in
                <br />
                <br/>
                Thank you and be safe.
              </p>
            </div>
            {/* <div className="maindiv">
              <button className="button m-3" onClick={customconstruction}>
                Custom Homes
                {isLoading && (
                  <div>
                    <Loader />
                  </div>
                )}
              </button>
            </div> */}
            {/* <div className="maindiv flex-row p-2">
              <div className="avr-intro-image mx-2"></div>
              <div className="avr-intro-image2 mx-2"></div>
              <div className="avr-intro-image3 mx-2"></div>
              <div className="avr-intro-image4 mx-2"></div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="mb-1">
        <div className="contains">
          <div className="container">
            <Row className="homepage-mission-vision">
              <Col className="mission-column">
                <div className="mission-inner-column">
                  <div className="mission-box"></div>
                </div>
                <br/>
                <br/>
                <h5>OUR MISSION</h5>
                <div className="text-back">
                  <p className="w-75 ">
                  To enable the homeowners transform their home dreams into reality at affordable with very optimal resources.
                  </p>
                </div>
              </Col>
              <Col className="vision-column">
                <div className="vision-inner-column ">
                  <div className="vision-box"></div>
                </div>
                <br/>
                <br/>
                <h5>OUR VISION</h5>
                <div className="text-back">
                  <p className="alignment-text ">
                  Build homes to suite for every deserving family refelcting their individual family values, create an asset for their life time.
                  </p>
                </div>
              </Col>
            </Row>
            <Row id="services" className="services section-mobile pb-3">
              <div className="container mt-5" data-aos="fade-up">
                <h2 className="mb-4">OUR CORE VALUES</h2>
                <div className="row gy-5">
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                    <div className="service-item">
                      <div className="img">
                        <img
                          src={require("../../Images/HomePageImages/Business team climbing giant handshake with support of leader.jpg")}
                          className="img-height"
                          alt=""
                        />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-activity"></i>
                        </div>
                        <a className="hide-link :: before">
                          <h3>HUMILITY</h3>
                        </a>
                        <p>
                          Listening to homeowners, showing gratitude, focusing on the present, treating every single homeowners as special.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/20943659.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-broadcast"></i>
                        </div>
                        <a className="stretched-link hide-link">
                          <h3>COLLABRATION</h3>
                        </a>
                        <p>
                          Creating an environment that enables collaboration and bringing the
                          best out of the homeowners and builders.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/8104960.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details shadow-lg">
                        <div className="icon">
                          <i className="bi bi-easel"></i>
                        </div>
                        <a className="stretched-link hide-link">
                          <h3>AGILITY</h3>
                        </a>
                        <p>
                          Thinking on feet and providing out of box simple solutions for your home, continuous learning and adaptive
                          to any changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            <Row id="services" className="services section-mobile pb-3">
              <div className="container mt-5" data-aos="fade-up">
                <div className="row gy-5">
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/6859168.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details4 shadow-lg ">
                        <div className="icon">
                          <i className="bi bi-activity"></i>
                        </div>
                        <a className="hide-link :: before">
                          <h3>COMMITMENT</h3>
                        </a>
                        <p>
                          Commitment unlocks the doors of imagination, allows vision, and gives us the right stuff to
                          turn your dream into reality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/20945391.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details5 shadow-lg">
                        <div className="icon">
                          <i className="bi bi-broadcast"></i>
                        </div>
                        <a href="/homepage/integrity" className="stretched-link hide-link">
                          <h3>INTEGRITY</h3>
                        </a>
                        <p>
                          Being ethically unyielding and honest and inspiring trust by saying what we mean, matching
                          our...
                        </p>
                        {/* <a href="/homepage/integrity" className="read-more hide-link">
                          <span className="d-flex justify-content-center fs-18">Read More</span>
                          <i className="bi bi-arrow-right"></i> */}
                        {/* </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="service-item">
                      <div className="img">
                        <img src={require("../../Images/HomePageImages/6155818.jpg")} className="img-height" alt="" />
                      </div>
                      <div className="details6 shadow-lg">
                        <div className="icon">
                          <i className="bi bi-easel"></i>
                        </div>
                        <a href="/homePage/client-value-creation" className="stretched-link hide-link">
                          <h3 className="mt-0">CLIENT VALUE CREATION</h3>
                        </a>
                        <p>We create lasting value for our clients and  bring their dream home to life with precision, and innovation. </p>
                        
                        
                        {/* <a href="/homePage/client-value-creation" className="read-more hide-link">
                          <span className="mb-1 d-flex justify-content-center fs-18">Read More</span>
                          <i className="bi bi-arrow-right"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
