import React, { useState } from "react";
import "../../css/Career.scss";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import Sitemap from "../Sitemap";

//images
import career from "../Images/career.png";

function Career() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="mt-5">
      <Container className="p-2">
        <h4 className="why-choose p-2 about-title-size">
          Our people are our greatest strength "IT'S ALL ABOUT OUR PEOPLE!"
        </h4>
        <p className="mt-4 fs-25 p-2 about-font-size">
          At AVIAR Technology Services, we live by our core values. We strive to make difference in everyone's life that
          we come across. We work as team to innovate and rethink business towards positive growth.
        </p>
        <p className="fs-25 p-2 about-font-size">
          We invest quality time on continuous learning for our people. Apply to see if you can be part of our great
          TEAM.
        </p>
        <div className="mt-3 p-3">
          <Row>
            <Col xs={12} md={7} className="order-lg-1 order-2 order-md-1">
              <Form onSubmit={handleSubmit} className="resume-form">
                <Form.Group className="mt-4">
                  <Form.Label className="mb-1 fs-20">
                    Name <b class="text-danger">*</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-1 fs-20"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    controlId="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label className="mb-1 fs-20">
                    What you are looking for? <b class="text-danger">*</b>
                  </Form.Label>
                  <Form.Select
                    placeholder="Select Anyone"
                    className="mb-1 fs-20"
                    type="option"
                    controlId="formBasicOption"
                    required
                  >
                    <option className="mb-1 fs-20">Select Anyone</option>
                    <option className="mb-1 fs-20"> Applying for job opportunity in India</option>
                    <option className="mb-1 fs-20">Apply for project Trainee</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label className="mb-1 fs-20">
                    Email Address <b class="text-danger">*</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="mb-1 fs-20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    controlId="email"
                    placeholder="Enter your email Id"
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label className="mb-1 fs-20">
                    Phone <b class="text-danger">*</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    controlId="number"
                    className="mb-1 fs-20"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    defaultValue={+91}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label className="mb-1 fs-20">
                    Message <b class="text-danger">*</b>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    className="mb-1 fs-20"
                    row={4}
                    placeholder="Leave your comments here...."
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label className="mb-1 fs-20">
                    {" "}
                    Upload your Resume <b class="text-danger">*</b>{" "}
                  </Form.Label>
                  <Form.Control className="mb-1 fs-20" type="file" id="show" upload required></Form.Control>
                </Form.Group>
                <Button className="mt-4 fs-20" type="submit" onChange={handleSubmit}>
                  submit
                </Button>
              </Form>
            </Col>
            <Col md={5} className="oredr-lg-2 order-1 order-md-2">
              <img src={career} alt="OOPS Img!" className="log" />
            </Col>
          </Row>

          {/* <div className="general">
            <h4 className="disability">Important Note</h4>
            <p>
              AVIAR Technology Services is committed to providing equal opportunity in all areas of employment, and in
              providing employees with a work environment free of discrimination and harassment. Employment decisions
              are made without regard to race, color, religion, age, gender, sexual orientation, veteran status,
              national origin, disability or any other status protected by applicable laws or regulations.
            </p>
            <p>
              This information is for general use only and shall not be construed or relied upon as an offer of
              employment, express or implied, under any circumstances.
            </p>
            <p>
              All terms of employment are "at will" and are controlled by the official policies of the organization and
              by applicable laws and regulations.
            </p>
          </div> */}
        </div>
      </Container>
      <div className="mt-2">
        <Sitemap />
      </div>
    </div>
  );
}
export default Career;
