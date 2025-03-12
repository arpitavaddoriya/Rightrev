import React from "react";
import "./Revenusection.css";

const Revenusection = () => {
  return (
    <section className="Revenu-content Revenu_TXT001 Revenu-bg-green-light chevron-visible">
      <div className="container">
        <div className="Revenu-caption">
          <div className="centerd-icon-heading mb-30">
            <img decoding="async" src="accent-title.svg" alt="Accent Icon" />
          </div>

          <h1 className="Revenu-default heading gradient-animation-dark mb-30">
            A Leader in Automated <br />
            Revenue Management
          </h1>

          <div className="text-description-18 mb-30">
            <p className="p1">
              RightRev is named a Leader in the MGI 360 Automated Revenue
              Management Buyer’s Guide. See how <br /> RightRev stacks up
              against Revenue Management systems in various categories for
              complexity, agility, <br /> and volume.
            </p>

            <p>&nbsp;</p>

            <p>
              <img
                fetchpriority="high"
                decoding="async"
                className="alignnone wp-image-2623"
                src="https://www.rightrev.com/wp-content/uploads/MGI-Rating-2-300x200.png"
                alt="Advanced Revenue Management Software Quadrant"
                width="400"
                height="318"
                srcSet="
                  https://www.rightrev.com/wp-content/uploads/MGI-Rating-2-300x200.png 300w,
                  https://www.rightrev.com/wp-content/uploads/MGI-Rating-2-1024x683.png 1024w,
                  https://www.rightrev.com/wp-content/uploads/MGI-Rating-2-768x512.png 768w,
                  https://www.rightrev.com/wp-content/uploads/MGI-Rating-2.png 1200w
                "
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </p>
          </div>

          <div className="Revenu-btn">
            <a
              href="https://www.rightrev.com/mgi-research-arm-ratings/"
              className="Revenu btn-primary"
            >
              <span>Download Report</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revenusection;
