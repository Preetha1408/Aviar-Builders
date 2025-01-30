import { useState, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../css/builders/RemodelProjects.scss";
import COUNTRY from "../../Images/Remodelprojects/COUNTRY CLUB.jpg";
import MONROE from "../../Images/Remodelprojects/MONROE.jpg";
import NORTHCREST from "../../Images/Remodelprojects/NORTHCREST.jpg";

function Remodelprojects() {
  return (
    <div>
      <div className="text-center">
        <section className="contain my-1">
          <div className="heading">
            <h1>Remodel Projects</h1>
          </div>
        </section>
      </div>

      <section className="maindiv page-background pt-3 flex-column">
        <div className="text-center font pt-2 pb-4">
          We've helped dozens of families in the area transform their house into
          the home of their dreams. Check out some of our most recent remodel
          projects in the albums below
        </div>
        <div className="container ">
        <Row className="w-100 res-row">
          <Col className="w-100">
            <div className="profile-card">
              <img src={COUNTRY} alt="" />
              <div className="profile-card-text p-3">
                <div className="crd-text">COUNTRY</div>
              </div>
            </div>
          </Col>
          <Col className="w-100">
            <div className="profile-card">
              <img src={MONROE} />
              <div className="profile-card-text p-3">
                <div className="crd-text">MONROE</div>
              </div>
            </div>
          </Col>
          <Col className="w-100">
            <div className="profile-card">
              <img src={NORTHCREST} alt="" />
              <div className="profile-card-text p-3">
                <div className="crd-text">NORTHCREST</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="w-100 res-row pt-4">
          <Col className="w-100">
            <div className="profile-card">
              <img src={NORTHCREST} alt="" />
              <div className="profile-card-text p-3">
                <div className="crd-text">NORTHCREST</div>
              </div>
            </div>
          </Col>
          <Col className="w-100">
            <div className="profile-card">
              <img src={COUNTRY} alt="" />
              <div className="profile-card-text p-3">
                <div className="crd-text">COUNTRY</div>
              </div>
            </div>
          </Col>
          <Col className="w-100">
            <div className="profile-card">
              <img src={MONROE} />
              <div className="profile-card-text p-3">
                <div className="crd-text">MONROE</div>
              </div>
            </div>
          </Col>
        </Row>
        </div>
      </section>
    </div>
  );
}

export default Remodelprojects;
