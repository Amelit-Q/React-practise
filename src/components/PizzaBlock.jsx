import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from './Button';

export const PizzaBlock = ({ obj }) => {
  const [activeType, setActiveType] = useState(obj.types[0]);
  const [sizes, setSizes] = useState(obj.sizes[0]);
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const handleTypeChange = (id) => {
    setActiveType(id);
  };
  const handleSizeChange = (id) => {
    setSizes(id);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={obj.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{obj.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, id) => (
            <li
              key={id}
              className={classNames({
                //здесь проверяется, есть ли в obj (данные из db.json) дополнительные "types" (тонкое - 0, традиционная - 1), если нет какого-то одно id, то ставиться класс disabled
                active: activeType === id,
                disabled: !obj.types.includes(id),
              })}
              onClick={() => handleTypeChange(id)}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, id) => (
            <li
              key={id}
              onClick={() => handleSizeChange(id)}
              className={classNames({
                active: sizes === id,
                disabled: !obj.sizes.includes(size),
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{obj.price}</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};
PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf([PropTypes.number]).isRequired, //в массиве обязательно должны содержаться только числа
  sizes: PropTypes.arrayOf([PropTypes.number]).isRequired,
};

PizzaBlock.defaultProps = {
  name: '',
  price: 0,
  types: [],
  sizes: [],
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
