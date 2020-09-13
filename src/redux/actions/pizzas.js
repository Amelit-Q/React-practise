import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  // в thunk, надо работать с actions через dispatch
  //thunk - ассинхронный action
  //метод для получения и сохранения пицц
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}$_order=desc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  //метод для сохранения пицц
  type: 'SET_PIZZAS',
  payload: items,
});
