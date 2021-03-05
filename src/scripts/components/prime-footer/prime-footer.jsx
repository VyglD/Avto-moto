import React from "react";
import PropTypes from "prop-types";

const links = [
  `Корпоративным клиентам`,
  `Клиентам`,
  `Аренда авто`,
  `Каршеринг`,
  `Как продать авто`,
  `Traid-in`,
  `Test draiv`,
];

const PrimeFooter = (props) => {
  const {onBlankLinkClick} = props;

  return (
    <footer className="prime-footer">
      <nav className="prime-footer__nav">
        <ul className="prime-footer__nav-links-list">
          {
            links.map((link, index) => (
              <li key={index} className="prime-footer__nav-link-wrapper">
                <a
                  className="prime-footer__nav-link"
                  href="#blank"
                  onClick={onBlankLinkClick}
                >
                  {link}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </footer>
  );
};

PrimeFooter.propTypes = {
  onBlankLinkClick: PropTypes.func.isRequired,
};

export default PrimeFooter;
