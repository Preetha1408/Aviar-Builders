import React from "react";
import { Container} from "react-bootstrap";
import "../../css/GIS.scss";
import Sitemap from "../Sitemap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnity, faPhoenixSquadron } from "@fortawesome/free-brands-svg-icons";
import {
  faCube,
  faSatellite,
  faPhotoVideo,
  faTooth,
  faRoad,
  faChartLine,
  faMobileAlt,
  faMountain,
  faSearchLocation,
  faChartBar,
  faSeedling,
  faGlobeAsia,
  faMap,
  faEnvelope,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

function Gis() {
  return (
    <div className="content-margin">
      <section class="gis_Image">
        {/* <Card className="gis"> */}
        <div className="container position-relative  gis_header mt-1 why-choose">
          <h4 className="gis_header_text"> Geospatial services, Photogrammetry, Lidar</h4>
        </div>
        <div className="gis_text container">
          <p className="gis_text_style position-relative">
            We will provide accurate survey of Land development, urban development, Smart city planning, parcel mapping,
            defining the drain view and Contour of land formation in the earth with Quality of Work and on time
            delivery.
          </p>
          <p className="gis_text_style position-relative">
            We have 15+ Experienced Resources coupled with advanced equipment's will ensure the success of your Projects
            of Deliver the Highest quality mapping Products. We have successfully delivered many projects to US Clients.
          </p>
        </div>
        {/* </Card> */}
      </section>
      <Container className="mt-3">
        <section id="list" class="list">
          <div class="container">
            <div class="" data-aos="fade-up">
              {/* <h2 className="l-h2">Services</h2> */}
              <p className="l-p">Services are :</p>
            </div>

            <div class="row  mt-4" data-aos="fade-left">
              <div class="col-lg-3 col-md-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="50">
                  <i class="ri-store-line" style={{ color: "#ffbb2c" }}>
                    <FontAwesomeIcon icon={faCube} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">3D and 2D Mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                  <i class="ri-bar-chart-box-line" style={{ color: "#5578ff" }}>
                    <FontAwesomeIcon icon={faUnity} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Aerial Triangulation</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="150">
                  <i class="ri-calendar-todo-line" style={{ color: "#e80368" }}>
                    <FontAwesomeIcon icon={faSatellite} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Aerial and Satellite</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="200">
                  <i class="ri-paint-brush-line" style={{ color: "#e361ff" }}>
                    <FontAwesomeIcon icon={faPhotoVideo} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Image Mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="250">
                  <i class="ri-database-2-line" style={{ color: "#47aeff" }}>
                    <FontAwesomeIcon icon={faPhoenixSquadron} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link">Drone Data Mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
                  <i class="ri-gradienter-line" style={{ color: "#ffa76e" }}>
                    <FontAwesomeIcon icon={faTooth} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Ortho Photo</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="350">
                  <i class="ri-file-list-3-line" style={{ color: "#11dbcf" }}>
                    <FontAwesomeIcon icon={faHandshake} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Rectification</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="400">
                  <i class="ri-price-tag-2-line" style={{ color: "#4233ff" }}>
                    <FontAwesomeIcon icon={faRoad} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">LiDAR Mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="450">
                  <i class="ri-anchor-line" style={{ color: "#b2904f" }}>
                    <FontAwesomeIcon icon={faChartLine} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Analysis</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="500">
                  <i class="ri-disc-line" style={{ color: "#b20969" }}>
                    <FontAwesomeIcon icon={faMobileAlt} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Mobile Lidar mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="550">
                  <i class="ri-base-station-line" style={{ color: "#ff5828" }}>
                    <FontAwesomeIcon icon={faMountain} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Terrain Modelling</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="600">
                  <i class="ri-fingerprint-line" style={{ color: "#29cc61" }}>
                    <FontAwesomeIcon icon={faSearchLocation} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Cadastral Mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="600">
                  <i class="ri-fingerprint-line" style={{ color: "rgb(219 46 46" }}>
                    <FontAwesomeIcon icon={faChartBar} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Data Analysis</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="600">
                  <i class="ri-fingerprint-line" style={{ color: "rgb(41, 204, 97)" }}>
                    <FontAwesomeIcon icon={faSeedling} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Environmental Analysis and Mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="600">
                  <i class="ri-fingerprint-line" style={{ color: "#47b2e4" }}>
                    <FontAwesomeIcon icon={faGlobeAsia} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Land use Landcover Mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="600">
                  <i class="ri-fingerprint-line" style={{ color: "#29cc61" }}>
                    <FontAwesomeIcon icon={faMap} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Topography Mapping</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="600">
                  <i class="ri-fingerprint-line" style={{ color: "#212529" }}>
                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                  </i>
                  <h3>
                    <a className="fs-18 hide-link ms-1">Parcel Mapping</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Sitemap />
    </div>
  );
}
export default Gis;
