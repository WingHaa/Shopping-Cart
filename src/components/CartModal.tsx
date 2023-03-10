import { CartContext, CartDispatchContext } from "@/pages/_app";
import productDatabase from "@/utils/products-database";
import React, { useContext } from "react";
import Image from "next/image";

const CartModal = () => {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  const amount = cart?.items.reduce(
    (currentItem, nextItem) => currentItem + nextItem.amount,
    0
  );

  const totalCartPrice = cart?.items.reduce(
    (currentItem, nextItem) =>
      currentItem + nextItem.amount * nextItem.item.price,
    0
  );

  const cartItems = cart?.items.map((item) => {
    const setName = productDatabase.find(
      (set) => set.kits[0].set === item.item.set
    )!.name;

    const itemName = item.item.name;
    const itemImg = item.item.img;
    const itemPrice = item.item.price;

    return (
      <div key={itemName}>
        <div className="flex items-stretch">
          <div className="mr-4">
            <Image
              src={itemImg}
              alt={itemName}
              style={{ objectFit: "cover" }}
              height="92"
            />
          </div>
          <div className="text-xs flex flex-col items-stretch flex-1">
            <div className="grow-0 flex">
              <div className="font-medium text-ellipsis leading-5 flex-1">
                <div>{setName}</div>
              </div>
              <div
                className="underline cursor-pointer select-none"
                onClick={() => {
                  if (dispatch) {
                    dispatch({ type: "remove", name: itemName, set: setName });
                  }
                }}
              >
                Remove
              </div>
            </div>
            <div className="flex-1 text-ellipsis text-xs leading-[20px] whitespace-normal">
              {itemName}
            </div>
            <div className="flex grow-0">
              <div className="flex flex-1">
                <div className="flex w-16 justify-between border-[#9f9e9e] border-[1px]">
                  <div
                    className="pl-[10px] pr-[5px] cursor-pointer select-none"
                    onClick={() => {
                      if (dispatch)
                        dispatch({
                          type: "reduce",
                          name: itemName,
                          set: setName,
                        });
                    }}
                  >
                    -
                  </div>
                  <div>{item.amount}</div>
                  <div
                    className="pl-[5px] pr-[10px] cursor-pointer select-none"
                    onClick={() => {
                      if (dispatch)
                        dispatch({ type: "add", name: itemName, set: setName });
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
              <div>{`$${itemPrice * item.amount}`}</div>
            </div>
          </div>
        </div>
        <div className="h-5"></div>
        <div className="border-[#9f9e9e] border-b-[1px]"></div>
        <div className="h-5"></div>
      </div>
    );
  });

  if (cart && cart.show)
    return (
      <>
        <div
          className="fixed top-0 left-0 w-full h-full z-40 bg-[#9f9e9e] opacity-75"
          onClick={() => {
            if (dispatch) dispatch({ type: "toggle" });
          }}
        ></div>
        <div className="absolute top-0 right-0 z-50 flex flex-col p-5 h-full w-full md:w-[400px] bg-white">
          <div className="flex gap-[10px]">
            <div className="font-medium text-xl">YOUR CART</div>
            <div>{`${amount} item${amount! > 1 ? "s" : ""}`}</div>
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
          <div
            className="cart-item-container flex flex-col flex-1"
            style={{
              overflow: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cartItems}
          </div>
          <div className="border-b-[1px] b-[#9f9e9e] border-solid"></div>
          <div className="h-[30px]"></div>
          <div className="flex font-medium text-xs">
            <div className="flex-1">Estimated total:</div>
            <div>${totalCartPrice}</div>
          </div>
          <div className="h-[15px]"></div>
          <div className="flex w-full items-center justify-center text-white bg-black">
            <button className="h-[46px] uppercase">Checkout</button>
          </div>
        </div>
      </>
    );
  return null;
};

export default CartModal;
