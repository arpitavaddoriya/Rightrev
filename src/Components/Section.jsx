import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <>
      <section className="block-hero bg-primary-green-medium bg-pattern block_HR001 block-lottie">
        <div className="container">
          <div className="row flex">
            <div className="col-12 col-md-6">
              <div className="block-caption">
                <h1 className="heading-default heading color-white mb-40">
                  <span
                    className="gradient-animation-light"
                    style={{ display: "block" }}
                  >
                    Simplify
                  </span>
                  <span
                    className="gradient-animation-light"
                    style={{ display: "block" }}
                  >
                    Complex
                  </span>
                  <span
                    className="gradient-animation-light"
                    style={{ display: "block" }}
                  >
                    Revenue
                  </span>
                  <span
                    className="gradient-animation-light"
                    style={{ display: "block" }}
                  >
                    Recognition
                  </span>
                </h1>
                <div className="text-paragraph-20 color-white mb-40">
                  <p>
                    Automate revenue recognition, gain real-time insights, and
                    ensure ASC 606 / IFRS 15 compliance—all while closing books
                    faster.
                  </p>
                </div>
                <div className="block-buttons">
                  <a
                    href="https://www.rightrev.com/request-a-demo/"
                    target="_self"
                    className="btn btn-primary"
                  >
                    <span>REQUEST A DEMO</span>
                  </a>
                  <a
                    href="https://www.youtube.com/embed/PgrXe1-Ou40?si=kvlAuoxSureXIOBj"
                    className="btn btn-link"
                    data-toggle="lightbox"
                  >
                    <span>See it in action</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 d-flex justify-content-center align-items-center
            
            "
            >
              <div className="block-img block-lottie">
                <img
                  src="/hero-section.svg" // Adjust the path if needed
                  alt="Hero Section"
                  className="your-image-class" // Optionally, you can add a class for styling
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
