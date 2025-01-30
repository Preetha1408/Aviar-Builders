// import React from "react";
// import "../../CSS/Resources.scss";
// import { Container } from "react-bootstrap";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";

// function Subdivisions() {
//   return (
//     <div className="text-center">
//       <section className="contain my-1">
//         <div className="common-header">SUBDIVISIONS</div>
//       </section>
//       <section className="resources-background p-3 my-1">
//         <Container>
//           <Tabs
//             defaultActiveKey="allareas"
//             transition={false}
//             id="noanim-tab-example"
//             className="mb-4 d-flex justify-content-center tab-font"
//           >
//             <Tab eventKey="allareas" title="All Areas">
//               <div className="row">
//                 <div className="col-lg-4 col-sm-6 pb-3">
//                   <img
//                     src={require("../../Images/Resources/subdivision/Unknown-3_edit_crop_316_210.jpeg")}
//                     className="img-fluid"
//                   />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Silver Oak</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 pb-3">
//                   <img src={require("../../Images/Resources/subdivision/sumer palace.jpg")} />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Summer Place</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 pb-3">
//                   <img
//                     src={require("../../Images/Resources/subdivision/Vineyard-sign-4.27.16-copy_edit_crop_482_321.jpg")}
//                   />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>The Vineyards</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 pb-3">
//                   <img src={require("../../Images/Resources/subdivision/rock-greek.jpg")} className="img-fluid" />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Rock Greek</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 pb-3">
//                   <img
//                     src={require("../../Images/Resources/subdivision/Liberty on the Lake.jpg")}
//                     className="img-fluid"
//                   />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 pb-3">
//                   <img
//                     src={require("../../Images/Resources/subdivision/The-Grove-subdivision.jpeg")}
//                     className="img-fluid"
//                   />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
//                   </div>
//                 </div>
//               </div>
//             </Tab>
//             <Tab eventKey="bloomington" title="Bloomington">
//               <div className="row">
//                 <div className="col-lg-4 pb-3">
//                   <img src={require("../../Images/Resources/subdivision/rock-greek.jpg")} className="img-fluid" />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Rock Greek</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 pb-3">
//                   <img
//                     src={require("../../Images/Resources/subdivision/Liberty on the Lake.jpg")}
//                     className="img-fluid"
//                   />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 pb-3">
//                   <img
//                     src={require("../../Images/Resources/subdivision/The-Grove-subdivision.jpeg")}
//                     className="img-fluid"
//                   />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
//                   </div>
//                 </div>
//               </div>
//             </Tab>
//             <Tab eventKey="carlock" title="Carlock">
//               <div className="row">
//                 <div className="col-lg-4 pb-3">
//                   <img src={require("../../Images/Resources/subdivision/rock-greek.jpg")} className="img-fluid" />
//                   <div className="partner-name">
//                     <h6 style={{ fontWeight: "bold" }}>Rock Greek</h6>
//                   </div>
//                 </div>
//               </div>
//             </Tab>
//           </Tabs>
//         </Container>
//       </section>
//     </div>
//   );
// }

// export default Subdivisions;


import React from "react";
import "../../../css/builders/Resources.scss";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Subdivisions() {
  return (
    <div className="text-center">
      <section className="resources my-1">
        <div className="resources-heading ">
          <h4>SUBDIVISIONS</h4>
        </div>
      </section>
      <section className="resources-background p-3 my-1">
        <Container>
          <Tabs
            defaultActiveKey="allareas"
            transition={false}
            id="noanim-tab-example"
            className="mb-4 d-flex justify-content-center tab-font"
          >
            <Tab eventKey="allareas" title="All Areas">
              <div className="row">
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/Unknown-3_edit_crop_316_210.jpeg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Silver Oak</h6>
                  </div>
                </div>
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/sumer palace.jpg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Summer Place</h6>
                  </div>
                </div>
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/Vineyard-sign-4.27.16-copy_edit_crop_482_321.jpg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>The Vineyards</h6>
                  </div>
                </div>
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/rock-greek.jpg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Rock Greek</h6>
                  </div>
                </div>
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/Liberty on the Lake.jpg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
                  </div>
                </div>
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/The-Grove-subdivision.jpeg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="bloomington" title="Bloomington">
              <div className="row">
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/rock-greek.jpg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Rock Greek</h6>
                  </div>
                </div>
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/Liberty on the Lake.jpg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
                  </div>
                </div>
                <div className="col-lg-4 pb-3">
                  <img
                    src={require("../../Images/Resources/subdivision/The-Grove-subdivision.jpeg")}
                    className="frequents"
                    alt=""
                  />
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Liberty on the Lake</h6>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="carlock" title="Carlock">
              <div className="row">
                <div className="col-lg-4 pb-3">
                  <img src={require("../../Images/Resources/subdivision/rock-greek.jpg")} className="frequents" alt=""/>
                  <div className="partner-name">
                    <h6 style={{ fontWeight: "bold" }}>Rock Greek</h6>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Container>
      </section>
    </div>
  );
}

export default Subdivisions;