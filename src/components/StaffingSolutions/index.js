import React from "react";
import "../../css/Staffingsolutions.scss";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { FaDatabase, FaDolly, FaCloud, FaMobile, FaToolbox, FaShoppingCart, FaTv } from "react-icons/fa";
// styles
import Sitemap from "../Sitemap";


function Staffing() {
  return (
    <div className="mt-2">
      <section id="staffing" class="staffing ">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>STAFFING SOLUTIONS</h2>
            <p className="staffing">
              We have the skills and processes to match your business-critical needs and provide contract staffing and
              direct placement services. Our talent acquisition team supports several Fortune 500 customers for their
              staffing solutions needs in IT, engineering, HR, marketing, creative, accounting, professional and
              scientific.
            </p>
          </div>

          <div class="row">
            <div class="image col-lg-6 " data-aos="zoom-in" data-aos-delay="100">
              <img
                src={require("../HomePage/skills-removebg-preview.png")}
                className="img-fluid animated tab-img"
                alt=""
              />
            </div>
            <div className="col-lg-12 staffing-media">
              <div class="row  mt-4" data-aos="fade-left">
                <div className="row">
                  <div class="col-6 col-md-4 mt-4 staffing-list">
                    <div class="text-box" data-aos="zoom-in" data-aos-delay="50">
                      <h3>
                        <a className="fs-20 fw-500 hide-link ms-0">Staffing Services</a>
                      </h3>
                    </div>
                  </div>
                  <div class="col-6 col-md-4  mt-4 staffing-list">
                    <div class="text-box" data-aos="zoom-in" data-aos-delay="100">
                      <h3>
                        <a className="fs-20 fw-500 hide-link ms-0 no-wrap">Industry Expertis</a>
                      </h3>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 mt-4 staffing-list">
                    <div class="text-box px-5" data-aos="zoom-in" data-aos-delay="150">
                      <h3>
                        <a className="fs-20 fw-500 hide-link ms-0">Contract</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div class="col-4 mt-4 staffing-list">
                    <div class="text-box" data-aos="zoom-in" data-aos-delay="200">
                      <h3>
                        <a className="fs-20 fw-500 hide-link ms-0">Contract to Hire </a>
                      </h3>
                    </div>
                  </div>
                  <div class="col-4 mt-4 staffing-list">
                    <div class="text-box" data-aos="zoom-in" data-aos-delay="250">
                      <h3>
                        <a className="fs-20 fw-500 hide-link">Permanent/Direct</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="col-6 col-md-4 mt-4 staffing-list">
                    <div class="text-box" data-aos="zoom-in" data-aos-delay="300">
                      <h3>
                        <a className="fs-20 fw-500 hide-link ms-0">Payroll Services</a>
                      </h3>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 mt-4 staffing-list">
                    <div class="text-box px-2" data-aos="zoom-in" data-aos-delay="350">
                      <h3>
                        <a className="fs-19 fw-500 hide-link  no-wrap ms-2">Volume-based project</a>
                      </h3>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 mt-4 staffing-list">
                    <div class="text-box px-5" data-aos="zoom-in" data-aos-delay="400">
                      <h3>
                        <a className="fs-20 fw-500 hide-link ms-1">Staffing</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <div class="row featues mt-3" data-aos="fade-up">
          <div className="center-content ">
            <h3 className=" why-choose tech-title">Technology Focus</h3>
          </div>
          <div className="row">
            <div class="col-lg-6 col-md-6 order-lg-2 order-1 p-5 m-t-8 ">
              <img src={require("../HomePage/features-2.png")} className="img-fluid tab-tech-img " alt="" />
            </div>
            <div className="col-lg-6 order-lg-1 order-2 ">
              <Tab.Container id="left-tabs-example" defaultActiveKey="application Development">
                <Row>
                  <Nav className="flex-row tab_row nav-pills  width-20% features">
                    <Col className="text-center " xs={6} sm={6} md={4} lg={4}>
                      <Nav.Item className="row-md">
                        <Nav.Link eventKey="application Development">
                          <div className="">
                            {/* <FaTv size="40px" /> */}
                            <p className="mb-0 first-tab fs-20 ">
                              Application <p className="mb-0 first-tab fs-20 ">Development</p>
                            </p>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Col>
                    <Col className="text-center " xs={6} sm={6} md={4} lg={4}>
                      <Nav.Item className="row-md">
                        <Nav.Link eventKey="second">
                          {" "}
                          <div className="">
                            {/* <FaToolbox className="fs-20" /> */}
                            <p className="mb-0 second-tab fs-20">
                              BBPM/BRM<p className="mb-0 second-tab fs-20">Tools</p>
                            </p>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Col>
                    <Col className="text-center" xs={6} sm={6} md={4} lg={4}>
                      <Nav.Item className="row-md">
                        <Nav.Link eventKey="third">
                          {" "}
                          <div className="">
                            {/* <FaMobile className="fs-20" /> */}
                            <p className="mb-0 third-tab fs-20">
                              Mobile <p className="mb-0 third-tab fs-20 no-wrap">Application Development</p>
                            </p>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Col>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="application Development">
                      <p className="mt-3 fs-20">
                        {" "}
                        <b className="fs-20 b-color">Languages: </b> Java, JavaScript, .Net, HTML 5, DHTML, Python,
                        Perl, PHP, CSS, XML, XSL, C, C++, COBOL
                      </p>
                      <p className="fs-20">
                        {" "}
                        <b className="fs-20 b-color">Middleware: </b>IBM Middleware Stack (MQ, MB, WTX, DataPower),
                        JBoss, Oracle Fusion Middleware
                      </p>
                      <p className="fs-20">
                        <b className="fs-20 b-color">JavaScript Library/Framework: </b>jQuery, JSON, Ext.JS,
                        Knockout.js, Bootstrap.js, Backbone.js{" "}
                      </p>
                      <p className="fs-20 ">
                        <b className="fs-20 b-color"> Web Development Framework:</b> Spring, Struts{" "}
                      </p>
                      <p className="fs-20">
                        {" "}
                        <b className="fs-20 b-color"> Development Tools:</b> IBM RAD, Eclipse, XCode, Team Foundation
                        Server (TFS), Visual Source Safe, NetBeans, IntelliJ, Aptana Studio, Adobe Flash Builder{" "}
                      </p>
                      <p className="fs-20">
                        <b className=" fs-20 b-color"> Application & Web Server:</b> IBM WebSphere, Oracle Weblogic,
                        Apache Tomcat, Jboss{" "}
                      </p>
                      <p className="fs-20">
                        {" "}
                        <b className="fs-20 b-color">Build Tools:</b> Openmake, IBM Build Forge, MSBuild, ANT, Maven,
                        Nexus repository, Lunt, Hudson, Jenkins.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <li className="mt-3 fs-20">IBM Lombardi, Pega BPM, K2, Appian, Nintex </li>
                      <li className=" mt-3 fs-20"> IBM iLog JRules, FICO Blaze Advisor, Pega Business Rules Engine.</li>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p className="mt-2 fs-20">
                        <b className="fs-20 b-color"> Android:</b> Android SDK, Android API, ADT, Emulator, SQLite,
                        Eclipse, RESTful web services, MVC JavaScript{" "}
                      </p>
                      <p className="fs-20">
                        <b className="fs-20 b-color"> iOS:</b> iOS SDK, Objective-C, Xcode, Objective-C, Cocoa Touch,
                        RESTful web services, MVC JavaScript, SQLite, UIKit{" "}
                      </p>
                      <p className="fs-20">
                        {" "}
                        <b className="fs-20 b-color"> Development Tools /Framework:</b> Sencha Touch, jQTouch, jQMobile,
                        PhoneGap, Xcode, Cocoa Touch, Xcode, Android Studio.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
        <div class="row feture-tabs" data-aos="fade-up">
          <div class="col-lg-6  ">
            <img src={require("../HomePage/technology-focused.png")} className="img-fluid tab-tech-img" alt="" />
          </div>
          <div class="col-lg-6">
            <Tab.Container id="left-tabs-example" defaultActiveKey="cloud">
              <Row>
                <Nav className="flex-row tab_row pe-0 width-20% features nav-pills ">
                  <Col className="text-center" xs={4} sm={3} md={4} lg={4}>
                    <Nav.Item>
                      <Nav.Link eventKey="cloud">
                        <div className="d-flex justify-content-center align-items-center">
                          {/* <FaCloud className="fs-20" />  */}
                          <p className="ms-3 fs-20 mb-0">Cloud</p>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col className="text-center" xs={4} sm={3} md={4} lg={4}>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        {" "}
                        <div className="px-1 d-flex justify-content-center align-items-center">
                          {/* <FaShoppingCart className="fs-20" />  */}
                          <p className="fs-20 mb-0 ">Ecommerce</p>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col className="text-center" xs={4} sm={3} md={4} lg={4}>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        {" "}
                        <div className="d-flex justify-content-center align-items-center">
                          {/* <FaDatabase className="fs-20" />  */}
                          <p className="fs-20 mb-0 no-wrap ">Big Data</p>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="cloud">
                    <p className="mt-2">
                      {" "}
                      <p className="fs-20">
                        <b className="fs-20 b-color"> Infrastructure as a service (IaaS):</b> VMWare, Microsoft Hyper V
                        & Openstack
                      </p>
                      <p className="fs-20">
                        {" "}
                        <b className="fs-20 b-color"> Platform as a service (PaaS):</b> Amazon Web Service ( AWS ),
                        Microsoft Azure, Google App Engine, IBM SmartCloud, Rackspace, Openstack
                      </p>
                      <p className="fs-20">
                        <b className="fs-20 b-color"> Software as a service (SaaS):</b> Salesforce
                      </p>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <li className="mt-2 fs-20">Oracle ATG Commerce</li>
                    <li className="mt-2 fs-20"> IBM WebSphere Commerce </li>
                    <li className="mt-2 fs-20">SAP Hybris</li>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <li className="mt-3 fs-20">MongoDB</li>
                    <li className="mt-2 fs-20"> Apache Hadoop</li>
                    <li className="mt-2 fs-20">TOGAF Zachman</li>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </Container>
      <Sitemap />
    </div>
  );
}
export default Staffing;
