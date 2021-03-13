import React from "react";
import NavButton from "../nav-button/nav-button";
import {handleBlankLinkClick} from "../../utils";

import logo from "../../../images/logo.svg";

const LINKS = [
  `Автомобили`,
  `Контакты`,
  `Услуги`,
  `Вакансии`
];

const NavLinksClass = {
  VISIBLE: `prime-header__nav-links-list--visible`,
  HIDDEN: `prime-header__nav-links-list--hidden`,
};

const PrimeHeader = () => {
  const navListRef = React.useRef();

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
          <NavButton
            className="prime-header__nav-button"
            navListRef={navListRef}
            NavListClass={NavLinksClass}
          />
          <div className="prime-header__nav-links-wrapper">
            <ul
              ref={navListRef}
              className="prime-header__nav-links-list"
            >
              {
                LINKS.map((link, index) => (
                  <li key={index} className="prime-header__nav-link-wrapper">
                    <a
                      className="prime-header__nav-link"
                      href="#blank"
                      onClick={handleBlankLinkClick}
                    >
                      {link}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

PrimeHeader.propTypes = {};

export default PrimeHeader;
