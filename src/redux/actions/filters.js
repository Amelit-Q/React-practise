// Action Creator - функция создающая action, тоесть принимает динамические данные и прокидывает их уже в сам action
export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

//Action
export const setCategory = (categoryIndex) => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
});
