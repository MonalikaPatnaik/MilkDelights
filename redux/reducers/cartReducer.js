// React import not needed for reducers
import * as actionType from '../constants/cartConstant'

const initialState = {
  cartItems: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === existingItem.id ? item : cartItem
          ),
        };
      }
      
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default cartReducer