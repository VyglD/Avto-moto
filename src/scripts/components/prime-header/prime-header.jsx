import React from "react";

import logo from "../../../images/logo.svg";

const PrimeHeader = () => {
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
            <li className="prime-header__nav-link-wrapper">
              <a className="prime-header__nav-link" href="#blank">
                Автомобили
              </a>
            </li>
            <li className="prime-header__nav-link-wrapper">
              <a className="prime-header__nav-link" href="#blank">
                Контакты
              </a>
            </li>
            <li className="prime-header__nav-link-wrapper">
              <a className="prime-header__nav-link" href="#blank">
                Услуги
              </a>
            </li>
            <li className="prime-header__nav-link-wrapper">
              <a className="prime-header__nav-link" href="#blank">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

PrimeHeader.propTypes = {};

export default PrimeHeader;
