import React from 'react';
import { Categories } from '../components/Categories';
import { SortPopup } from '../components/SortPopup';
import { PizzaBlock } from '../components/PizzaBlock';

export const Home = ({ items }) => {
  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']}
          onClick={(t) => console.log(t)}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((
          obj, //здесь идёт прокидывание пропсов, взятых из db.json, в компонент pizzablock
        ) => (
          <PizzaBlock key={obj.id} obj={obj} />
        ))}
      </div>
    </div>
  );
};
