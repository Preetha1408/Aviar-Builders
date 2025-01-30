import React from "react";
// import "../../CSS/SiteMap.scss";
import "../../../css/builders/SiteMap.scss";
import { FaFacebookSquare, FaTwitter, FaLinkedinIn, FaCalendarDay,FaInstagram,FaPeopleCarry } from "react-icons/fa";
import { AiFillInstagram, AiOutlineHome } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
function SiteMap() {
  return (
    <footer id="footer" class="footer">
      <div class="footer-content position-relative">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-info">
                <h3>AVIAR BUILDERS</h3>
                <p className="fs-18 no-wrap">
                  2103 Eastland Dr <br />
                  Suite A<br />
                  {/* New York, NY 535022 */}
                  Bloomington, IL 61704
                  <br />
                  United States
                  <br />
                </p>
                <div class="social-links d-flex mt-3">
                  <a href="https://twitter.com/AVIARTech" class="d-flex align-items-center justify-content-center">
                    <i class="bi bi-twitter">
                      <FaTwitter className="f-i-h" color="#fff" />
                    </i>
                  </a>
                  <a href="https://www.facebook.com/AVIAR-Technology-Services-116521733596435/" class="d-flex align-items-center justify-content-center">
                    <i class="bi bi-facebook">
                      <FaFacebookSquare className="f-i-h" color="#fff" />
                    </i>
                  </a>
                  <a href="https://www.instagram.com/aviar_builders/" class="d-flex align-items-center justify-content-center">
                    <i class="bi bi-instagram"></i>
                    <FaInstagram className="f-i-h" color="#fff" />
                  </a>
                  <a href="https://www.linkedin.com/company/aviar-technology-services/" class="d-flex align-items-center justify-content-center">
                    <i class="bi bi-linkedin">
                      <FaLinkedinIn className="f-i-h" color="#fff" />
                    </i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="/abs/homepage">Home</a>
                </li>
                <li>
                  <a href="/abs/floorplans">Floor Plans</a>
                </li>
                <li>
                  <a href="/abs/aboutUs/areasserved">Areas Served</a>
                </li>
                <li>
                  <a href="/abs/aboutus/about-aviar-builders">About AVIAR Builders</a>
                </li>
                <li>
                  <a href="/abs/aboutUs/buildingprocess">Building Process</a>
                </li>

                <li>
                  <a href="/abs/aboutus/testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="/abs/Contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Services & Sale</h4>
              <ul>
                <li>
                  <a href="/abs/services/customconstruction">Custom Construction</a>
                </li>
                {/* <li>
                  <a href="/services/remodellingservices">Remodelling Services</a>
                </li>
                <li>
                  <a href="/services/realestatebrokage">RealEstate Brokerage</a>
                </li> */}
                <li className="pt-1">
                  <a href="/abs/services/comersialconstruction">Commercial Construction</a>
                </li>
                <li>
                  <a href="/abs/forsale/homes-for-sale">Homes For Sale</a>
                </li>
                <li>
                  <a href="/abs/forsale/lots-for-sale">Lots For Sale</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Photo Gallery</h4>
              <ul>
                <li>
                  <a href="/abs/photogallery/ourhomes">Our Homes</a>
                </li>
                <li>
                  <a href="/abs/photogallery/inspirationalgallery">Inspirational Gallery</a>
                </li>
                {/* <li>
                  <a href="/photogallery/remodalprojects">Remodel Projects</a>
                </li> */}
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="/abs/resources/frequentlyaskedquestions">FAQs</a>
                </li>
                <li>
                  <a href="/abs/resources/builderstrend">Builders Trend</a>
                </li>
                <li>
                  <a href="/abs/resources/subdivisions">Subdivision</a>
                </li>
                {/* <li>
                  <a href="/abs/resources/reecomenmdedpartners">Recommended Partner</a>
                </li> */}
                <li>
                  <a href="/abs/resources/communitylinks">Community Links</a>
                </li>
                <li>
                  <a href="/abs/resources/Warantyinformation">Warranty Information</a>
                </li>
                <li>
                  <a href="/abs/resources/servicerequestform">Service Request Form</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-legal text-center position-relative  ">
        <div class="container ">
          <div class="copyright mb-4 ">
            &copy; Copyright
            <strong>	&nbsp;
              <span>AVIAR Builders</span>
            </strong>	&nbsp;
             All Rights Reserved
          </div>
          <div class="credits">
            {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/ --> */}
            Designed by <a href="/abs/homepage">AVIAR Technology Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default SiteMap;
