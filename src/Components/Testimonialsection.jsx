import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Testimonialsection.css";

const Testimonialsection = () => {
  return (
    <section className="section-content block_SL001 section-bg-default">
      <div className="container">
        <div className="block-heading mb-70">
          <h2 className="heading-2 heading mb-20">Our Customers Say It Best</h2>
        </div>
      </div>

      <div className="container-fluid">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="swiper-testimonials"
        >
          <SwiperSlide>
            <div className="card-item">
              <div className="card-brand">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/Epicor_Logo_green_new.png"
                  alt="Epicor"
                />
              </div>
              <div className="card-content">
                <div className="card-testimonials heading-4">
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      “After considering various Revenue Recognition Platforms,
                      we chose RightRev for its ability to handle our complex
                      business needs like allocations, contract modifications,
                      de-bundling of product SKUs, and SSP Analysis, all of
                      which have proven to be manual and complex tasks to
                      perform.”
                    </span>
                  </p>
                </div>
                <div className="card-bottom">
                  <div className="testimonial-author">
                    <img
                      decoding="async"
                      src="https://www.rightrev.com/wp-content/uploads/Headshot_Alex-Amaya_Epicor.jpg"
                      alt="Alex Amaya"
                    />
                    <div className="author-name">
                      Alex Amaya
                      <br />
                      Senior M&A and Strategic Projects Accounting Manager –
                      Epicor
                    </div>
                  </div>
                  <div className="card-btn">
                    <a
                      href="https://www.linkedin.com/in/alex-amaya-cpa-mba-00a55b51/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-link-text"
                    >
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-item">
              <div className="card-brand">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/Docebo_logo-green.png"
                  alt="Docebo"
                />
              </div>
              <div className="card-content">
                <div className="card-testimonials heading-4">
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      “Combining front-end and back-end motions in Salesforce
                      Revenue Cloud and RightRev for automated revenue
                      recognition will optimize our accounting processes for
                      maximum efficiency; saving time, reducing errors, and
                      allowing us to close the books faster.”
                    </span>
                  </p>
                </div>
                <div className="card-bottom">
                  <div className="testimonial-author">
                    <img
                      decoding="async"
                      src="https://www.rightrev.com/wp-content/uploads/Headhsot_Laura-Brodie_Docebo.jpg"
                      alt="Laura Brodie"
                    />
                    <div className="author-name">
                      Laura Brodie
                      <br />
                      VP of Finance, Accounting Policy – Docebo
                    </div>
                  </div>
                  <div className="card-btn">
                    <a
                      href="https://www.linkedin.com/in/laura-brodie-cpa-ca-3b8049a9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-link-text"
                    >
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-item">
              <div className="card-brand">
                <img
                  decoding="async"
                  src="https://www.rightrev.com/wp-content/uploads/Drata_Wordmark_Dark-1-2.png"
                  alt="Drata"
                />
              </div>
              <div className="card-content">
                <div className="card-testimonials heading-4">
                  <p>
                    “From the start of our conversations through go-live, the
                    RightRev team has been fully committed to our success and we
                    appreciate the investment they made in us. We challenged the
                    implementation team with some unique requirements, and they
                    came up with solutions for everything we presented.”
                  </p>
                </div>
                <div className="card-bottom">
                  <div className="testimonial-author">
                    <div className="author-name">
                      Chris Neidlinger
                      <br />
                      VP, Controller – Drata
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-nav">
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonialsection;
