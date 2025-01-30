import React, { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import "../../../css/builders/ForSale.scss";
import Norfolk from "../../Images/Norfolk.jpg";
import Norfolk2 from "../../Images/Norfolk2.jpg";
import Custom from "../../Images/Custom.jpg";
import property3 from "../../Images/ForSale/property3.jpg";
import profile5 from "../../Images/ForSale/5.JPG";
import profile6 from "../../Images/ForSale/6.JPG";
import profile7 from "../../Images/ForSale/7.JPG";
import profile9 from "../../Images/ForSale/9.JPG";
export default function LotsForSale() {
    // const [activeTab, setActiveTab] = useState("home");

    // const handleTabSelect = (tabKey) => {
    //   setActiveTab(tabKey);
    // };
  return (
    <div className="text-center">
      <section className="contain my-1">
        <div className="common-header p-3">
          <h4>LOTS FOR SALES</h4></div>
      </section>
      <section className="page-background pt-3 flex-column">
        <div className="container">
          <Tabs defaultActiveKey="home" transition={false} className=" tab-font mb-4 d-flex justify-content-center">
            <Tab eventKey="home" title="All Areas">
              <div className="presentation w-100">
                <div>
                  <Row className="w-100 res-row">
                    <Col className="d-flex justify-content-between">
                      <div className="profile-card">
                        <img src={Norfolk} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={Norfolk2} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={Custom} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={property3} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile9} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile6} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Mahomet">
              <div className="presentation">
                <div className="container">
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile7} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile9} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={Norfolk} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={Norfolk2} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={Custom} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={property3} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Normal">
              <div className="presentation">
                <div className="container">
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile5} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile6} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile7} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="w-100 res-row">
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={profile9} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={Norfolk} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                    <Col className="w-100">
                      <div className="profile-card">
                        <img src={Custom} alt="" />
                        <div className="profile-card-text p-3">
                          <div className="crd-text">BLOOMINGTON</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
