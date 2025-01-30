import React from "react";
import "../../../css/builders/FloorPlans.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import twostory from "../../Images/Core/builder-plan/2 Story _Plan.pdf";
import twostory_2 from "../../Images/Core/builder-plan/2StoryPlan.pdf";
import raunch from "../../Images/Core/builder-plan/RanchZero.pdf";
import strory_1_5 from "../../Images/Core/builder-plan/1-5StoryPlan.pdf";
import story_1_5_2 from "../../Images/Core/builder-plan/1-5 Story plan.pdf";
import duplex_1 from "../../Images/Core/builder-plan/VIJAY (DUPLEX)_Final.pdf";
import duplex_2 from "../../Images/Core/builder-plan/22-115 - Aviar 4-13-23.pdf";
import duplex_3 from "../../Images/Core/builder-plan/22-115 - Aviar 3-20-23.pdf";
import house6 from "../../Images/HomePageImages/house6.jpg";
import house4 from "../../Images/HomePageImages/house7.jpg";
import house10 from "../../Images/HomePageImages/house10.jpg";
import house5 from "../../Images/HomePageImages/house5.jpg";
import house2 from "../../Images/HomePageImages/house2.jpg";
import house3 from "../../Images/HomePageImages/house3.jpg";
import house11 from "../../Images/HomePageImages/house11.jpg";
function FloorPlans() {
  return (
    <div>
      <section className="contain my-1">
        <div className="common-header p-3">
          <h4>FLOORPLANS</h4></div>
      </section>
      <section class="property-grid grid resources-background">
        <div className="container">
          <Tabs
            defaultActiveKey="allareas"
            transition={false}
            id="noanim-tab-example"
            className="mb-4 d-flex justify-content-center tab-font"
          >
            <Tab eventKey="allareas" title="All">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="grid-option">
                      <form>
                        {/* <select class="custom-select">
                    <option selected>All</option>
                    <option value="1">New to Old</option>
                    <option value="2">For Rent</option>
                    <option value="3">For Sale</option>
                  </select> */}
                      </form>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a"style={{height:"265px"}} >
                        <img src={require("../../Images/FloorPlans/all1.jpg")} className="img-a img-fluid" alt=""
                         />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">2 Story</span>
                            </div>
                            <a href={twostory} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a"style={{height:'265px'}}>
                        <img
                          src={require("../../Images/FloorPlans/property-1.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">2 Story</span>
                            </div>
                            <a href={twostory_2} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a"style={{height:'265px'}} >
                        <img
                          src={require("../../Images/HomePageImages/house6.jpg")}
                          className="img-a img-fluid"
                          style={{height:"100%",width:"100%"}}
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">1.5 Story</span>
                            </div>
                            <a href={story_1_5_2} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow"style={{height:'265px'}}>
                      <div class="img-box-a">
                        <img
                          src={require("../../Images/HomePageImages/house7.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">1.5 Story</span>
                            </div>
                            <a href={strory_1_5} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a" style={{height:'265px'}}>
                        <img
                          src={require("../../Images/HomePageImages/house10.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">Raunch</span>
                            </div>
                            <a href={raunch} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a" style={{height:'265px'}}>
                        <img
                          src={require("../../Images/HomePageImages/house2.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">Duplex</span>
                            </div>
                            <a href={duplex_1} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a" style={{height:'265px'}}>
                        <img
                          src={require("../../Images/HomePageImages/house5.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">Duplex</span>
                            </div>
                            <a href={duplex_2} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a" style={{height:'265px'}}>
                        <img
                          src={require("../../Images/HomePageImages/house3.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">Duplex</span>
                            </div>
                            <a href={duplex_3} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a" style={{height:'265px'}}>
                        <img
                          src={require("../../Images/HomePageImages/house11.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">Duplex</span>
                            </div>
                            <a href={duplex_3} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Ranch" title="Ranch">
              <div className="container">
                <div class="col-md-4">
                  <div class="card-box-a card-shadow">
                    <div class="img-box-a" style={{height:'90%'}}>
                      <img src={require("../../Images/FloorPlans/property-1.jpg")} className="img-a img-fluid" alt="" style={{height:'90%'}} />
                    </div>
                    <div class="card-overlay">
                      <div class="card-overlay-a-content">
                        <div class="card-header-a">
                          <h2 class="card-title-a">
                            <a href="#">
                              lorel ipsum
                              <br /> lorel ipsum
                            </a>
                          </h2>
                        </div>
                        <div class="card-body-a">
                          <div class="price-box d-flex">
                            <span class="price-a">Raunch</span>
                          </div>
                          <a href={raunch} target="_blank" class="link-a click-view">
                            Click here to view plan
                            <span class="bi bi-chevron-right"></span>
                          </a>
                        </div>
                        <div class="card-footer-a">
                          <ul class="card-info d-flex justify-content-around">
                            <li>
                              <h4 class="card-info-title">Area</h4>
                              <span className="">
                                340m
                                <sup>2</sup>
                              </span>
                            </li>
                            <li>
                              <h4 class="card-info-title">Beds</h4>
                              <span className="ms-3">2</span>
                            </li>
                            <li>
                              <h4 class="card-info-title">Baths</h4>
                              <span className="ms-3">4</span>
                            </li>
                            <li>
                              <h4 class="card-info-title">Garages</h4>
                              <span className="ms-4">1</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="1.5 Story" title="1.5 Story">
              <div className="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="grid-option">
                      <form>
                        {/* <select class="custom-select">
                    <option selected>All</option>
                    <option value="1">New to Old</option>
                    <option value="2">For Rent</option>
                    <option value="3">For Sale</option>
                  </select> */}
                      </form>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a"style={{height:'90%'}}>
                        <img
                          src={require("../../Images/FloorPlans/property-1.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">1.5 Story</span>
                            </div>
                            <a href={story_1_5_2} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a"style={{height:'90%'}}>
                        <img
                          src={require("../../Images/FloorPlans/property-1.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">1.5 Story</span>
                            </div>
                            <a href={strory_1_5} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="2 Story" title="2 Story">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="grid-option"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a" style={{height:'90%'}}>
                        <img
                          src={require("../../Images/FloorPlans/property-1.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">2 Story</span>
                            </div>
                            <a href={twostory} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a" style={{height:'90%'}}>
                        <img
                          src={require("../../Images/FloorPlans/property-1.jpg")}
                          className="img-a img-fluid"
                          alt=""
                          style={{height:'90%'}}
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">2 Story</span>
                            </div>
                            <a href={twostory_2} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Duplex" title="Duplex">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="grid-option"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a">
                        <img
                          src={require("../../Images/FloorPlans/property-1.jpg")}
                          className="img-a img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">Duplex</span>
                            </div>
                            <a href={duplex_1} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a">
                        <img
                          src={require("../../Images/FloorPlans/property-1.jpg")}
                          className="img-a img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">Duplex</span>
                            </div>
                            <a href={duplex_2} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a">
                        <img
                          src={require("../../Images/FloorPlans/property-1.jpg")}
                          className="img-a img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">
                                lorel ipsum
                                <br /> lorel ipsum
                              </a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">Duplex</span>
                            </div>
                            <a href={duplex_3} target="_blank" class="link-a click-view">
                              Click here to view plan
                              <span class="bi bi-chevron-right"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span className="">
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span className="ms-3">2</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Baths</h4>
                                <span className="ms-3">4</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span className="ms-4">1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
      {/* <div class="row">
            <div class="col-sm-12">
              <nav class="pagination-a">
                <ul class="pagination justify-content-end">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      <span class="bi bi-chevron-left">
                        <AiOutlineArrowLeft />
                      </span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item next">
                    <a class="page-link" href="#">
                      <span class="bi bi-chevron-right">
                        <AiOutlineArrowRight />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
    </div>
  );
}

export default FloorPlans;
