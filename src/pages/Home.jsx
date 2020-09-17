import React from 'react';
import { Categories } from '../components/Categories';
import { SortPopup } from '../components/SortPopup';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from './../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { LoadingBlock } from '../components/PizzaBlock/LoadingBlock';

const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
const itemsType = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'title', order: 'asc' },
];

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy, setSortBy } = useSelector(({ filter }) => filter);
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category)); //приложение при первом render, отправляет action
    //dispatch выполняется после get запроса (промис), когда произойдёт первый рендер, отправь на сервак запрос по указанной ссылке; //после ответа от сервера (данные, выполни функцию dispatch), функция получает все пиццы, создаёт объект, и этот объект передаёт в dispatch
  }, [category, sortBy]); // после dispatch уже передаёт это всё внутрь redux

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((name) => {
    dispatch(setSortBy(name));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={categoryNames}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          items={itemsType}
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded //если свойство isLoaded true, выполняется код слева, иначе идёт отрисовка захардкожженного компонента, который используется, покуда не придёт ответ от backend
          ? items.map((
              obj, //здесь идёт прокидывание пропсов, взятых из db.json, в компонент pizzablock
            ) => <PizzaBlock key={obj.id} obj={obj} isLoading={true} />)
          : Array(12)
              .fill(0)
              .map((index, id) => <LoadingBlock key={id} />)}
      </div>
    </div>
  );
};
