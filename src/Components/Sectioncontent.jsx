import React from "react";
import Swiper from "swiper"; // Assuming you're using Swiper for the carousel
import "./Sectioncontent.css";

const SectionContent = () => {
  // Initialize Swiper (if needed, or you can use the Swiper component)
  React.useEffect(() => {
    new Swiper(".swiper-brands-1", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
      },
    });
  }, []);

  return (
    <>
      <section className="section-content block_LOG001 bg-primary-green-medium pt-0">
        <div className="container">
          <div className="block-title mb-70">
            <h2 className="heading-7 heading text-center">
              Powering Top Accounting Teams with Automated Revenue Recognition
            </h2>
          </div>
        </div>

        <div className="container-fluid">
          <div className="swiper swiper-brands-1 mb-60">
            <div className="swiper-wrapper">
              {/* Swiper Slides */}
              <div className="swiper-slide">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/epicor_logo-new_2.png"
                  alt="Epicor Logo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/drata-logo-new.png"
                  alt="Drata Logo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/snowflake-logo-new.png"
                  alt="Snowflake Logo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/docebo-logo-new.png"
                  alt="Docebo Logo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/CAE-logo-1.png"
                  alt="CAE Logo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/Untitled-design-25.png"
                  alt="Brightly Logo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/Untitled-design-24.png"
                  alt="Datasite Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="block-heading mb-70">
          <div className="accent-icon-heading mb-30">
            <img decoding="async" src="accent-title.svg" alt="Rightrev" />
          </div>
          <h2 className="heading-default heading mb-20">
            See Your Revenue in Minutes, Not Days
          </h2>
          <div className="text-paragraph-18 text-subtitle">
            <p style={{ textAlign: "left" }}>
              RightRev’s automated revenue recognition transforms your
              accounting team from data processors into strategic business
              partners. By eliminating manual work and reducing audit risks, our
              software frees up valuable time for revenue analysis and informed
              decision-making. With accurate, real-time revenue data at your
              fingertips, you can move from manual tasks to meaningful impact.
            </p>
          </div>
        </div>

        <ul className="card-list">
          <li>
            <div className="card-item">
              <img
                decoding="asyn
                c"
                className="card-icon mb-20"
                src="https://www.rightrev.com/wp-content/uploads/Revenue-Accuracy.svg"
                alt="Revenue Accuracy"
              />
              <h3 className="card-title heading-4">Automate Complexity</h3>
              <div className="card-description">
                <p>
                  Revenue recognition isn’t one-size-fits-all. RightRev solves
                  the most challenging revenue use cases—eliminating errors,
                  reducing audit risks, and giving you total confidence. Less
                  manual work, more strategic impact.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-item">
              <img
                decoding="async"
                className="card-icon mb-20"
                src="https://www.rightrev.com/wp-content/uploads/Faster.svg"
                alt="Faster"
              />
              <h3 className="card-title heading-4">Close with Confidence</h3>
              <div className="card-description">
                <p>
                  Say goodbye to month-end surprises. Gain real-time revenue
                  visibility to spot potential issues before they become
                  problems, ensuring smooth financial operations and accurate
                  forecasting.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-item">
              <img
                decoding="async"
                className="card-icon mb-20"
                src="https://www.rightrev.com/wp-content/uploads/Scalable-Revenue-Recognition.svg"
                alt="Scalable Revenue Recognition"
              />
              <h3 className="card-title heading-4">Scale Without Limits</h3>
              <div className="card-description">
                <p>
                  As your business grows, revenue recognition can get messy.
                  Streamline any type of revenue— subscriptions, usage,
                  services, or a mix. RightRev handles high transaction volumes
                  rapidly, so you’re never held back.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div className="flex justify-center mt-5">
          <a
            href="https://www.rightrev.com/why-rightrev/"
            className="btn btn-primary flex justify-center items-center"
            title="How We Stand Out"
          >
            <span>How We Stand Out</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionContent;
