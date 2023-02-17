import Layout from "@/components/Layout";
import { getProduct } from "@/utils/getProduct";
import React, { useReducer, createContext, Dispatch } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { KeycapKits } from "@/models/products";

interface CartItem {
  item: KeycapKits;
  amount: number;
}
type ACTIONTYPE =
  | { type: "add"; name: string; set: string }
  | { type: "remove"; name: string; set: string };

export const CartContext = createContext<CartItem[] | null>(null);
export const CartDispatchContext = createContext<Dispatch<ACTIONTYPE> | null>(
  null
);

export default function App({ Component, pageProps }: AppProps) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

const cartReducer = (cart: CartItem[], action: ACTIONTYPE) => {
  switch (action.type) {
    case "add": {
      if (cart.find((product) => product.item.name === action.name)) {
        return cart.map((product) => {
          if (product.item.name === action.name) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        });
      }
      const newItem = getProduct(action.name, action.set);
      if (!newItem) throw new Error("Item not found");
      return [...cart, { item: newItem, amount: 1 }];
    }
    case "remove": {
      if (
        cart.find(
          (product) => product.item.name === action.name && product.amount > 1
        )
      ) {
        return cart.map((product) => {
          if (product.item.name === action.name) {
            return { ...product, amount: product.amount - 1 };
          }
          return product;
        });
      }
      return cart.filter((product) => product.item.name === action.name);
    }
    default:
      throw new Error("Unknown cart action type");
  }
};
