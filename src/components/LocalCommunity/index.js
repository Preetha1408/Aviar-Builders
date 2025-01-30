import React, { useRef } from "react";

import { Container, Form, Button } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
import slide1 from "../Images/library-donation.jpg";
import slide2 from "../Images/services-2.jpg";
import slide3 from "../Images/advanced-feature-2.jpg";

import "../../css/Localcommunity.scss";
//icons
import Sitemap from "../Sitemap";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread, MdLocationOn } from "react-icons/md";

//images
import localcommunity from "../Images/localcommunity.gif";

// email
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Localcommunity = () => {
  const form = useRef();
  const notify = () => toast("E-mail sent");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_pa7oy7s", "template_w8o7cqj", form.current, "z4qQX8QlcGKO-vGV_").then(
      (result) => {
        console.log("console", result.text);
        <ToastContainer />;
      },
      (error) => {
        console.log("console", error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div className="content-margin">
      <section id="testimonials" className="testimonials">
        <div className="container position-relative text_style" style={{ marginTop: "2%" }}>
          <p className="text_style_p about-font-size">
            AVIAR Technology Services is committed to serve the local community where we are located. We provide free
            technology education services to the under privileged people in our local community. This enables them to
            improve their quality of life by getting them positioned for more highly paid jobs.
          </p>
          <p className="text_style_p about-font-size">
            We schedule our in person or online technology classes on request by the most needy students. These classes
            are given by most experienced people in the technology industry.
          </p>
          <p className="text_style_p about-font-size">
            The timing of the trainings are usually during a weekend or evenings.
          </p>
          <p className="text_style_p about-font-size">
            Trainings are provided in Cloud computing , AWS, Microsoft Azure, Google Cloud, Splunk, WordPress. Python,
            Databases like Mongo DB, No SQL Solutions and so forth.
          </p>
          <p className="text_style_p about-font-size">
            If you are interested to be avail the training, please contact us using the below form. One of our teammates
            will reach out to you for further information, evaluation of your application and process it.
          </p>
          <p className="text_style_p about-font-size">
            Please mention your educational qualification, your area of location, your desire to learn in the form.
          </p>
        </div>
      </section>
      <section id="contact" className="contact mb-0">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p></p>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt">
                    <MdLocationOn />
                  </i>
                  <h4 className="fs-20">Location:</h4>
                  <p className="fs-20">2103 Eastland Dr, STE A, Bloomington, IL 61704</p>
                </div>

                <div className="email fs-20">
                  <i className="bi bi-envelope">
                    <MdOutlineMarkEmailUnread />
                  </i>
                  <h4 className="fs-20">Email:</h4>
                  <p className="fs-20">
                    <a className="fs-20" href="mailto:vijay@aviarfs.com">
                      aviar@aviartechservices.com
                    </a>
                  </p>
                </div>

                <div className="phone ">
                  <i className="bi bi-phone">
                    <FiPhoneCall />
                  </i>
                  <h4 className="fs-20">Call:</h4>
                  <p>
                    <a className="fs-20" href="tel:3097501082">
                      +1 3097501082
                    </a>
                  </p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d98980.77958290937!2d-86.60188667868584!3d39.17132507403884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1669109434552!5m2!1sen!2sbg"
                  frameBorder="0"
                  style={{ border: "0", width: " 100%", height: "290px" }}
                  allowfullscreen
                ></iframe>

              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form onSubmit={sendEmail} className="php-email-form" ref={form}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="fs-20" for="name fs-20">
                      Your Name
                    </label>
                    <input type="text" name="user_name" className="form-control fs-20" id="user_name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="fs-20" for="name">
                      Your Email
                    </label>
                    <input type="email" className="form-control fs-20" name="user_email" id="user_email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="fs-20" for="name">
                    Subject
                  </label>
                  <input type="text" className="form-control fs-20" name="subject" id="subject" required />
                </div>
                <div className="form-group">
                  <label className="fs-20" for="name">
                    Message
                  </label>
                  <textarea className="form-control fs-20" name="message" rows="10" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading fs-20">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message fs-20">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit" className="fs-20" onClick={notify}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* carousel code */}
      {/* <section className="slider  mb-3">
        <Carousel>
          <Carousel.Item className="slide">
            <img className=" w-100" src={slide1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item className="slide">
            <img className=" w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item className="slide">
            <img className=" w-100" src={slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </section> */}
      <Sitemap />
    </div>
  );
};
export default Localcommunity;
