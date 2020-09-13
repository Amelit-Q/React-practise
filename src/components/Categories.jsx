import React from 'react';
import PropTypes from 'prop-types';

export const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items && //проверка на null !
          items.map((t, id) => (
            <li
              className={activeCategory === id ? 'active' : ''}
              onClick={() => onClickCategory(id)}
              key={id}>
              {t}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};
