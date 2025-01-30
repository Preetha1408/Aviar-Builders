import React from "react";
import "../../../css/builders/AboutUs.scss"

function BuildersTrend() {
  return (
    <div className="text-center">
      <section className="contain my-1">
        <div className="common-header p-3">
          <h4>BUILDERS TREND</h4></div>
      </section>
      <section className="page-background p-3 my-1">
        
        <div className="container">
          <p className="d-flex justify-content-center">
            BuilderTREND is an amazing tool that allows the client to be kept up-to-date on the status of their home
            throughout the building process. Calendars, pictures, and to-do lists are some of the many benefits. This is
            one way that AVIAR Homes provides the best customer service.
          </p>
          <hr />
          <div className="text-center">
              <p>Use the form below to log into your BuilderTREND account.</p>
            </div>
          <div className="d-flex justify-content-center row">
            
            <div className="col-lg-6 col-md-6">
              <p className="builder-tren-img">
                <img
                  src={require("../../Images/Core/BuilderTrend-Info.jpg")}
                  className="d-flex justify-content-center img-fluid mt-2 ms-2 mb-3"
                  alt=""
                />
              </p>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuildersTrend;
