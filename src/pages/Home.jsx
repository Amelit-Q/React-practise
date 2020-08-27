import React from 'react';
import { Categories } from '../components/Categories';
import { SortPopup } from '../components/SortPopup';
import { PizzaBlock } from '../components/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from './../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
const itemsType = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавит', type: 'alphabet' },
];

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClick={onSelectCategory} />
        <SortPopup items={itemsType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((
            obj, //здесь идёт прокидывание пропсов, взятых из db.json, в компонент pizzablock
          ) => <PizzaBlock key={obj.id} obj={obj} />)}
      </div>
    </div>
  );
};
