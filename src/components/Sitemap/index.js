import React from "react";
import { FaFacebookSquare, FaTwitter, FaLinkedinIn, FaPeopleCarry } from "react-icons/fa";
import {  AiOutlineHome } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
import { MdPeopleAlt, MdComputer, MdAccountTree } from "react-icons/md";
import "../../css/Sitemap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
function Sitemap() {
  return (
    <footer id="footer">
      <div className="col-lg-20">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-6 footer-links">
                <h4 className="fs-20">Useful Links</h4>
                <ul className="menu-bg">
                  <li>
                    <i className="">
                      <AiOutlineHome className="mb-1 f-x-l" />
                    </i>
                    <a className="fs-18 ms-2" href="/ats/home-page">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right">
                      <FaPeopleCarry className="mb-1 f-x-l" />
                    </i>
                    <a className="fs-18 ms-2" href="/ats/careers">
                      Careers
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right">
                      <MdPeopleAlt className="mb-1 f-x-l" />
                    </i>
                    <a className="fs-18 ms-2" href="/ats/we-serve-our-local-community">
                      We Serve Our Community
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-6 footer-links">
                <h4 className="fs-20">Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right">
                      <FontAwesomeIcon className="mb-1 me-1 f-x-l" icon={faIdBadge} />
                    </i>
                    <a className="fs-18 ms-2" href="/ats/consulting-solutions">
                      Consulting Services
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right">
                      <MdComputer className="mb-1 me-1 f-x-l" />
                    </i>
                    <a className="fs-18 ms-2" href="/ats/staffing-solutions">
                      Staffing Solution
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right">
                      <MdAccountTree className="mb-1 me-1 f-x-l" />
                    </i>
                    <a className="fs-18 ms-2" href="/ats/geographical-information-services">
                      Geographical Information Services(GIS)
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-4 col-md-5 col-sm-6 footer-contact footer-media">
                <div className="row">
                  <h4 className="fs-20">Contact Us </h4>
                  <div className="col-md-8 col-sm-6 contact-media">
                    <h6 className="fs-20">
                      {" "}
                      <img src={require("../Images/usa-gc4b2b71c6_640.jpg")} className="flag me-2 mb-2" alt="" />
                      USA
                    </h6>
                    <p className="fs-18 no-wrap">
                      2103 Eastland Dr <br />
                      Suite A<br />
                      {/* New York, NY 535022 */}
                      Bloomington, IL 61704
                      <br />
                      United States
                      <br />
                    </p>
                    <br />
                  </div>
                  <div className="col-md-8 col-sm-6 contact-media">
                    <h6 className="fs-20">
                      <img
                        src={require("../Images/indian-flag-g20510b86a_640.png")}
                        className="flag-india me-2 mb-2"
                        alt=""
                      />
                      India{" "}
                    </h6>
                    <p className="fs-18 no-wrap">
                      AVIAR Technology Services,
                      <br /> 565, Vivekanadar Street,
                      <br /> Nehru Nagar, Vengikkal,
                      <br /> Tiruvannamalai, 606604, 2103
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="col-lg-12 footer-links">
                {/* <h4 className="fs-20"> Our Social Networks</h4> */}
                {/* <p style={{ fontSize: "small" }}>
                “STATE OF ILLINOIS COMMUNITY REINVESTMENT NOTICE The Department of Financial and Professional Regulation
                (Department) evaluates our performance in meeting the financial services needs of this community,
                including the needs of low-income to moderate-income households. The Department takes this evaluation
                into account when deciding on certain applications submitted by us for approval by the Department. Your
                involvement is encouraged. You may obtain a copy of our evaluation once the Department completes our
                first evaluation. You may also submit signed, written comments about our performance in meeting
                community financial services needs to the Department. We will update this notice when our first
                evaluation has been issued.”
              </p> */}
                <div className=" d-flex c-end social-links">
                  <a href="https://twitter.com/AVIARTech" className="twitter" target="_blank" title="twitter">
                    <FaTwitter className="f-i-h" color="#fff" />
                  </a>
                  <a
                    href="https://www.facebook.com/AVIAR-Technology-Services-116521733596435/"
                    className="facebook ms-1"
                    target="_blank"
                    title="facebook"
                  >
                    <FaFacebookSquare className="f-i-h" color="#fff" />
                  </a>
                  {/* <a href="#" className="instagram ms-1">
                    <AiFillInstagram className="f-i-h" color="#fff" />
                  </a> */}
                  <a href="https://join.skype.com/sXEZmMvMbZ3W" className="google-plus ms-1" title="skype">
                    <BsSkype className="f-i-h" color="#fff" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/aviar-technology-services/about/"
                    target="_blank"
                    className="linkedin ms-1"
                    title="linked in"
                  >
                    <FaLinkedinIn className="f-i-h" color="#fff" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container center-content footer-bottom clearfix">
          <div className="copyright fs-18 ">
            &copy; Copyright
            <strong>
              <span className="fs-18"> 2020 By AVIAR Technology Services</span>
            </strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Sitemap;
