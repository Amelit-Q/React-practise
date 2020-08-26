import React, { useState } from 'react';

export const Categories = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (id) => {
    setActiveItem(id);
    onClick(id);
  };
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items && //проверка на null !
          items.map((t, id) => (
            <li
              className={activeItem === id ? 'active' : ''}
              onClick={() => onSelectItem(id)}
              key={id}>
              {t}
            </li>
          ))}
      </ul>
    </div>
  );
};
