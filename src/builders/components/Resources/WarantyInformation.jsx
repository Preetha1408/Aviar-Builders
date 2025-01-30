import React from "react";
import "../../../css/builders/Resources.scss";

function WarantyInformation() {
  return (
    <div className="text-center">
      <section className="contain my-1">
        <div className="common-header p-3">
          <h4>WARRANTY INFORMATION</h4></div>
      </section>
      <section className="resources-background p-3 my-1">
        <div className="container resources-div flex-column">
          <p className="resources-align ">
            Every AVIAR Home comes with a one-year builder backed warranty. Any sub contractors that performed work
            and/or supplied materials used in your new home will warranty their labor and/or materials for one year.
            Additionally, some manufacturers offer extended warranty for longer than a year.
            <hr />
          </p>
          <p className="resources-align  container">
            <p className="boder-left-title ">
              <b>Every new home warranty is for one year.</b> The warranty program begins on date of closing and ends on
              your one year anniversary. We utilize the National Association of Home Builders Residential Construction
              Performance Guidelines anytime it is necessary for one of our customer service representatives to inspect
              or perform maintenance/repairs on your home.
            </p>
            <hr />
          </p>
          <p className="resources-align ">
            AVIAR Homes also provides & hands out at closing a detailed Homeowners Maintenance Program which provides
            you instructions on how to maintain specific areas of your new home like sump pump, ejector pit, HVAC
            maintenance, electrical, etc. We have provided an additional copy for your convenience in your BuilderTREND
            account. Thank you!
            <hr />
          </p>
          <h5 className="d-flex justify-content-center">11 MONTH PUNCH LIST</h5>
          <p className="resources-align ">
            Every new home warranty is for one year. The warranty program begins on date of closing and ends on your one
            year anniversary. We utilize the National Association of Home Builders Residential Construction Performance
            Guidelines anytime it is necessary for one of our customer service representatives to inspect or perform
            maintenance/repairs on your home.
            <br />
            <hr />
            <br />
            The 11 Month Punchlist is a list of any issues that you might find in your home throughout the year. We will
            work together with our vendors and suppliers to ensure that all problem are solved .
            <hr />
          </p>
        </div>
      </section>
    </div>
  );
}

export default WarantyInformation;
