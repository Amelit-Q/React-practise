const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const cart = (state = initialState, action) => {
  if (action.type === 'ADD_PIZZA_CART')
    return {
      ...state,
      totalPrice: action.payload, //возьми весь initialState и замени в totalPrice значение на то, что придёт в action.payload
    };
  return state;
};

export default cart;
