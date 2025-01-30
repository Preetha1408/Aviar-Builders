import React, { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import "../../../css/builders/ForSale.scss";
import profile1 from "../../Images/ForSale/1.JPG";
import profile2 from "../../Images/ForSale/2.JPG";
import profile3 from "../../Images/ForSale/3.JPG";
import profile4 from "../../Images/ForSale/4.JPG";
import profile5 from "../../Images/ForSale/5.JPG";
import profile6 from "../../Images/ForSale/6.JPG";
import profile7 from "../../Images/ForSale/7.JPG";
import profile8 from "../../Images/ForSale/8.JPG";
import { FaDollarSign, FaBed, FaCar } from "react-icons/fa";
import { CiLineHeight } from "react-icons/ci";

export default function HomeForSales() {
  // const [activeTab, setActiveTab] = useState("home");

  // const handleTabSelect = (tabKey) => {
  //   setActiveTab(tabKey);
  // };

  return (
    <div className="text-center">
      <section className="contain my-1">
        <div className="common-header p-3">
          <h4>HOME FOR SALES</h4></div>
      </section>
      <section className="page-background pt-3 flex-column">
        <div className="container">
          <Tabs defaultActiveKey="home" transition={false} className=" tab-font mb-4 d-flex justify-content-center">
            <Tab eventKey="home" title="All Areas">
              <Row className="w-100 res-row">
                <Col>
                  <div className="profile-card">
                    <img src={profile1} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile2} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile3} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="w-100 res-row">
                <Col>
                  <div className="profile-card">
                    <img src={profile4} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile5} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile6} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Mahomet">
              <Row className="w-100 res-row">
                <Col>
                  <div className="profile-card">
                    <img src={profile7} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile8} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile1} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="w-100 res-row">
                <Col>
                  <div className="profile-card">
                    <img src={profile2} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile3} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile4} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="longer-tab" title="Normal">
              <Row className="w-100 res-row">
                <Col>
                  <div className="profile-card">
                    <img src={profile5} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile6} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile7} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="w-100 res-row">
                <Col>
                  <div className="profile-card">
                    <img src={profile8} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile1} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="profile-card">
                    <img src={profile3} alt="" />
                    <div className="profile-card-text p-3">
                      <div className="crd-text">
                        <FaDollarSign color="#0D6EFD" /> 342
                        <br /> <FaBed color="chocolate" /> 4 bed room
                        <br /> <FaBed color="chocolate" /> 3 bed room <br />
                        <FaCar color="purple" /> 2 car
                        <br />
                        <CiLineHeight color="black" /> 2500 sqft
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
