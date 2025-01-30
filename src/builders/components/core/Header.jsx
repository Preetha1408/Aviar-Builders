import React, { useEffect, useRef, useState } from "react";
import "../../../css/builders/Header.scss";
import Nav from "react-bootstrap/Nav";
import logo from "../../Images/Core/AVIAR_Builders_LLC_Logo-removebg-preview.png";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import Loader from "../core/loader";

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 15;

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    transition: 'background-color 0.3s ease',
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && lastScrollTop > 0) {
        // downscroll code
        document.querySelector('header').style.top = '-100px';
      } else {
        // upscroll code
        document.querySelector('header').style.top = '0px';
      }

      setLastScrollTop(st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const HomePage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setLastScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const ease = {
      exponentialIn: (t) => {
        return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
      },
      exponentialOut: (t) => {
        return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
      },
      exponentialInOut: (t) => {
        return t === 0.0 || t === 1.0
          ? t
          : t < 0.5
          ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
          : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
      },
      sineOut: (t) => {
        const HALF_PI = 1.5707963267948966;
        return Math.sin(t * HALF_PI);
      },
      circularInOut: (t) => {
        return t < 0.5
          ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
          : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
      },
      cubicIn: (t) => {
        return t * t * t;
      },
      cubicOut: (t) => {
        const f = t - 1.0;
        return f * f * f + 1.0;
      },
      cubicInOut: (t) => {
        return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
      },
      quadraticOut: (t) => {
        return -t * (t - 2.0);
      },
      quarticOut: (t) => {
        return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
      },
    };

    class ShapeOverlays {
      constructor(elm) {
        this.elm = elm;
        this.path = elm.querySelectorAll("path");
        this.numPoints = 2;
        this.duration = 600;
        this.delayPointsArray = [];
        this.delayPointsMax = 0;
        this.delayPerPath = 200;
        this.timeStart = Date.now();
        this.isOpened = false;
        this.isAnimating = false;
      }
      toggle() {
        this.isAnimating = true;
        for (var i = 0; i < this.numPoints; i++) {
          this.delayPointsArray[i] = 0;
        }
        if (this.isOpened === false) {
          this.open();
        } else {
          this.close();
        }
      }
      open() {
        this.isOpened = true;
        this.elm.classList.add("is-opened");
        this.timeStart = Date.now();
        this.renderLoop();
      }
      close() {
        this.isOpened = false;
        this.elm.classList.remove("is-opened");
        this.timeStart = Date.now();
        this.renderLoop();
      }
      updatePath(time) {
        const points = [];
        for (var i = 0; i < this.numPoints; i++) {
          const thisEase = this.isOpened
            ? i === 1
              ? ease.cubicOut
              : ease.cubicInOut
            : i === 1
            ? ease.cubicInOut
            : ease.cubicOut;
          points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100;
        }

        let str = "";
        str += this.isOpened ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
        for (var i = 0; i < this.numPoints - 1; i++) {
          const p = ((i + 1) / (this.numPoints - 1)) * 100;
          const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
          str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
        }
        str += this.isOpened ? `V 0 H 0` : `V 100 H 0`;
        return str;
      }
      render() {
        if (this.isOpened) {
          for (var i = 0; i < this.path.length; i++) {
            this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
          }
        } else {
          for (var i = 0; i < this.path.length; i++) {
            this.path[i].setAttribute(
              "d",
              this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1)))
            );
          }
        }
      }
      renderLoop() {
        this.render();
        if (
          Date.now() - this.timeStart <
          this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax
        ) {
          requestAnimationFrame(() => {
            this.renderLoop();
          });
        } else {
          this.isAnimating = false;
        }
      }
    }

    const Navigation = document.querySelector(".content--demo-3");
    const hamburger = Navigation.querySelector(".hamburger");
    const globalMenuItems = Navigation.querySelectorAll(".global-menu__item");
    const shapeOverlay = Navigation.querySelector(".shape-overlays");
    const overlay = new ShapeOverlays(shapeOverlay);

    hamburger.addEventListener("click", () => {
      if (overlay.isAnimating) {
        return false;
      }
      overlay.toggle();
      if (overlay.isOpened === true) {
        hamburger.classList.add("is-opened-navi");
        for (var i = 0; i < globalMenuItems.length; i++) {
          globalMenuItems[i].classList.add("is-opened");
        }
      } else {
        hamburger.classList.remove("is-opened-navi");
        for (var i = 0; i < globalMenuItems.length; i++) {
          globalMenuItems[i].classList.remove("is-opened");
        }
      }
    });
  }, []);

  return (
    <header style={headerStyle}>
    <div className="content content--demo-3 no-top-space">
      <header id="header" className={"fixed-top header-scrolled"}>
        <div className="row">
          <div className="hamburger hamburger--demo-3 js-hover shadow-lg menu-media col-lg-4 align-self-start">
            <div className="hamburger__line hamburger__line--01">
              <div className="hamburger__line-in hamburger__line-in--01"></div>
            </div>
            <div className="hamburger__line hamburger__line--02">
              <div className="hamburger__line-in hamburger__line-in--02"></div>
            </div>
            <div className="hamburger__line hamburger__line--03">
              <div className="hamburger__line-in hamburger__line-in--03"></div>
            </div>
            <div className="hamburger__line hamburger__line--cross01">
              <div className="hamburger__line-in hamburger__line-in--cross01"></div>
            </div>
            <div className="hamburger__line hamburger__line--cross02">
              <div className="hamburger__line-in hamburger__line-in--cross02"></div>
            </div>
          </div>
          <div>
            {/* <img onClick={HomePage} src={logo} alt="logo" style={{cursor: "pointer" }} className="" /> */}
            <div onClick={HomePage} className="header-logo" style={{cursor: "pointer" }}></div>
            {isLoading && (
              <div>
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="global-menu mt-5">
          <div className="global-menu__wrap mt-2">
            <nav id="navbar" className="navbar-mobile global-menu__item">
              <ul className="mb-0">
                <div className="row " style={{ marginTop: "10%", marginLeft: "5%" }}>
                  <div
                    className="col-lg-4 col-md-4 logo-media ms-5"
                    style={{ marginLeft: "23%", marginTop: "7%", marginBottom: "0%" }}
                  >
                    <img src={logo} alt="logo" className="img-fluid" style={{ marginLeft: "23%"}} />
                  </div>
                  <div className="col-lg-4 col-md-4 media-menu-option" style={{ marginLeft: "13%", display: "block" }}>
                    <div className="scrolling-menu">
                      <li className="dropdown Dot-Remove">
                        <Nav.Link href="/">
                          <span className="font-weight fs-25 menu-text">HOME</span>
                        </Nav.Link>
                      </li>
                      <li className="dropdown Dot-Remove">
                        <Accordion className="accordion-style" defaultActiveKey="">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <li className="dropdown">
                                <span className="font-weight menu-text fs-25 accodrion-header">ABOUT US</span>
                              </li>
                            </Accordion.Header>
                            <Accordion.Body>
                              <li className="dropdown Dot-Remove">
                                <Nav.Link href="/abs/aboutus/areasserved">
                                  <span className="font-weight fs-25 menu-text">AREAS SERVED</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/aboutus/about-Aviar-builders">
                                  <span className="font-weight fs-25  menu-text">ABOUT AVIAR BUILDERS</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown Dot-Remove">
                                <Nav.Link href="/abs/aboutus/buildingprocess">
                                  <span className="font-weight fs-25 menu-text">BUILDING PROCESS</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/aboutus/testimonials">
                                  <span className="font-weight fs-25  menu-text">TESTIMONIALS</span>
                                </Nav.Link>
                              </li>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="" className="accordion-style">
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <li className="dropdown">
                                <span className="font-weight fs-25 accodrion-header menu-text">FOR SALE</span>
                              </li>
                            </Accordion.Header>
                            <Accordion.Body>
                              <li className="dropdown">
                                <Nav.Link href="/abs/forsale/homes-for-sale">
                                  <span className="font-weight fs-25  menu-text">HOMES FOR SALE</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/forsale/lots-for-sale">
                                  <span className="font-weight fs-25  menu-text">LOTS FOR SALE</span>
                                </Nav.Link>
                              </li>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <li className="dropdown Dot-Remove">
                          <Nav.Link href="/abs/floorplans">
                            <span className="font-weight fs-25 menu-text">FLOOR PLANS</span>
                          </Nav.Link>
                        </li>
                        <Accordion defaultActiveKey="" className="accordion-style">
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>
                              <li className="dropdown">
                                <span className="font-weight fs-25 accodrion-header menu-text">SERVICES</span>
                              </li>
                            </Accordion.Header>
                            <Accordion.Body>
                              <li className="dropdown">
                                <Nav.Link href="/abs/services/customconstruction">
                                  <span className="font-weight fs-25  menu-text">CUSTOM CONSTRUCTION</span>
                                </Nav.Link>
                              </li>
                              {/* <li className="dropdown">
                                <Nav.Link href="/services/remodellingservices">
                                  <span className="font-weight fs-25  menu-text">REMODELING SERVICES</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/services/realestatebrokage">
                                  <span className="font-weight fs-25  menu-text">REAL ESTATE BROKERAGE</span>
                                </Nav.Link>
                              </li> */}
                              <li className="dropdown">
                                <Nav.Link href="/abs/services/comersialconstruction">
                                  <span className="font-weight fs-25  menu-text">COMMERCIAL CONSTRUCTION</span>
                                </Nav.Link>
                              </li>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="" className="accordion-style">
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <li className="dropdown">
                                <span className="font-weight fs-25 accodrion-header menu-text">PHOTO GALLERY</span>
                              </li>
                            </Accordion.Header>
                            <Accordion.Body>
                              <li className="dropdown">
                                <Nav.Link href="/abs/photogallery/ourhomes">
                                  <span className="font-weight fs-25  menu-text">OUR HOMES</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/photogallery/inspirationalgallery">
                                  <span className="font-weight fs-25  menu-text">INSPIRATION GALLERY</span>
                                </Nav.Link>
                              </li>
                              {/* <li className="dropdown">
                                <Nav.Link href="/photogallery/RemoteProjects">
                                  <span className="font-weight fs-25  menu-text">REMODEL PROJECTS</span>
                                </Nav.Link>
                              </li> */}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey="" className="accordion-style">
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <li className="dropdown">
                                <span className="font-weight fs-25  accodrion-header menu-text ">RESOURCES</span>
                              </li>
                            </Accordion.Header>
                            <Accordion.Body>
                              <li className="dropdown">
                                <Nav.Link href="/abs/resources/frequentlyaskedquestions">
                                  <span className="font-weight fs-25  menu-text">FREQUENTLY ASKED QUESTIONS</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/resources/builderstrend">
                                  <span className="font-weight fs-25  menu-text">BUILDERS TREND</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/resources/subdivisions">
                                  <span className="font-weight fs-25  menu-text">SUBDIVISIONS</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/resources/communityLinks">
                                  <span className="font-weight fs-25  menu-text">COMMUNITY LINKS</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/resources/reecomenmdedpartners">
                                  <span className="font-weight fs-25  menu-text">RECOMMENDED PARTNERS</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/resources/warantyinformation">
                                  <span className="font-weight fs-25  menu-text">WARRANTY INFORMATION</span>
                                </Nav.Link>
                              </li>
                              <li className="dropdown">
                                <Nav.Link href="/abs/resources/servicerequestform">
                                  <span className="font-weight fs-25  menu-text">SERVICE REQUEST FORM</span>
                                </Nav.Link>
                              </li>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        {/* <li className="dropdown">
                          <Nav.Link href="/homePage/integrity">
                            <span className="font-weight fs-25 menu-text">INTEGRITY</span>
                          </Nav.Link>
                        </li> */}
                        {/* </ul> */}
                        <li className="dropdown">
                          <Nav.Link href="/abs/Contact">
                            <span className="font-weight fs-25 menu-text ">CONTACT US</span>
                          </Nav.Link>
                        </li>
                      </li>
                      {/* <li className="dropdown Dot-Remove">
                        <Nav.Link href="/ourwebsites">
                          <span className="font-weight fs-25 menu-text">OUR WEBSITES</span>
                        </Nav.Link>
                      </li> */}
                    </div>
                  </div>
                </div>
              </ul>
            </nav>
          </div>
        </div>

        <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path className="shape-overlays__path"></path>
          <path className="shape-overlays__path"></path>
          <path className="shape-overlays__path"></path>
        </svg>
      </header>
    </div>
    </header>
  );
};

export default Header;