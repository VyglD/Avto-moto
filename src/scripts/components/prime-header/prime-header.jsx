import React from "react";
import PropTypes from "prop-types";

import logo from "../../../images/logo.svg";

const links = [
  `Автомобили`,
  `Контакты`,
  `Услуги`,
  `Вакансии`
];

const PrimeHeader = (props) => {
  const {onBlankLinkClick} = props;

  return (
    <header className="prime-header">
      <div className="prime-header__content">
        <img
          className="prime-header__logo"
          src={logo}
          width="134"
          height="55"
          alt="AVTO MOTO."
        />
        <nav className="prime-header__nav">
          <ul className="prime-header__nav-links-list">
            {
              links.map((link, index) => (
                <li key={index} className="prime-header__nav-link-wrapper">
                  <a
                    className="prime-header__nav-link"
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
      </div>
    </header>
  );
};

PrimeHeader.propTypes = {
  onBlankLinkClick: PropTypes.func.isRequired,
};

export default PrimeHeader;
