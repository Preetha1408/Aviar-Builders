import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import ALMimage from "../Images/Alumni.png";
import ALMapi from "../../ALMapi";

function AlumniAccountDelete() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [saveEmail, setSaveEmail] = useState("");
  const [deleteModel, setDeleteModel] = useState(false);

  const handleDataSubmit = (e, { resetForm }) => {
    setSaveEmail(e.email);
    ALMapi.post("/api/v1/users/find", {
      email: e.email,
      phone: "+91" + e.phoneNumber,
    })
      .then((res) => {
        const data = res?.data?.userDetails;
        if (res.status === 200) {
          setData(data);
          setOpenModal(true);
          resetForm({ values: "" });
        }
      })
      .catch((error) => {
        alert("User Not Found!");
      });
  };

  const handleDeleteSubmit = (e) => {
    if (e.otp === data?.otp) {
      const id = data?._id;
      ALMapi.put(`/api/v1/users/account/inactive/${id}`).then((res) => {
        setOpenModal(false);
        setDeleteModel(true);
      });
    } else {
      alert("Please Enter Correct Verification Code!");
    }
  };

  const validate = Yup.object().shape({
    email: Yup.string().required("Email is Required"),
    phoneNumber: Yup.string().required("Phone Number is Required"),
  });

  const deleteSchema = Yup.object().shape({
    otp: Yup.string().required("OTP is Required"),
  });

  return (
    <div>
      <div className="mb-5">
        <div className="d-flex justify-content-center mb-4">
          <img src={ALMimage} alt="Alumni" style={{ width: 150, height: 200 }} />
        </div>
        <div>
          <Formik
            initialValues={{ email: "", phoneNumber: "" }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => handleDataSubmit(values, { resetForm })}
          >
            {(formik) => {
              const { values, handleSubmit, handleChange, handleBlur } = formik;
              return (
                <Container>
                  <div className="d-flex justify-content-center fs-5">
                    Use this page to delete your account. Once you enter the phone number and email id that you used to
                    create your alumni account, you will get a OTP to your E-mail. As soon as you confirm your OTP, you
                    will confirm your account deletion and it will be deleted.
                  </div>
                  <Row className="d-flex justify-content-center mt-4">
                    <Col xs={12} md={9}>
                      <Form className="resume-form" onSubmit={handleSubmit}>
                        <Form.Group className="mt-4">
                          <Form.Label className="mb-1 fs-20">
                            E-mail <b class="text-danger">*</b>
                          </Form.Label>
                          <Form.Control
                            name="email"
                            type="email"
                            className="mb-1 fs-20"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter email Address"
                          />
                          <ErrorMessage className="error text-danger" name="email" component="span" />
                        </Form.Group>

                        <Form.Group className="mt-4">
                          <Form.Label className="mb-1 fs-20">
                            Phone Number <b class="text-danger">*</b>
                          </Form.Label>
                          <Form.Control
                            name="phoneNumber"
                            type="text"
                            className="mb-1 fs-20"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter Phone Number"
                            maxLength={10}
                          />
                          <ErrorMessage className="error text-danger" name="phoneNumber" component="span" />
                        </Form.Group>
                        <div className="d-flex justify-content-center mt-5">
                          <Button type="submit">Submit</Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              );
            }}
          </Formik>
        </div>
      </div>
      <Modal
        show={openModal}
        centered
        backdrop="static"
        onHide={() => {
          setOpenModal(false);
        }}
        size="md"
      >
        <Modal.Header closeButton className="border-bottom-0 d-flex flex-column" />
        <Modal.Body className="p-4 ">
          <h5 className="filter-head-cls">Hello! {data?.firstName + " " + data.lastName}</h5>
          <p className="d-flex justify-content-center">we sent Verification Code into {saveEmail}</p>
          <div>
            <Formik
              initialValues={{ otp: "" }}
              validationSchema={deleteSchema}
              onSubmit={(values, { resetForm }) => handleDeleteSubmit(values, { resetForm })}
            >
              {(formik) => {
                const { values, handleChange, handleSubmit, handleBlur } = formik;
                return (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Control
                        name="otp"
                        value={values.otp}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Verification Code"
                        className="mb-1 fs-20"
                        type="text"
                        maxLength={6}
                      />
                      <ErrorMessage className="error text-danger" name="otp" component="span" />
                    </Form.Group>
                    <div className="d-flex justify-content-center mt-4 ">
                      <Button type="submit">Delete My Account</Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={deleteModel} centered backdrop="static" size="md">
        <Modal.Body className="p-4 ">
          <h5 className="filter-head-cls">Account Deleted!</h5>
          <div className="d-flex justify-content-center mt-4 ">
            <Button onClick={() => setDeleteModel(false)}>Ok</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AlumniAccountDelete;
