import React from "react";
import "../../../css/builders/Resources.scss";
import "../../../css/builders/AboutUs.scss"

function FrequentlyAskedQuestions() {
  return (
    <div className="text-center">
      <section className="contain my-1">
        <div className="common-header p-3">
          <h4>FREQUENTLY ASKED QUESTIONS</h4></div>
      </section>
      <section className="page-background p-3 my-1">
        <div className="container maindiv flex-column">
          <h5 className="textalign"><b>Below is a list of our FAQs to help you get things started:</b></h5>
          <div className="textalign">
            <h5 className="mt-2">HOW LONG DOES THE CONSTRUCTION PROCESS TAKE FROM THE TIME WE SIGN CONTRACTS?</h5>
            <p className=" mb-4">
              The construction process for AVIAR Homes averages around five months or 180 days. While we usually strive
              for this goal, there are outstanding conditions such as weather, job site conditions, and change orders
              that can extend the process. However, we will not sacrifice Quality for Time.
              <hr />
            </p>
          </div>
          <div className="textalign">
            <h5 className="mt-2">
              WHAT TYPE OF MONETARY CONSIDERATION IS REQUIRED BEFORE THE CONSTRUCTION PROCESS CAN BEGIN?
            </h5>
            <p className=" mb-4">
              In order to solidify your decision to build with AVIAR Homes, a deposit is required. The amount of the
              deposit is decided during the preliminary meeting with the builder. This amount can vary greatly given the
              scope of work, but normally is between four to ten percent.
            </p>
            <hr />
          </div>

          <div className="textalign">
            <h5 className="mt-2">DO WE NEED TO ARRANGE FOR A CONSTRUCTION LOAN?</h5>
            <p className=" mb-4">
              If we build on your land - than yes. Buyer is responsible for securing appropriate financing prior to
              commencement of work. If we build on our land, then we will secure the financing. Another option is to
              Quit Claim the deed in AVIAR's name, which would enable us to finance as a Turnkey build. This would also
              serve as your earnest money down.
            </p>
            <hr />
          </div>
          <div className="textalign">
            <h5 className="mt-2">HOW MUCH SUPERVISION WILL MY HOUSE HAVE DURING CONSTRUCTION?</h5>
            <p className=" mb-4">
              A Project Manager is a key aspect of the AVIAR Homes team to ensure quality workmanship on the jobsite;
              therefore, our Project Manager is present at the job site on a daily basis to make sure our quality
              standards are met. They also coordinate and schedule our trade contractors & vendors at appropriate times
              throughout the construction process. In addition, you will have bi-monthly meetings with the Project
              Manager on site for progress updates and to answer any questions that arise.
            </p>
            <hr />
          </div>
          <div className="textalign">
            <h5 className="mt-2">HOW WILL THE SELECTION PROCESS WORK?</h5>
            <p className=" mb-4">
              AVIAR Homes has a Designer that will help assist customers in making their color selections along with the
              Customer Liaison. Exterior selections will be made first: windows, exterior doors, shingles, siding,
              garage doors, and brick. All interior selections will follow: paint colors, cabinets, countertops and
              flooring. Your last session will be to review all color and options selected for your home and finalize
              the order.
            </p>
            <hr />
          </div>
          <div className="textalign">
            <h5 className="mt-2">CAN I CHOOSE WHICH VENDORS TO VISIT IN ORDER TO MAKE MY SELECTIONS?</h5>
            <p className=" mb-4">
              We provide you with a list of preferred vendors in your Homeowner Manual. If you wish to use vendors
              outside of our vendor contact list, we ask the courtesy of contacting us prior to making your selections.
              Please recognize that we work hand-in-hand with various vendors, trade contractors, and suppliers who are
              experts in their own areas and who we hold in high regard. We recommend only certain vendors, trade
              contractors, and suppliers since they have proven their value to us over time and share our commitments to
              quality.
            </p>
            <hr />
          </div>
          <div className="textalign">
            <h5 className="mt-2">SWEAT EQUITY?</h5>
            <p className=" mb-4">
              We are often asked if a Homeowner can perform sweat equity on their new home such as: painting, tile work,
              etc. Our plicy is if this is your business or family trade, then we are happy to discuss. However, AVIAR
              Homes takes a great deal of pride in our homes and cannot sacrifice quality or time. It oftens brings
              about frustration on the Homeowners part, and we want you to enjoy the process and let AVIAR Homes handle
              the details.
            </p>
            <hr />
          </div>
          <div className="textalign">
            <h5 className="mt-2">WHAT TYPE OF WARRANTY DO YOU PROVIDE AFTER THE CONSTRUCTION PROCESS IS COMPLETE?</h5>
            <p className=" mb-4">
              Each home we build comes with a one-year limited warranty. As a customer-service driven builder, we are
              always happy to service your needs after the construction process is complete.
            </p>
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FrequentlyAskedQuestions;
