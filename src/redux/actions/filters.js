// Action Creator - функция создающая action, тоесть принимает динамические данные и прокидывает их уже в сам action
export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
});

//Action
export const setCategory = (categoryIndex) => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
});
