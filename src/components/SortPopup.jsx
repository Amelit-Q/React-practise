import React from 'react';
import PropTypes from 'prop-types';

export const SortPopup = React.memo(({ items, onClickSortType, activeSortType }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortReference = React.useRef();
  const activeLabel = items.find((obj) => obj.type === activeSortType).name; //берём какой-то объект и вытаскиваем свойство name (объект берётся из массива благодапя методу find)

  const onSelectItem = (id) => {
    onClickSortType(id);
    setVisiblePopup(false);
  };

  const toggleVisiblePopup = () => {
    return setVisiblePopup(!visiblePopup);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick); //если произошёл первый рендер, то вешаем обработчик 'clicl', на body и добавляем функцию handleOutsideClick, она будет обращаться к outsideclick функции, при каждом клике на body и выполнять её соответственно
    console.log(sortReference.current);
  }, []);

  const handleOutsideClick = (e) => {
    //функция указывает на то, что когда вне области visiblePopup был произведн клик, включается setVisiblePopup, равный false, тоесть popup закрывается
    if (!e.path.includes(sortReference.current)) {
      setVisiblePopup(false);
    }
    //вёрстка popup хранится ниже, в return, вся эта область считается visiblePopup
  };

  return (
    <div ref={sortReference} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items && //проверка на null !
              items.map((obj, id) => (
                <li
                  onClick={() => onSelectItem(obj)}
                  className={activeSortType === id ? 'active' : ''}
                  key={id}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
  items: [],
};
