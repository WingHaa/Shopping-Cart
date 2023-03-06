import Layout from "@/components/Layout";
import { getProduct } from "@/utils/getProduct";
import React, { useReducer, createContext, Dispatch } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { KeycapKits } from "@/models/products";
import CartModal from "@/components/CartModal";

interface CartItem {
  item: KeycapKits;
  amount: number;
}

interface Cart {
  items: CartItem[];
  show: true | false;
}

type ACTIONTYPE =
  | { type: "add"; name: string; set: string }
  | { type: "remove"; name: string; set: string }
  | { type: "toggle" };

export const CartContext = createContext<Cart | null>(null);
export const CartDispatchContext = createContext<Dispatch<ACTIONTYPE> | null>(
  null
);

export default function App({ Component, pageProps }: AppProps) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], show: false });

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        <div>
          <CartModal />
        </div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

const cartReducer = (cart: Cart, action: ACTIONTYPE) => {
  switch (action.type) {
    case "add": {
      if (cart.items.find((product) => product.item.name === action.name)) {
        return {
          ...cart,
          items: cart.items.map((product) => {
            if (product.item.name === action.name) {
              return { ...product, amount: product.amount + 1 };
            }
            return product;
          }),
        };
      }
      const newItem = getProduct(action.name, action.set);
      if (!newItem) throw new Error("Item not found");
      return { ...cart, items: [...cart.items, { item: newItem, amount: 1 }] };
    }
    case "remove": {
      if (
        cart.items.find(
          (product) => product.item.name === action.name && product.amount > 1
        )
      ) {
        return {
          ...cart,
          items: cart.items.map((product) => {
            if (product.item.name === action.name) {
              return { ...product, amount: product.amount - 1 };
            }
            return product;
          }),
        };
      }
      return {
        ...cart,
        items: cart.items.filter(
          (product) => product.item.name === action.name
        ),
      };
    }
    case "toggle": {
      return { ...cart, show: !cart.show };
    }
    default:
      throw new Error("Unknown cart action type");
  }
};
