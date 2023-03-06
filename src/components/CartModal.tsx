import { CartContext, CartDispatchContext } from "@/pages/_app";
import React, { useContext } from "react";

const CartModal = () => {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const amount = 0;
  if (cart && cart.show)
    return (
      <>
        <div
          className="fixed top-0 left-0 w-full h-full z-40 bg-[#9f9e9e] opacity-75"
          onClick={() => {
            if (dispatch) dispatch({ type: "toggle" });
          }}
        ></div>
        <div className="absolute top-0 right-0 z-50 flex flex-col p-5 h-full w-[400px] bg-white">
          <div className="flex gap-[10px]">
            <div>YOUR CART</div>
            <div>{`${amount} item ${amount > 1 ? "s" : ""}`}</div>
            <div
              className="cursor-pointer ml-auto"
              onClick={() => {
                if (dispatch) dispatch({ type: "toggle" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  return null;
};

export default CartModal;
