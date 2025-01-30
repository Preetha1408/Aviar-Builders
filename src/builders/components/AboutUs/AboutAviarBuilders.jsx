import { React, useState } from "react";
// import "../../CSS/AboutUs.scss";
import "../../../css/builders/AboutUs.scss"
import image from "../../Images/AboutUs/photo.jpg";
import profile1 from "../../Images/Team/team-1.jpg";
import profile2 from "../../Images/Team/team-2.jpg";
import profile3 from "../../Images//Team/team-3.jpg";
import profile4 from "../../Images//Team/team-4.jpg";

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

export default function AboutAVIARBuilders() {
  const [showIcons, setShowIcons] = useState(false);

  const handleMouseEnter = () => {
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
  };
  return (
    <div className="text-center">
      <section className="contain my-1">
        <div className="common-header p-3">
         <h4> ABOUT AVIAR BUILDERS</h4>
          </div>
      </section>
      <section className="maindiv page-background pt-3 flex-column w-100">
        <div className="container text-center">
          <Row className="d-flex justify-content-center w-100">
            <Col md={8} lg={8}>
              <p>
                AVIAR Builders is lead by vijay govindarajan. Our team also includes some of the best designers and
                managers in the business. The experience and knowledge our team members bring to the table have helped
                us build a reputation for building custom homes.
              </p>
            </Col>
          </Row>
          <Row className="aboutcard pt-4 mb-5">
            <Col onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="mb-2">
              <img src={image} className="img-team" alt="" />
              {/* {showIcons && ( */}
              <div className="social">
                <a href="https://twitter.com/AVIARTech" className="twitter iconfont m-2">
                  <FaTwitter />
                </a>
                <a href="https://www.facebook.com/AVIAR-Technology-Services-116521733596435/" className="facebook iconfont m-2">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/aviar_builders/" className="instagram iconfont m-2">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/aviar-technology-services" className="linkedin iconfont m-2">
                  <FaLinkedinIn />
                </a>
              </div>
              {/* )} */}
            </Col>
            <div className="abouttext">
              <h4>VIJAY GOVINDARAJAN</h4>
              <h5 className="my-0 !importantant">MANAGING DIRECTOR</h5>
              <br/>
              <b>Licensed Real Estate Broker With REMAX Choice</b>
              <br/>
              <p>
                Vijay Govindarajan oversees each custom home we build project we take on. He leads
                his team and staff to deliver competitive prices at the absolute highest quality of craftsmanship. He is
                a very hands-on builder who prides himself in openly communicating with clients, quickly solving
                challenges that come up, paying very careful attention to detail and maintaining strict control on costs
                to keep the job running on time and on budget without compromise.
              </p>
            </div>
          </Row>
          {/* <h4 className="m-5 mb-3">MEET THE AVIAR BUILDERS TEAM</h4>
          <Row className="card-group ">
            <Col className="profile-card">
              <img src={profile1} className="img-team-member" alt="" />
              <h4>Suresh</h4>
              <p>Senior Developer</p>
              <div className="social w-100">
                <a href="#" className="twitter iconfont m-2">
                  <FaTwitter />
                </a>
                <a href="#" className="facebook iconfont m-2">
                  <FaFacebook />
                </a>
                <a href="#" className="instagram iconfont m-2">
                  <FaInstagram />
                </a>
                <a href="#" className="linkedin iconfont m-2">
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>
            <Col className="profile-card">
              <img src={profile2} className="img-team-member" alt="" />
              <h4>Dinesh</h4>
              <p>Full Stack Developer</p>
              <div className="social w-100">
                <a href="#" className="twitter iconfont m-2">
                  <FaTwitter />
                </a>
                <a href="#" className="facebook iconfont m-2">
                  <FaFacebook />
                </a>
                <a href="#" className="instagram iconfont m-2">
                  <FaInstagram />
                </a>
                <a href="#" className="linkedin iconfont m-2">
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>
            <Col className="profile-card">
              <img src={profile3} className="img-team-member" alt="" />
              <h4>Poovarasan</h4>
              <p>Full Stack Developer</p>
              <div className="social w-100">
                <a href="#" className="twitter iconfont m-2">
                  <FaTwitter />
                </a>
                <a href="#" className="facebook iconfont m-2">
                  <FaFacebook />
                </a>
                <a href="#" className="instagram iconfont m-2">
                  <FaInstagram />
                </a>
                <a href="#" className="linkedin iconfont m-2">
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>
            <Col className="profile-card">
              <img src={profile4} className="img-team-member" alt="" />
              <h4>Surya</h4>
              <p>Junior Developer</p>
              <div className="social w-100">
                <a href="#" className="twitter iconfont m-2">
                  <FaTwitter />
                </a>
                <a href="#" className="facebook iconfont m-2">
                  <FaFacebook />
                </a>
                <a href="#" className="instagram iconfont m-2">
                  <FaInstagram />
                </a>
                <a href="#" className="linkedin iconfont m-2">
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>
          </Row> */}
        </div>
      </section>
    </div>
  );
}
