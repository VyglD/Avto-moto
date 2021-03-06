import React from "react";

const tabs = [
  {
    title: `Характеристики`,
    component: (<div>Характеристики</div>),
  },
  {
    title: `Отзывы`,
    component: (<div>Отзывы</div>),
  },
  {
    title: `Контакты`,
    component: (<div>Контакты</div>),
  }
];

const Info = () => {
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
      {activeTab.component}
    </section>
  );
};

Info.propTypes = {};

export default Info;
