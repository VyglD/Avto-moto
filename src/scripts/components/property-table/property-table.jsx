import React from "react";

const properties = [
  {
    name: `Трансмиссия`,
    value: `Роботизированная`,
  },
  {
    name: `Мощность двигателя, л.с.`,
    value: `249`,
  },
  {
    name: `Тип двигателя`,
    value: `Бензиновый`,
  },
  {
    name: `Привод`,
    value: `Полный`,
  },
  {
    name: `Объем двигателя, л`,
    value: `2.4`,
  },
  {
    name: `Макс. крутящий момент`,
    value: `370/4500`,
  },
  {
    name: `Количество цилиндров`,
    value: `4`,
  }
];

const PropertyTable = () => {
  return (
    <ul className="property-table">
      {
        properties.map((property, index) => (
          <li key={index} className="property-table__property-wrapper">
            <p className="property-table__property-name">
              {property.name}
            </p>
            <p className="property-table__property-value">
              {property.value}
            </p>
          </li>
        ))
      }
    </ul>
  );
};

PropertyTable.propTypes = {};

export default PropertyTable;
