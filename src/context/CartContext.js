import { createContext, useContext, useReducer } from "react";
import {CartReducer} from "../reducer/CartReducer"

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer,initialState);
 
  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);

    updateTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );

    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updateTotal = (products) =>{
    let total = 0;
    products.forEach(product => {
        total = total + product.price;
        
    });

    dispatch({
        type: "UPDATE_TOTAL",
        payload: {
          total: total,
        },
      });
  }





  const value = {
    cartList: state.cartList,
    total: state.total,
    removeFromCart,
    addToCart,
    updateTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
