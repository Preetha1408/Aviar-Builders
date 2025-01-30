import React from "react";
import { Container } from "react-bootstrap";
import "../../../css/builders/ComersialConstruction.scss"
function CommercialConstruction() {
  return (
    <div className="construction">
      <section className="contain my-1">
        <div className="common-header p-3">
          <h4 >COMMERCIAL CONSTRUCTION </h4></div>
      </section>
      <div className="custom-construction-bg pt-3">
        <div  className="maindiv">
          <p className="textalign">
            We are your source for light one-story commercial construction. Our team can help design your plan, insure
            compliance with required specifications, and will always build to code. Allow us to work with your engineer
            and architect; we provide turn-key construction for immediate occupation. AVIAR also offers the opportunity
            to build to suite with long-term lease options available.
          </p>
        </div>
        <div>
          <h4 className="maindiv">Reviewed</h4>
        </div>
        <div className="maindiv">
          <p className="textalign">
            AVIAR Homes was chosen to do my commercial project because I trusted them to do a good job. I had
            limited time to personally invest and needed a contractor who could and would take care of everything. The
            job was completed ahead of schedule and in budget. Communication was ideal throughout the project. Quality
            is better than expected. There were no issues that needed my involvement. They were awesome at working with
            the city and the building inspectors. I am now receiving unsolicited compliments from tenants and visitors
            who are very impressed with the work that was done. I highly recommend that you consider AVIAR Homes for
            your next project.
            <br />
            <b> - Geiser Consultants (Feb 2017)</b>
          </p>
        </div>
        <div className="maindiv">
          <p className="textalign">
            AVIAR Homes built my second studio location with a very tight timeline and budget. (I own The Next Step
            Dance Studio). They listened to what I needed in the dance space and took time to understand the project -
            what was top priority and necessary to accomplish. AVIAR's staff is personable, kind and generous. They
            communicate better than ANY other contractor I've hired. They will keep you up-to-date on what is happening
            on your project. If problems arise (as with any construction), they work tirelessly to find a solution.
            AVIAR's team is trustworthy and that's the first quality I look for when hiring. You really don't need to
            interview any other builder.
            <br />
            <b>- Polly Schill (May 2017)</b>
          </p>
        </div>
        <div className="maindiv">
          <p className="textalign">
            The AVIAR Team helped us renovate a tired residential home into a charming State Farm Agency office. Lynda
            and Bob took our dream and made it a reality while meeting every deadline and budget! They made a top to
            bottom renovation of the interior and exterior of our building feel easy! The AVIAR Team treated us like
            family and we won't ever consider another project without them!!
            <br />
            <b>- Larry Nolan State Farm Agent (Sept 2016)</b>
          </p>
        </div>
        <hr />
        <div>
          <p className="maindiv">Geiser Consultants - 816 S Eldorado, Suite 6, Bloomington</p>

          <p className="maindiv">Larry Nolan State Farm Insurance - 708 Peoria St, Washington</p>

          <p className="maindiv">Associates in Dermatology - 1404 Eastland Dr, Suite 204, Bloomington</p>

          <p className="maindiv">Next Step Dance Studio - 2601 GE Road, Suite 3, Bloomington</p>
        </div>
        <div>
          <Container>
            <div className="row">
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/dual entry.jpeg")} alt="" className="border" />
              </div>
              <div className="col-lg-4 mt-4">
                <img src={require("../../Images/Services/kitchen.jpeg")} alt="" className="border" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default CommercialConstruction;
