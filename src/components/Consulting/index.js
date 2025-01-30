import React from "react";
import {Container } from "react-bootstrap";
import "../../css/Consulting.scss";
import Sitemap from "../Sitemap";

function Consulting() {
  return (
    <div>
      <div>
        <div className="">
          <section
            id="advanced-features"
            style={{
              padding: "0px",
            }}
          >
            <div class="features-row" data-aos="fade-up">
              <div class="container">
                <div class="row">
                  <div className="col-lg-6 col-md-12 order-lg-2 order-1">
                    <img
                      src={require("../Images/consulting3.jpg")}
                      className="advanced-feature-img-right wow fadeInRight shadow-lg"
                      alt=""
                    />
                  </div>
                  <div class="col-lg-6 col-md-12 order-lg-1 order-2">
                    <div>
                      <h2 className="why-choose">CONSULTING SERVICES</h2>
                      <p className=" pt-3">
                        We offer a broad portfolio of software project consulting services spanning diverse.
                        technologies. We solve key business challenges by addressing them with standardized processes.
                        Our expertise is in the areas of project management, Agile consulting, application development,
                        testing, and support and maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="features-row  section-bg mt-5" data-aos="fade-up">
              <div class="container">
                <div class="row">
                  <div className="col-lg-6 col-md-12 mt-5">
                    <img
                      src={require("../Images/advanced-feature-2.jpg")}
                      className="advanced-feature-img-left"
                      alt=""
                    />
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div className="">
                      <h2 className="why-choose">MOBILE AND CLOUD APP DEVELOPMENT</h2>
                      <i class="bi bi-calendar4-week"></i>
                      <p className="pt-2">
                        AVIAR offers complete connected solutions which include mobile, web and cloud components. Each
                        of these components can be customized visually and logically to meet customer requirements. We
                        develop on both the iOS and Android platforms as well as creating their Web counterparts, which
                        we can develop using a range of tools/languages starting from html5/css all the way to reporting
                        dashboards depending on how customized the customer wants it. For applications requiring a
                        server-side backend we offer hosting and database solutions. Some of the technologies we use for
                        the server side and Web UI side include Node.js, AngularJS, jQuery, Google Charts, SQL Server
                        and MongoDB. We create customized salesforce and Office 365 (SharePoint Online) applications for
                        our clients.
                      </p>
                      <i class="bi bi-bar-chart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* agile consulting */}
          <section className=" agile-bg agile p-4">
            <Container>
              <div className="">
                <h4 className="why-choose mt-5 agile-title"> Agile Consulting</h4>
              </div>
              <div className="mb-4 ">
                <b className="agile-font">
                  The AVIAR team has extensive experience and in-depth understanding of the Agile software development
                  practices, their benefits and applicability across various industry verticals. We know that a
                  disciplined Agile delivery is an evolutionary (iterative and incremental) approach that regularly
                  produces high quality solutions in a cost-effective manner. It is performed in a highly collaborative
                  environment within an appropriate governance framework with active stakeholder participation to ensure
                  that the team addresses the changing needs of its stakeholders. Disciplined Agile delivery teams
                  provide repeatable results by adopting just the right amount of applicable governance for the
                  environment they are developing.
                </b>
                <br />
                <br />
                <b className="agile-font">
                  Our certified SCRUM Masters and SAFe certified program consultants can assist you to jump-start an
                  Agile environment by performing the following tasks:
                </b>
                <li className="agile-font">
                  Facilitate all time-boxed ceremonies such as daily stand up meeting, sprint planning, review/demo and
                  retrospectives.
                </li>
                <li className="agile-font">
                  Participate in Scrum of Scrums run daily with other scrum teams to review the daily progress towards
                  the quarterly Ad-hoc releases planned by the business.
                </li>
                <li className="agile-font">Manage Scrum processes within the organization.</li>
                <li className="agile-font">
                  Remove organizational and team impediments for the scrum team to have maximum productivity from sprint
                  to sprint.
                </li>
                <li className="agile-font">
                  Participate in release planning with the business and stake holders as part of scaled Agile.
                </li>
                <li className="agile-font">Coach, mentor and assist team members in meeting the day to day tasks.</li>
                <li className="agile-font">
                  Conduct effective and result oriented scrum retrospectives to ensure knowledge comes out of experience
                  and regular practice of all Scrum/Agile practices.
                </li>
                <li className="agile-font">
                  Manage team dysfunctions, Motivate team on their strengths, work on areas for improvement.
                </li>
                <li className="agile-font">
                  Conduct user story grooming session, help and coach teams to write granular stories with effective
                  acceptance criteria.
                </li>
                <li className="agile-font">
                  Ensure test driven development strategies with a single objective or Scrum metric of “working
                  software”.
                </li>
                <li className="agile-font">
                  Responsible for reporting team/Scrum metrics to management such as Burn down, Velocity, Epics across
                  Releases.
                </li>
                <li className="agile-font">
                  Effective user of Agile tool JIRA for Versions/Releases, Epics, story backlogs, sprints, tasks,
                  sub-tasks management.
                </li>
                <li className="agile-font">
                  Sync up data between various other tools like ALM, usage of various gadgets in JIRA to ensure better
                  productivity is represented to business.
                </li>
                <li className="agile-font">
                  Participate and provide input for successful run of Scrum practices in organization thru Scrum
                  Community of Practice.
                </li>
                <li className="agile-font">
                  Established successful practices for new software development and defect management across various
                  ticketing categories.
                </li>
                <li className="agile-font">
                  Report the Scrum benefits to business and provide inputs to scalability of Agile to
                  business/organization.
                </li>
              </div>
            </Container>
          </section>
        </div>
      </div>
      <Sitemap />
    </div>
  );
}

export default Consulting;
