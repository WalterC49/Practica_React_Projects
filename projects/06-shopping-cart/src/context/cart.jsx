/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

// 1. Crear contexto
export const CartContext = createContext();

function useCartReducer() {
  // useReducer sirve para reducir la lógica de un useState
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (product) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: product });

  const clearCart = (product) =>
    dispatch({ type: "CLEAR_CART", payload: product });

  return { state, addToCart, removeFromCart, clearCart };
}

// 2. Crear proveedor
export function CartProvider({ children }) {
  /* const [cart, setCart] = useState([]);

    const addToCart = (product) => {
    // check if the procuct is already in the cart
    const productInTheCartIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    // if product it's in the cart
    if (productInTheCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInTheCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // if product it's not in the cart
    setCart((prevState) => {
      [
        ...prevState,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const clearCart = () => setCart([]); */

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
