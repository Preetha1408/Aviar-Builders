import "../../css/Events.scss";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../Images/skp-001.JPG";
import slide2 from "../Images/skp-003.JPG";
import slide3 from "../Images/skp-002.JPG";
import slide4 from "../Images/library-donation.jpg";
import slide5 from "../Images/skp-004.JPG";
import slide6 from "../Images/skp-006.JPG";
import Sitemap from "../Sitemap";
import { useState } from "react";
function Events() {
  const [setOpenModal] = useState(false);
  return (
    <div>
      <section className="px-120">
        <div className="container">
          <div className="row gy-5">
            <div className="event-title col-12">
              <h2>check our Events photos</h2>
            </div>
            <div className="col-12">
              <div className="event-title col-12">
                <h3>SKP ENGINEERING COLLEGE ALUMNI APP LAUNCH</h3>
                <div className="">{/* <p>sggxisavdugdsvsbxyucbhgsgcisbhxhsuivcxsg</p> */}</div>
              </div>
              <section className="slider  mb-3">
                <Carousel interval={3000}>
                  <Carousel.Item className="slide">
                    <div className="row g-3">
                      <div className="col-lg-3 c-width m-s-2">
                        <div className="inner-gallary-single">
                          {/* <a title="skp-alumni-launch">
                            <img className="img" src={slide1} />
                          </a> */}
                          <a href="#" title="skp-alumni-launch">
  <img className="img" src={slide1} alt="Description of the image" />
</a>

                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="inner-gallary-single">
                          <a title="skp-alumni-launch">
                            <img className="img" src={slide2} onClick={setOpenModal} />
                            <div className="inner-content">
                              <h4>library-donation</h4>
                              <p>sggxisavdugdsvsbxyucbhgsgcisbhxhsuivcxsg</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="slide">
                    <div className="row g-3">
                      <div className="col-lg-8">
                        <div className="inner-gallary-single">
                          <a title="sk-alumni-launch">
                            <img className="" src={slide5} />
                            <div className="inner-content">
                              <h4>library-donation</h4>
                              <p>sggxisavdugdsvsbxyucbhgsgcisbhxhsuivcxsg</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="inner-gallary-single">
                          <a title="Skp-alumni-launch ">
                            <img className="" src={slide3} />
                            <div className="inner-content">
                              <h4>library-donation</h4>
                              <p>sggxisavdugdsvsbxyucbhgsgcisbhxhsuivcxsg</p>
                            </div>
                          </a>
                        </div>
                        <div className="inner-gallary-single mt-2">
                          <a title="Skp-alumni-launch">
                            <img className="" src={slide6} />
                            <div className="inner-content">
                              <h4>library-donation</h4>
                              <p>sggxisavdugdsvsbxyucbhgsgcisbhxhsuivcxsg</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
                <div className="row g-3 mt-4">
                  <div className="col-lg-9">
                    <div className="event-title col-12">
                      <h3>LIBRARY DONATION</h3>
                    </div>
                    <div className="inner-gallary-single">
                      <a title="library-donation">
                        <img className=" mt-4" src={slide4} />
                        <div className="inner-content">
                          <h4>library-donation</h4>
                          <p>Sa</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Sitemap />
    </div>
  );
}

export default Events;
