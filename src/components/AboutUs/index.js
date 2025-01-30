import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faProjectDiagram,
  faHandHoldingHeart,
  faHandshake,
  faFan,
  faUserShield,
  faPeopleCarry,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

//images
import mission from "../Images/target-1.png";
import vission from "../Images/vision_2.jpg";

import { faEdit } from "@fortawesome/free-regular-svg-icons";
import "../../css/AboutUs.scss";
import "react-circular-progressbar/dist/styles.css";
import { FaConnectdevelop, FaTools, FaMobile, FaCloud, FaShoppingCart, FaDatabase } from "react-icons/fa";
import { useState} from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

function AboutUs() {
  const [focus, setFocus] = useState(false);
  return (
    <div>
      <section id="counts" class="counts">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4">
            <div class="col-6 col-md-4 count-media">
              <div class="count-box">
                <i class="bi bi-emoji-smile">
                  <FontAwesomeIcon icon={faAddressCard} className="c-icon-size" />
                </i>
                <div className="ms-3 justify-content-center">
                  <CountUp start={focus ? 1 : null} end={7} duration={3} redraw={true} className="purecounter">
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <p>Active Clients</p>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-4 count-media">
              <div class="count-box">
                <i class="bi bi-journal-richtext" style={{ color: "#ee6c20" }}>
                  <FontAwesomeIcon icon={faProjectDiagram} className="c-icon-size" />
                </i>
                <div className="ms-3">
                  <CountUp start={focus ? 1 : null} end={25} duration={3} redraw={true} className="purecounter">
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <p>Projects</p>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-4 count-media">
              <div class="count-box">
                <i class="bi bi-headset" style={{ color: "#15be56" }}>
                  <FontAwesomeIcon icon={faEdit} className="c-icon-size" />
                </i>
                <div className="ms-3">
                  <CountUp start={focus ? 1 : null} end={30} duration={3} redraw={true} className="purecounter">
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <p>Implementations</p>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </div>
              </div>
            </div>

            {/* <div class="col-6 col-md-4">
              <div class="count-box">
                <i class="bi bi-people" style={{ color: "#bb0852" }}></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Container>
        <h4 class="why-choose">Technology Focused</h4>
        <Row>
          <Col xs={12} md={4} className="mt-3 that-here">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbarWithChildren strokeWidth={5} value={80}>
                <div>
                  <FaConnectdevelop style={{ color: "#3e98c7" }} size={40} />
                </div>
                <div className="d-flex justify-content-center text-center">
                  <p className="mb-0" style={{ fontSize: 18, color: "#3e98c7", width: "60%" }}>
                    Application Development
                  </p>
                </div>
                <div>
                  <strong style={{ fontSize: 20, color: "#3e98c7" }}>80 %</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </Col>
          <Col xs={12} md={4} className="mt-3 that-here">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbarWithChildren strokeWidth={5} value={75}>
                <div>
                  <FaTools style={{ color: "#3e98c7" }} size={40} />
                </div>
                <div style={{ fontSize: 18, color: "#3e98c7" }}>BBPM/BRM Tools</div>
                <div>
                  <strong style={{ fontSize: 20, color: "#3e98c7" }}>75 %</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </Col>
          <Col xs={12} md={4} className="mt-3 that-here">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbarWithChildren strokeWidth={5} value={90}>
                <div>
                  <FaMobile style={{ color: "#3e98c7" }} size={40} />
                </div>
                <div style={{ fontSize: 18, color: "#3e98c7" }}>Mobile Application</div>
                <div>
                  <strong style={{ fontSize: 20, color: "#3e98c7" }}>90 %</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col xs={12} md={4} className="mt-3 that-here">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbarWithChildren strokeWidth={5} value={85}>
                <div>
                  <FaCloud style={{ color: "#3e98c7" }} size={40} />
                </div>
                <div style={{ fontSize: 18, color: "#3e98c7" }}>Cloud</div>
                <div>
                  <strong style={{ fontSize: 20, color: "#3e98c7" }}>85 %</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </Col>
          <Col xs={12} md={4} className="mt-3 that-here">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbarWithChildren strokeWidth={5} value={80}>
                <div>
                  <FaShoppingCart style={{ color: "#3e98c7" }} size={40} />
                </div>
                <div style={{ fontSize: 18, color: "#3e98c7" }}>E commerce</div>
                <div>
                  <strong style={{ fontSize: 20, color: "#3e98c7" }}>80 %</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </Col>
          <Col xs={12} md={4} className="mt-3 that-here">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbarWithChildren strokeWidth={5} value={95}>
                <div>
                  <FaDatabase style={{ color: "#3e98c7" }} size={40} />
                </div>
                <div style={{ fontSize: 18, color: "#3e98c7" }}>Big Data</div>
                <div>
                  <strong style={{ fontSize: 20, color: "#3e98c7" }}>95 %</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </Col>
        </Row>
      </Container>

      <section id="our-mission" class="our-mission">
        <div class="details">
          <div class="row">
            <div class="col-md-6 d-flex align-items-stretch">
              <div
                class="vission"
                style={{ backgroundImage: `url(${mission})` }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Container>
                  <div class="vission-body">
                    <h5 class="vission-title">
                      <a>OUR MISSION</a>
                    </h5>
                    <p class="vission-text">
                      To enable our clients to transform their business into high performing and productive with very
                      optimal resources.
                    </p>
                  </div>
                </Container>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div
                class="vission"
                style={{ backgroundImage: `url(${vission})` }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Container>
                  <div class="vission-body">
                    <h5 class="vission-title">
                      <a>OUR VISION</a>
                    </h5>
                    <p class="vission-text">
                      Leverage efficient technologies and innovate small, mid-level business, educational and charity
                      institutions processes.
                    </p>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Container className="pt-4">
        <div>
          <h3 className="why-choose"> OUR CORE VALUES</h3>
        </div>
        <div>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <div className="iconicon">
                <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" />
              </div>
              <h5 className="iconiconic pt-2">HUMILITY</h5>
              <p className="px-3 para-text">
                Listening to others, showing gratitude, focusing on the present, treating everyone as special.
              </p>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="iconicon">
                <FontAwesomeIcon icon={faHandshake} size="3x" />
              </div>
              <h5 className="iconiconic pt-2">COLLBRATION</h5>
              <p className="px-3 para-text">
                Creating an environment that enables collaboration of every level of talent and bringing the best out of
                the client and self.
              </p>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="iconicon">
                <FontAwesomeIcon icon={faFan} size="3x" />
              </div>
              <h5 className="iconiconic pt-2">AGILITY</h5>
              <p className="px-3 para-text">
                Thinking on feet and providing out of box simple solutions, continuous learning and adaptive to any
                changes.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <div className="iconicon">
                <FontAwesomeIcon icon={faLink} size="3x" />
              </div>
              <h5 className="iconiconic pt-2">COMMITMENT</h5>
              <p className="px-3 para-text">
                Commitment unlocks the doors of imagination, allows vision, and gives us the right stuff to turn our
                dream into reality.
              </p>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="iconicon">
                <FontAwesomeIcon icon={faUserShield} size="3x" />
              </div>
              <h5 className="iconiconic pt-2">INTIGRITY</h5>
              <p className="px-3 para-text">
                Being ethically unyielding and honest and inspiring trust by saying what we mean, matching our behaviors
                to our words and taking responsibility for our actions.
              </p>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="iconicon">
                <FontAwesomeIcon icon={faPeopleCarry} size="3x" />
              </div>
              <h5 className="iconiconic pt-2">CLIENT VALUE CREATION</h5>
              <p className="px-3 para-text">
                Enabling clients to become high-performance businesses and creating long-term relationships by being
                responsive and relevant and by consistently delivering value.
              </p>
            </Col>
          </Row>
        </div>
        <div></div>
      </Container> */}
      <section id="core" class="core">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>OUR CORE VALUES</h2>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon">
                  <i class="bx bxl-dribbble">
                    <FontAwesomeIcon className="icon_center" icon={faHandHoldingHeart} size="2x" />
                  </i>
                </div>
                <h4 class="title">
                  <a className="hide-link">HUMILITY</a>
                </h4>
                <p class="description">
                  Listening to others, showing gratitude, focusing on the present, treating everyone as special.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon">
                  <i class="bx bx-file">
                    <FontAwesomeIcon className="icon_center" icon={faHandshake} size="2x" />
                  </i>
                </div>
                <h4 class="title">
                  <a className="hide-link">COLLABRATION </a>
                </h4>
                <p class="description">
                  Creating an environment that enables collaboration of every level of talent and bringing the best out
                  of the client and self.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon">
                  <i class="bx bx-tachometer">
                    <FontAwesomeIcon className="icon_center" icon={faFan} size="2x" />
                  </i>
                </div>
                <h4 class="title">
                  <a className="hide-link">AGILITY</a>
                </h4>
                <p class="description">
                  Thinking on feet and providing out of box simple solutions, continuous learning and adaptive to any
                  changes.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mt-5 mb-lg-0 core-buttom">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon">
                  <i class="bx bx-world">
                    <FontAwesomeIcon className="icon_center" icon={faLink} size="2x" />
                  </i>
                </div>
                <h4 class="title">
                  <a className="hide-link">COMMITMENT</a>
                </h4>
                <p class="description">
                  Commitment unlocks the doors of imagination, allows vision, and gives us the right stuff to turn our
                  dream into reality.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mt-5 mb-lg-0 core-top ">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon">
                  <i class="bx bx-world">
                    <FontAwesomeIcon className="icon_center" icon={faUserShield} size="2x" />
                  </i>
                </div>
                <h4 class="title">
                  <a className="hide-link">INTEGRITY </a>
                </h4>
                <p class="description">
                  Being ethically unyielding and honest and inspiring trust by saying what we mean, matching our
                  behaviors to our words and taking responsibility for our actions.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex align-items-stretch mt-5 mb-lg-0 core-top ">
              <div class="icon-box core-media" data-aos="fade-up" data-aos-delay="400">
                <div class="icon">
                  <i class="bx bx-world">
                    <FontAwesomeIcon className="icon_center" icon={faPeopleCarry} size="2x" />
                  </i>
                </div>
                <h4 class="title">
                  <a className="hide-link">CLIENT VALUE CREATION </a>
                </h4>
                <p class="description">
                  Enabling clients to become high-performance businesses and creating long-term relationships by being
                  responsive and relevant and by consistently delivering value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;
