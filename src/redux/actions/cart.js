SET_TOTAL_PRICE;
SET_TOTAL_COUNT;

export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});
