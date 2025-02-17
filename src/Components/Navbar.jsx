import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-xl rightrev-navbar header-white">
      <nav className="container" aria-label="Main navigation">
        {/* Mobile Header */}
        <div className="header-mobile  ">
          <a
            className="navbar-brand "
            href="https://www.rightrev.com"
            aria-label="Rightrev"
          >
            <img
              src="https://www.rightrev.com/wp-content/uploads/logo.svg"
              alt="RightRev Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Main Menu */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul id="rightrev-header-menu" className="navbar-nav">
            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownProducts"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PRODUCTS
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownProducts"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.rightrev.com/product-standalone/"
                  >
                    Standalone
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.rightrev.com/product-salesforce/"
                  >
                    Salesforce
                  </a>
                </li>
              </ul>
            </li>

            {/* Solutions Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownSolutions"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SOLUTIONS
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownSolutions"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.rightrev.com/solutions-asc-606/"
                  >
                    ASC 606
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.rightrev.com/use-case-subscription/"
                  >
                    Use Case – Subscription
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.rightrev.com/use-case-consumption/"
                  >
                    Use Case – Consumption
                  </a>
                </li>
              </ul>
            </li>

            {/* Why RightRev */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.rightrev.com/why-rightrev/"
              >
                WHY RIGHTREV
              </a>
            </li>

            {/* Resources */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.rightrev.com/resources/"
              >
                RESOURCES
              </a>
            </li>

            {/* Company Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownCompany"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                COMPANY
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownCompany"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.rightrev.com/about-us/"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.rightrev.com/careers/"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.rightrev.com/contact-us/"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                href="https://www.rightrev.com/request-a-demo/"
                className="btn btn-outline "
                title="REQUEST A DEMO"
              >
                <span>REQUEST A DEMO</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
