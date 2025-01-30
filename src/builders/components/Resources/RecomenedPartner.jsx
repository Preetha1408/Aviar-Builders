import React from "react";
import "../../../css/builders/Resources.scss";
import { Container } from "react-bootstrap";

function RecomenedPartner() {
  return (
    <div className="text-center">
      <section className="contain my-1">
        <div className="common-header">RECOMMENDED PARTNERS</div>
      </section>
      <section className="resources-background p-3 my-1">
        <Container>
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-3">
              <img className="img-fluid" src={require("../../Images/Resources/Carpet-Weavers-logo.jpg")} />
              <div className="partner-name">
                <h6 style={{ fontWeight: "bold" }}>Carpet Weaver's</h6>
              </div>
              <div style={{ textAlign: "center" }}>Flooring</div>
            </div>
            <div className="col-lg-4 col-md-6 pb-3">
              <img className="img-fluid" src={require("../../Images/Resources/Carpet-Weavers-logo.jpg")} />
              <div className="partner-name">
                <h6 style={{ fontWeight: "bold" }}>Carpet Weaver's</h6>
              </div>
              <div style={{ textAlign: "center" }}>Flooring</div>
            </div>
            <div className="col-lg-4 col-md-6 pb-3">
              <img className="img-fluid" src={require("../../Images/Resources/Carpet-Weavers-logo.jpg")} />
              <div className="partner-name">
                <h6 style={{ fontWeight: "bold" }}>Carpet Weaver's</h6>
              </div>
              <div style={{ textAlign: "center" }}>Flooring</div>
            </div>
            <div className="col-lg-4 col-md-6 pb-3">
              <img className="img-fluid" src={require("../../Images/Resources/Carpet-Weavers-logo.jpg")} />
              <div className="partner-name">
                <h6 style={{ fontWeight: "bold" }}>Carpet Weaver's</h6>
              </div>
              <div style={{ textAlign: "center" }}>Flooring</div>
            </div>
            <div className="col-lg-4 col-md-6  pb-3">
              <img className="img-fluid" src={require("../../Images/Resources/Carpet-Weavers-logo.jpg")} />
              <div className="partner-name">
                <h6 style={{ fontWeight: "bold" }}>Carpet Weaver's</h6>
              </div>
              <div style={{ textAlign: "center" }}>Flooring</div>
            </div>
            <div className="col-lg-4 col-md-6 pb-3">
              <img className="img-fluid" src={require("../../Images/Resources/Carpet-Weavers-logo.jpg")} />
              <div className="partner-name">
                <h6 style={{ fontWeight: "bold" }}>Carpet Weaver's</h6>
              </div>
              <div style={{ textAlign: "center" }}>Flooring</div>
            </div>
            <div className="col-lg-4 col-md-6 pb-3">
              <img className="img-fluid" src={require("../../Images/Resources/Carpet-Weavers-logo.jpg")} />
              <div className="partner-name">
                <h6 style={{ fontWeight: "bold" }}>Carpet Weaver's</h6>
              </div>
              <div style={{ textAlign: "center" }}>Flooring</div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default RecomenedPartner;
