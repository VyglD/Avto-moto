import React from "react";
import PropertyTable from "../property-table/property-table";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";
import {animate} from "../../utils";

const TABS = [
  {
    title: `Характеристики`,
    component: (<PropertyTable />),
  },
  {
    title: `Отзывы`,
    component: (<Reviews />),
  },
  {
    title: `Контакты`,
    component: (<Contacts />),

  }
];

const Info = () => {
  const [activeTab, setActiveTab] = React.useState(TABS[0]);

  const tabsRef = React.useRef();
  const availableOffset = React.useRef();
  const currentOffset = React.useRef(0);
  const moved = React.useRef(false);

  const setOffset = React.useCallback(
      (offset) => {
        tabsRef.current.style.setProperty(`--info-tabs-offset`, `${offset}px`);
      },
      []
  );

  const calculateAvailableOffset = React.useCallback(
      () => {
        const visibleWidth = tabsRef.current.offsetWidth;
        const wholeWidth = tabsRef.current.scrollWidth;
        let offset = wholeWidth - visibleWidth;
        offset = offset < 0 ? 0 : offset;

        return offset;
      },
      []
  );

  const calculateNewOffset = React.useCallback(
      (shift) => {
        const negativeOffset = -1 * availableOffset.current;
        let offset = shift + currentOffset.current;
        offset = offset > 0 ? 0 : offset;
        offset = offset < negativeOffset
          ? negativeOffset
          : offset;

        return offset;
      },
      []
  );

  React.useEffect(
      () => {
        availableOffset.current = calculateAvailableOffset();
      },
      [calculateAvailableOffset]
  );

  const handleKeyDownOnTab = React.useCallback(
      () => {
        moved.current = false;
      },
      []
  );

  const handleActiveTabClick = React.useCallback(
      () => {
        moved.current = false;
      },
      []
  );

  const handleTabClick = React.useCallback(
      (tabWrapperRef, tab) => {
        if (moved.current) {
          moved.current = false;
        } else {
          const oldOffset = currentOffset.current;
          let newOffset = tabWrapperRef.current.offsetLeft;
          newOffset = newOffset > availableOffset.current
            ? -1 * availableOffset.current
            : -1 * newOffset;

          currentOffset.current = newOffset;
          let difference = newOffset - oldOffset;

          animate({
            duration: 200,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              setOffset(oldOffset + difference * progress);
            }
          });

          setActiveTab(tab);
        }
      },
      [setOffset]
  );

  const handleResizeTabs = React.useCallback(
      () => {
        availableOffset.current = calculateAvailableOffset();

        if (availableOffset.current < Math.abs(currentOffset.current)) {
          currentOffset.current = -1 * availableOffset.current;
          setOffset(currentOffset.current);
        }
      },
      [calculateAvailableOffset, setOffset]
  );

  const handleMouseDownOnTabs = React.useCallback(
      (downEvt) => {
        let newOffset = currentOffset.current;
        moved.current = false;

        const handleMouseMove = (moveEvt) => {
          newOffset = calculateNewOffset(moveEvt.x - downEvt.clientX);

          setOffset(newOffset);

          moved.current = true;
        };

        const handleMouseUp = () => {
          currentOffset.current = newOffset;

          document.removeEventListener(`mousemove`, handleMouseMove);
          document.removeEventListener(`mouseup`, handleMouseUp);
        };

        document.addEventListener(`mousemove`, handleMouseMove);
        document.addEventListener(`mouseup`, handleMouseUp);
      },
      [calculateNewOffset, setOffset]
  );

  const handleTouchTabsStart = React.useCallback(
      (startEvt) => {
        let newOffset = currentOffset.current;
        moved.current = false;

        const handleTouchMove = (moveEvt) => {
          const shift = moveEvt.touches[0].pageX - startEvt.touches[0].pageX;

          newOffset = calculateNewOffset(shift);

          setOffset(newOffset);

          moved.current = true;
        };

        const handleTouchEnd = () => {
          currentOffset.current = newOffset;

          document.removeEventListener(`touchmove`, handleTouchMove);
          document.removeEventListener(`touchend`, handleTouchEnd);
        };

        document.addEventListener(`touchmove`, handleTouchMove);
        document.addEventListener(`touchend`, handleTouchEnd);
      },
      [calculateNewOffset, setOffset]
  );

  React.useEffect(
      () => {
        window.addEventListener(`resize`, handleResizeTabs);

        return () => {
          window.removeEventListener(`resize`, handleResizeTabs);
        };
      },
      [handleResizeTabs]
  );

  return (
    <section className="info" tabIndex="-1">
      <h2 className="info__title visually-hidden">Подробная информация</h2>
      <ul
        ref={tabsRef}
        className="info__tabs-list"
        onMouseDown={handleMouseDownOnTabs}
        onTouchStart={handleTouchTabsStart}
      >
        {
          TABS.map((tab, index) => {
            const active = activeTab === tab;
            const customTabWrapperClass = active
              ? `info__tab-wrapper--active`
              : ``;
            const customTabClass = active ? `info__tab--active` : ``;
            const tabWrapperRef = React.createRef();
            const handleClick = active
              ? handleActiveTabClick
              : handleTabClick.bind(null, tabWrapperRef, tab);

            return (
              <li
                key={index}
                ref={tabWrapperRef}
                className={`info__tab-wrapper ${customTabWrapperClass}`}
              >
                <button
                  className={`info__tab ${customTabClass}`}
                  type="button"
                  onClick={handleClick}
                  onKeyDown={handleKeyDownOnTab}
                  disabled={active}
                >
                  {tab.title}
                </button>
              </li>
            );
          })
        }
      </ul>
      {activeTab.component}
    </section>
  );
};

Info.propTypes = {};

export default Info;
