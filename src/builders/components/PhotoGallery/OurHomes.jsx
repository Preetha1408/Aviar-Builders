import { useState, React } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "../../../css/builders/OurHome.scss";

//import "../../CSS/RemodelProjects.scss";

import kitchen from "../../Images/kitch.jpg";
import fireplaces from "../../Images/Fire places.jpg";
import FamilyRoom from "../../Images/FamilyRoom.jpg";
import MasterBathroom from "../../Images/Master Bathroom.jpg";
import FlexRoom from "../../Images/Flex Room.jpg";
import DiningRoom from "../../Images/DiningRoom.jpg";
import Lockers from "../../Images/Lockers.jpg";
import Lighting from "../../Images/Lighting.jpg";
import Windows from "../../Images/Windows.jpg";
import MasterBedroom from "../../Images/Master Bedroom.jpg";
import Exterior from "../../Images/Exterior.jpg";
import Flooring from "../../Images/Flooring.jpg";
import FoyerFront from "../../Images/Foyer-Front.jpg";
import LaundryRoom1 from "../../Images/Laundry Room1.jpg";
import HallBaths from "../../Images/Hall Baths.jpg";
import Basement from "../../Images/Basement.jpg";
import Stairs from "../../Images/Stairs.jpg";
import MiscOptions from "../../Images/Misc Options.jpg";

import LondonRevised from "../../Images/London Revised.jpg";
import SouthHampton from "../../Images/South Hampton.jpg";
import Livingston from "../../Images/Livingston.jpg";
import Briar from "../../Images/Briar Dr.jpg";
import Cambridge from "../../Images/Cambridge.jpg";
import Dorset from "../../Images/Dorset.jpg";

import Stanfield from "../../Images/Stanfield.jpg";
import Winchester from "../../Images/Winchester.jpg";
import Norfolk from "../../Images/Norfolk.jpg";
import Plymouth from "../../Images/Plymouth.jpg";
import Dorset2 from "../../Images/Dorset2.jpg";
import London from "../../Images/London.jpg";
import Hamilton1 from "../../Images/Hamilton1.jpg";
import Plymouth2 from "../../Images/Plymouth2.jpg";
import Hamilton2 from "../../Images/Hamilton2.jpg";
import Dorset3 from "../../Images/Dorset3.jpg";
import Somerset from "../../Images/Somerset.jpg";
import Elgin from "../../Images/Elgin.jpg";
import Plymouth3 from "../../Images/Plymouth3.jpg";
import Custom from "../../Images/Custom.jpg";
//  import Dorset from "../../Images/Dorset.jpg";

export default function OurHomes() {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex text-center flex-column ">
        <section className="contain my-1">
          <div className="common-header p-3">
            <h4>OUR HOMES</h4></div>
        </section>
        <div className="page-background">
          <div className="p-2 ms-4 font ">
            <p>
              Our homes are built to fit a number of different styles, but all offer a unique combination of modern
              trends and timeless styles, features, and function. Fill out the form below to request a consultation for
              new home construction, home renovation services, or to schedule a showing.
            </p>
          </div>
          <div className="container">
            <Tabs defaultActiveKey="viewphotos" className="mb-4 d-flex justify-content-center tab-font">
              <Tab eventKey="viewRoom" title="View Photos By Room">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 pb-3">
                    <img
                      src={require("../../Images/Resources/subdivision/Unknown-3_edit_crop_316_210.jpeg")}
                      className="img-fluid"
                    />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>Silver Oak</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 pb-3">
                    <img src={require("../../Images/Resources/subdivision/sumer palace.jpg")} />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>Summer Place</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 pb-3">
                    <img
                      src={require("../../Images/Resources/subdivision/Vineyard-sign-4.27.16-copy_edit_crop_482_321.jpg")}
                    />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>The Vineyards</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 pb-3">
                    <img src={require("../../Images/Resources/subdivision/rock-greek.jpg")} className="img-fluid" />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>Rock Greek</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 pb-3">
                    <img
                      src={require("../../Images/Resources/subdivision/Liberty on the Lake.jpg")}
                      className="img-fluid"
                    />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 pb-3">
                    <img
                      src={require("../../Images/Resources/subdivision/The-Grove-subdivision.jpeg")}
                      className="img-fluid"
                    />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="viewphotos" title="View Photos By Home">
                <div className="row">
                  <div className="col-lg-4 pb-3">
                    <img src={require("../../Images/Resources/subdivision/rock-greek.jpg")} className="img-fluid" />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>Rock Greek</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 pb-3">
                    <img
                      src={require("../../Images/Resources/subdivision/Liberty on the Lake.jpg")}
                      className="img-fluid"
                    />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 pb-3">
                    <img
                      src={require("../../Images/Resources/subdivision/The-Grove-subdivision.jpeg")}
                      className="img-fluid"
                    />
                    <div className="partner-name">
                      <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
