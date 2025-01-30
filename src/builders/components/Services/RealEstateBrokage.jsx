import React from "react";

function RealEstateBrokarage() {
  return (
    <div className="Construction">
      <div className="switch custom-bg">
        <h1 className="commercial-title">REAL ESTATE BROKARAGE</h1>
      </div>
      <div className="custom-construction-bg pt-5">
        <div>
          <p>
            Bob is a fully licensed broker who can provide all of your listing and buying service needs . As a part of
            the RE/MAX professional team, his network of real estate peers and advertising prowess is unmatched. Bob
            will consult you on your preparation for market and guide you to a safe and through purchase. With nearly 25
            years of experience he can get the job done start to finish.
          </p>
        </div>
        <div className="d-flex">
          <img src={require("../../Images/Services/bob-framing-hand-in-pocket.jpeg")} alt="" className="app" />
          <div className="real col  ms-3 mt-3 ">
            <div>
              <p>
                Email:<b className="custom-color">builders@remax.net</b>
              </p>
              <p>
                Remax:<b className="custom-color">builders@remaxagent.com</b>
              </p>
              <p>
                Facebook:<b className="custom-color">facebook.com/remax</b>
              </p>
            </div>
            <div className="pt-4">
              <img src={require("../../Images/Services/remax.jpeg")} alt="" />
            </div>
          </div>
        </div>
        <div className="real-style">
          <img src={require("../../Images/Services/remax.jpeg")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RealEstateBrokarage;
