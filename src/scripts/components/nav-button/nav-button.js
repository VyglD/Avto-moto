import React from "react";
import PropTypes from "prop-types";

const CustomClass = {
  CROSS: `nav-button--cross`,
  BURGER: `nav-button--burger`,
};

const NavButton = (props) => {
  const {navListRef, NavListClass, className} = props;

  const navButtonRef = React.useRef();

  const handleNavButtonClick = React.useCallback(
      () => {
        const button = navButtonRef.current;

        if (navListRef.current.classList.contains(NavListClass.VISIBLE)) {
          if (button.classList.contains(CustomClass.CROSS)) {
            button.classList.remove(CustomClass.CROSS);
          }

          button.classList.add(CustomClass.BURGER);

          navListRef.current.classList.remove(NavListClass.VISIBLE);
          navListRef.current.classList.add(NavListClass.HIDDEN);
        } else {
          if (navListRef.current.classList.contains(NavListClass.HIDDEN)) {
            navListRef.current.classList.remove(NavListClass.HIDDEN);
          }

          if (button.classList.contains(CustomClass.BURGER)) {
            button.classList.remove(CustomClass.BURGER);
          }

          button.classList.add(CustomClass.CROSS);

          navListRef.current.classList.add(NavListClass.VISIBLE);
        }
      },
      [navListRef, NavListClass]
  );

  return (
    <button
      ref={navButtonRef}
      className={`${className} nav-button`}
      type="button"
      onClick={handleNavButtonClick}
    >
      <span>Показать/скрыть меню</span>
    </button>
  );
};

NavButton.propTypes = {
  navListRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLInputElement)
  }).isRequired,
  NavListClass: PropTypes.exact({
    VISIBLE: PropTypes.string.isRequired,
    HIDDEN: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
};

export default NavButton;
