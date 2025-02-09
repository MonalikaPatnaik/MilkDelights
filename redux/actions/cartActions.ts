import axios from "axios";
import { AppDispatch } from "../store";
import * as actionTypes from "../constants/cartConstant";
import { auth, db } from "../../firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

const URL = "https://milk-house-azure.vercel.app";

export interface Product {
  id: string;
  title: string;
  price: {
    cost: number;
    mrp: number;
    discount: string;
  };
  url: string;
  quantity?: number;
}

// ✅ Add to Cart Action
export const addToCart = (id: string, quantity: number) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios.get<Product>(`${URL}/product/${id}`);
    const cartItem = { ...data, quantity };

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: cartItem,
    });

    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, { cart: arrayUnion(cartItem) });
    }
  } catch (error: any) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
  }
};

// ✅ Remove from Cart Action
export const removeFromCart = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });

    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userDoc = await getDoc(userRef);
      const updatedCart = userDoc.data()?.cart.filter((item: Product) => item.id !== id);

      await updateDoc(userRef, { cart: updatedCart });
    }
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};
