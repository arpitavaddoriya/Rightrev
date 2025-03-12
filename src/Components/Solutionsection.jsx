import React from "react";
import "./Solutionsection.css";

const Solutionsection = () => {
  return (
    <section className="section-content block_AB003 section-cards-no-border section-bg-green">
      <ul className="patterns">
        <li></li>
        <li></li>
      </ul>
      <div className="container">
        <div className="solution-heading mb-70">
          <h2 className="solution-default heading mb-20">
            Automated revenue recognition solutions
          </h2>
          <div className="solution-paragraph-18 text-subtitle">
            <p>
              <span style={{ fontWeight: 400 }}>
                We do the hard part for you.
              </span>
            </p>
            <p style={{ textAlign: "left" }}>
              Reduce spreadsheet reliance, alleviate audit pain, and have
              confidence in your numbers so you can focus on providing valuable
              insights. RightRev works with your existing tech stack and
              natively with Salesforce, providing a unified view of your revenue
              landscape without disrupting your workflows.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="solution-item">
              <h3 className="solution-subtitle mb-20">
                Standalone Revenue Recognition Software
              </h3>
              <img
                decoding="async"
                className="solution-img"
                src="/Revenue-Contract-3.png"
                alt="Standalone Revenue Recognition Software"
                loading="lazy"
              />
              <h4 className="card-title heading-3 mb-0">
                Standalone Application
              </h4>
              <div className="solution-description">
                <p>
                  Our standalone revenue recognition software is built on an
                  API-first model and easily ingests contract data from upstream
                  sources. Automate your revenue recognition using pre-defined
                  rules, such as upon bookings, billings, or user-defined
                  events, and distribute revenue on a point-in-time or ratable
                  basis. Highly configurable out-of-the-box means no
                  customization or custom scripting is required.
                </p>
              </div>
              <div className="solution-btn">
                <a
                  href="https://www.rightrev.com/product-standalone/"
                  className="solution btn-primary"
                  title="LEARN MORE"
                >
                  <span>LEARN MORE</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="solution-item">
              <h3 className="solution-subtitle mb-20">
                Revenue Recognition Software For Salesforce
              </h3>
              <img
                decoding="async"
                className="solution-img"
                src="/Salesforce-Revenue-Desk-2.png"
                alt="Salesforce Revenue Recognition Software"
                loading="lazy"
              />
              <h4 className="solution-title heading-3 mb-0">
                Salesforce Application
              </h4>
              <div className="solution-description">
                <p>
                  RightRev for Salesforce natively operates across all use cases
                  supported by the Force.com platform. Your Rev Rec process runs
                  alongside Salesforce, autonomously executing calculations
                  based on pre-defined rules within Salesforce. Revenue
                  reporting is extremely reliable with unified data and is
                  flexible based on your needs.
                </p>
              </div>
              <div className="solution-btn">
                <a
                  href="https://www.rightrev.com/product-salesforce/"
                  className="solution btn-primary"
                  title="LEARN MORE"
                >
                  <span>LEARN MORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutionsection;
