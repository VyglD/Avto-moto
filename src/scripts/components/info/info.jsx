import React from "react";
import PropTypes from "prop-types";
import PropertyTable from "../property-table/property-table";
import Reviews from "../reviews/reviews";

const REVIEWS_TITLE = `Отзывы`;

const tabs = [
  {
    title: `Характеристики`,
    component: (<PropertyTable />),
  },
  {
    title: REVIEWS_TITLE,
    component: (<Reviews />),
  },
  {
    title: `Контакты`,
    component: (<div>Контакты</div>),

  }
];

const Info = (props) => {
  const {onBlankLinkClick} = props;

  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <section className="info">
      <h2 className="info__title visually-hidden">Подробная информация</h2>
      <ul className="info__tabs-list">
        {
          tabs.map((tab, index) => {
            const active = activeTab === tab;
            const customClass = active ? `info__tab--active` : ``;

            return (
              <li key={index} className="info__tab-wrapper">
                <button
                  className={`info__tab ${customClass}`}
                  type="button"
                  onClick={setActiveTab.bind(null, tab)}
                  disabled={active}
                >
                  {tab.title}
                </button>
              </li>
            );
          })
        }
      </ul>
      {
        activeTab.title === REVIEWS_TITLE
          ? <Reviews onBlankLinkClick={onBlankLinkClick} />
          : activeTab.component
      }
    </section>
  );
};

Info.propTypes = {
  onBlankLinkClick: PropTypes.func.isRequired,
};

export default Info;
