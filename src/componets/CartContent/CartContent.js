import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <>
      <CartElements />
      <CartTotal />
    </>
  ) : (
    <h2 className='cart-message-center'>Your cart is empty</h2>
  );
};

export default CartContent;
