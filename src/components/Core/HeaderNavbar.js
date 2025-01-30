import React, { useEffect } from "react";
import "../../css/HeaderNavbar.scss";
import Nav from "react-bootstrap/Nav";
import logo from "./logo.png";
const HeaderNavbar = () => {
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
        for (let i = 0; i < this.numPoints - 1; i++) {
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
          for (let i = 0; i < this.path.length; i++) {
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
        for (let i = 0; i < globalMenuItems.length; i++) {
          globalMenuItems[i].classList.remove("is-opened");
        }
      }
    });
  }, []);

  return (
    <div className="content content--demo-3 no-top-space">
      <header id="header" className="fixed-top header-scrolled">
        <div className="hamburger hamburger--demo-3 js-hover shadow-lg menu-media">
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
        <div className="global-menu mt-4">
          <div className="global-menu__wrap mt-2">
            {/* <div className="row">
              <div className="global-menu__item  global-logo col-lg-4 col-md-4" href="#">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <div className="col-lg-4 col-md-4">
                <a className="global-menu__item" href="/home-page">
                  Home
                </a>
                <a className="global-menu__item" href="consulting-solutions">
                  Consulting Services
                </a>
                <a className="global-menu__item" href="/staffing-solutions">
                  Staffing Solution
                </a>
                <a className="global-menu__item" href="/geographical-information-services">
                  Geographical Information Services (GIS)
                </a>
                <a className="global-menu__item" href="/careers">
                  Careers
                </a>
                <a className="global-menu__item" href="/Events">
                  Events
                </a>
                <a className="global-menu__item" href="/we-serve-our-local-community">
                  We serve our local community
                </a>
              </div>
            </div> */}
            <nav id="navbar" className="navbar-mobile global-menu__item">
              {" "}
              <ul className="mb-0">
                <div className="row " style={{ marginTop: "12%", marginLeft: "5%" }}>
                  <div
                    className="col-lg-4 col-md-4 logo-media ms-5"
                    style={{ marginLeft: "23%", marginTop: "7%", marginBottom: "0%" }}
                  >
                    <img src={logo} alt="logo" className="img-fluid" style={{ marginLeft: "23%" }} />
                  </div>
                  <div className="col-lg-4 col-md-4 media-menu-option " style={{ marginLeft: "13%" }}>
                    <li className="dropdown Dot-Remove">
                      <Nav.Link href="/home">
                        <span className="font-weight fs-25 menu-text">Home</span>
                      </Nav.Link>
                    </li>
                    <li className="dropdown Dot-Remove">
                      {/* <Nav.Link>
                      <span xs={6} className="font-weight fs-16">
                        SERVICES
                      </span>{" "}
                      <FiChevronDown className="bi bi-chevron-down ms-2 mt-1" />
                    </Nav.Link> */}
                      {/* <ul className="dropdown-active shadow-lg"> */}
                      <li className="dropdown">
                        <Nav.Link href="/ats/consulting-solutions">
                          <span className="font-weight fs-25 menu-text ">Consulting Services</span>
                        </Nav.Link>
                      </li>
                      <li className="dropdown">
                        <Nav.Link href="/ats/staffing-solutions">
                          <span className="font-weight fs-25  menu-text">Staffing Solution</span>
                        </Nav.Link>
                      </li>
                      <li className="dropdown">
                        <Nav.Link href="/ats/geographical-information-services">
                          <span className="font-weight fs-25 menu-text">Geographical Information Services (GIS)</span>
                        </Nav.Link>
                      </li>
                      {/* </ul> */}
                    </li>
                    <li className="dropdown Dot-Remove">
                      <Nav.Link href="/ats/careers">
                        <span className="font-weight fs-25 menu-text">Careers</span>
                      </Nav.Link>
                    </li>
                    <li className="dropdown Dot-Remove">
                      <Nav.Link href="/ats/Events">
                        <span className="font-weight fs-25 menu-text">Events</span>
                      </Nav.Link>
                    </li>
                    <li className="dropdown Dot-Remove">
                      <Nav.Link href="/ats/we-serve-our-local-community">
                        <span className="font-weight fs-25 menu-text">We serve our local community</span>
                      </Nav.Link>
                    </li>
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
  );
};

export default HeaderNavbar;
