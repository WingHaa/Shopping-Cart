import React, { ReactNode, useContext } from "react";
import Link from "next/link";
import { CartContext, CartDispatchContext } from "@/pages/_app";

interface Prop {
  children: ReactNode;
}

export default function Layout({ children }: Prop) {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const currentCartAmount = cart?.items.reduce(
    (currentItem, nextItem) => currentItem + nextItem.amount,
    0
  );
  return (
    <>
      <header className="sticky flex justify-around h-16 items-center font-medium">
        <Link href="/">
          <svg className="w-32" viewBox="0 0 423 95">
            <path
              d="M160.095 46.264c11.032 0 14.448-4.09 14.448-10.42 0-6.465-3.246-10.483-14.448-10.483h-16.323v20.903zm26.574 19.462l21.045 27.924h-34.976L155.59 70.382h-11.819V93.65h-29.597V1.621h53.003c21.655 0 36.78 16.549 36.78 35.043 0 13.74-8.281 24.781-17.29 29.062zm102.98-18.09c0-13.166-9.308-21.674-23.711-21.674-14.402 0-23.71 8.508-23.71 21.674 0 13.165 9.308 21.672 23.71 21.672 14.18 0 23.71-8.71 23.71-21.672zM266.266.272c31.077 0 53.635 19.918 53.635 47.364 0 27.445-22.558 47.364-53.635 47.364-31.08 0-53.636-19.92-53.636-47.364 0-27.446 22.557-47.364 53.636-47.364zm112.775 46.39c11.157 0 14.61-4.125 14.61-10.51 0-6.521-3.281-10.571-14.61-10.571h-16.508v21.08zM386.133 2C407.837 2 423 18.542 423 37.03c0 13.736-8.3 24.774-17.33 29.054-8.29 4.648-31.402 4.653-31.402 4.653h-11.735V94H333V2zM101.999 48.026C102 89.683 55.505 94 55.505 94L29.726 68.373l17.29-.06C72.83 68.314 71.923 48 71.923 48s.908-20.314-24.905-20.314l-17.29-.06v40.747L0 38.822V2h47.036S102 1.993 102 47.996v.03z"
              fillRule="evenodd"
            ></path>
          </svg>
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            if (dispatch) dispatch({ type: "toggle" });
          }}
        >
          <div className="absolute bg-[#fdcf41] rounded-full w-4 h-4 -1 -top-1 -right-1 flex justify-center items-center font-normal text-xs">
            {currentCartAmount}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
