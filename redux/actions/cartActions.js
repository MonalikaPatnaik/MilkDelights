import axios from "axios";
import * as actionTypes from "../constants/cartConstant";
import { auth, db } from "../../firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

const URL = "https://milk-house-azure.vercel.app";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    const cartItem = {
      ...data,
      quantity,
    };

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: cartItem,
    });

    // Check if the user is logged in
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        cart: arrayUnion(cartItem),
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TO_CART_ERROR,
      payload: error.message,
    });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    });

    // Remove item from Firestore if user is logged in
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userDoc = await getDoc(userRef);
      const updatedCart = userDoc.data().cart.filter((item) => item.id !== id);

      await updateDoc(userRef, {
        cart: updatedCart,
      });
    }
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};
