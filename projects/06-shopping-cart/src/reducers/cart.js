export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, payload) => {
    const { id } = payload;
    const productInTheCartIndex = state.findIndex((item) => item.id === id);

    if (productInTheCartIndex >= 0) {
      // usando structuredClone - hace una copia profunda - LEGIBLE
      /* const newState = structuredClone(state);
      newState[productInTheCartIndex].quantity += 1; */

      // usando map - hace una copia superficial - BABY
      /* const newState = state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }); */

      // usando slice y spread operator - ES EL MÁS RÁPIDO PORQUE NO ITERA
      const newState = [
        ...state.slice(0, productInTheCartIndex),
        {
          ...state[productInTheCartIndex],
          quantity: state[productInTheCartIndex].quantity + 1,
        },
        ...state.slice(productInTheCartIndex + 1),
      ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        ...payload,
        quantity: 1,
      },
    ];

    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, payload) => {
    const { id } = payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, actionPayload) : state;

  // Usando switch
  /* switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInTheCartIndex = state.findIndex((item) => item.id === id);

      if (productInTheCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInTheCartIndex].quantity += 1;
        return newState;
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      return cartInitialState;
    }
  }

  return state; */
};
