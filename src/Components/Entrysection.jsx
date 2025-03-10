import React from "react";
import "./Entrysection.css"; // Optional: For custom styling

const Entrysection = () => {
  return (
    <section className="Entry-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="entry-img">
              <img
                decoding="async"
                src="https://www.rightrev.com/wp-content/uploads/RightRev-SocialMedia-8.png"
                alt="Journal Entry mock up"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="entry-caption">
              <h2 className="entry-default heading mb-30 gradient-animation-dark">
                Granularity in RightRev, Visibility in Your ERP
              </h2>
              <div className="entry-description text-paragraph-18">
                <p>
                  Easily post journal entries via APIs to your ERP, whether you
                  need detailed or summarized data. Think of RightRev as your
                  ERP’s revenue sidekick—a powerful subledger that manages
                  complex revenue arrangements and reporting while keeping your
                  revenue data in sync with your ERP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entrysection;
