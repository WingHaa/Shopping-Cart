import React, { ReactElement, useContext, useRef } from "react";
import { KitData } from "../pages/[item]";
import Select from "react-select";
import { CartDispatchContext } from "@/pages/_app";

type Props = {
  images: KitData[];
  currentKit: KitData;
  set: string;
  handleChangeImage: (index: number) => void;
  handleScroll: (index: number) => void;
  handleChangeCurrentKit: (index: number) => void;
};

export const SelectComponent = ({
  images,
  currentKit,
  set,
  handleChangeImage,
  handleScroll,
  handleChangeCurrentKit,
}: Props) => {
  const selectRef = useRef(null);
  const kitList = images.map((kit) => ({ value: kit.index, label: kit.name }));
  const cartDispatch = useContext(CartDispatchContext);

  return (
    <div className="flex flex-col gap-4 grow mx-4 mt-7 md:mx-0 md:mt-0">
      <h1 className="text-4xl font-medium">{set.toUpperCase()}</h1>
      <div className="text-2xl font-normal">${currentKit.price}</div>
      <div className="font-medium">Keycap Kit:</div>
      <Select
        onChange={(e) => {
          if (e) {
            handleChangeImage(e.value);
            handleScroll(e.value);
            handleChangeCurrentKit(e.value);
          }
        }}
        defaultValue={kitList[0]}
        ref={selectRef}
        isSearchable={false}
        options={kitList}
        components={{ IndicatorSeparator: () => null }}
        className="product_select_container font-medium text-base"
        classNamePrefix="product_select"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            padding: "0px 11px 0px 20px",
            cursor: "pointer",
            border: state.isFocused ? "1px solid #222222" : "1px solid #d8d5d2",
            boxShadow: "none",
            ":hover": {
              border: state.isFocused
                ? "1px solid #222222"
                : "1px solid #d8d5d2",
              boxShadow: "none",
            },
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0px",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "#222222",
          }),
          option: (_, state) => ({
            backgroundColor: state.isFocused
              ? "#f0f0f0"
              : state.isSelected
              ? "#222222"
              : "#fff",
            color: !state.isFocused && state.isSelected ? "#fff" : "#222",
            overflow: "hidden",
            whiteSpace: "nowrap",
            padding: "20px 25px",
          }),
        }}
      />
      <div
        className="cursor-pointer flex justify-center items-center bg-black text-white h-[60px] font-normal text-base slide-button"
        onClick={() => {
          if (cartDispatch) {
            cartDispatch({
              type: "add",
              name: currentKit.name,
              set: currentKit.set,
            });
            cartDispatch({ type: "toggle" });
          }
        }}
      >
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};
