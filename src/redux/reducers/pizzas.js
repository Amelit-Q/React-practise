const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  } else if (action.type === 'SET_LOADED') {
    //если пришёл action SET_LOADED, тогда, isLoaded меняем на то, что пришло в setLoaded
    return {
      ...state,
      isLoaded: action.payload,
    };
  }
  return state;
};

export default pizzas;
