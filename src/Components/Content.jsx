import React from "react";
import "./Content.css"; // Import your CSS file for styles

// Reusable Card Component
const Card = ({ icon, alt, title, description }) => (
  <li>
    <div className="card-item">
      <img className="card-icon mb-20" src={icon} alt={alt} loading="lazy" />
      <h3 className="card-title heading-4">{title}</h3>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  </li>
);

// Card Data (Array for easier management)
const cardData = [
  {
    icon: "https://www.rightrev.com/wp-content/uploads/Configurable-Revenue-Rules.svg",
    alt: "Configurable Revenue Rules",
    title: "Configurable Revenue Rules",
    description:
      "Configure revenue recognition rules to match your performance obligations—no coding necessary. Assign ratable or point-in-time revenue rules for separate performance obligations in a single revenue contract.",
  },
  {
    icon: "https://www.rightrev.com/wp-content/uploads/Event-Based-Revenue-Recognition_Light_v2.svg",
    alt: "Event-Based Revenue Recognition",
    title: "Event-Based Revenue Recognition",
    description:
      "Don’t limit revenue recognition to only bookings or billings; instead, configure unlimited events, such as product delivery, completed milestones, percentage of completion, provisioning, etc.",
  },
  {
    icon: "https://www.rightrev.com/wp-content/uploads/SSP-icon.svg",
    alt: "SSP icon",
    title: "Standalone Selling Price Calculations & Analysis",
    description:
      "Automate tedious SSP calculations using intelligent historical analysis or our SSP Calculator. Automatically apply SSPs to performance obligations and allocate across bundled contracts, saving you time and headaches.",
  },
  {
    icon: "https://www.rightrev.com/wp-content/uploads/Contract-Modifications.svg",
    alt: "Contract Modifications",
    title: "Contract Modifications",
    description:
      "Contract modifications occur at any time during a contract’s lifecycle. RightRev’s predefined modification categories make this process easy by automatically detecting various changes, applying revenue rules, and recalculating revenue if necessary.",
  },
  {
    icon: "https://www.rightrev.com/wp-content/uploads/GAAP-Revenue-Reporting.svg",
    alt: "GAAP Revenue Reporting",
    title: "GAAP Revenue Reporting and Waterfall",
    description:
      "RightRev comes with out-of-the-box dashboards and hundreds of pre-calculated metrics to enable ad-hoc reporting. Revenue Waterfall reports provide visibility for planned and recognized revenue.",
  },
  {
    icon: "https://www.rightrev.com/wp-content/uploads/Journal-Entry-icon.svg",
    alt: "Journal Entry Icon",
    title: "Journal Entries",
    description:
      "Post daily or periodic revenue Journal Entries to your general ledger. Conveniently create Topside Journal Entries directly in RightRev.",
  },
  {
    icon: "https://www.rightrev.com/wp-content/uploads/usage-icon-2.svg",
    alt: "Consumption icon",
    title: "Consumption",
    description:
      "Recognize revenue for a tiered pricing structure, pay-as-you-go, overages, minimums, or credit drawdowns. RightRev can recognize revenue in the correct accounting period, regardless of invoicing cadence.",
  },
  {
    icon: "https://www.rightrev.com/wp-content/uploads/Volume-icon-2-2.svg",
    alt: "High volume icon",
    title: "High Volume Transactions",
    description:
      "Processes high volumes of revenue transactions at speed. RightRev is proven to process nearly a billion transactions within minutes for high-volume needs.",
  },
];

// Main Section Component
const Content = () => {
  return (
    <section className="section-content block_AB001 section-bg-green">
      <div className="container">
        <div className="block-heading mb-70">
          <h2 className="heading-default heading mb-20">
            Turn complex revenue recognition <br /> into smooth automation
          </h2>
          <div className="text-paragraph-18 text-subtitle">
            <p>
              <span style={{ fontWeight: 400 }}>
                ASC 606 / IFRS 15 compliance for any revenue model
              </span>
            </p>
          </div>
        </div>
        {/* Card List */}
        <ul className="card-list">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Content;
