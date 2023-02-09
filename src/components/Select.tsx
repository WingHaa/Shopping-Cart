import React, { useRef } from "react";

import { PreviewImg, KitData } from "./ProductSlider";

type Props = {
  images: KitData[];
  currentKit: KitData;
  set: string;
  handleChangeImage: (index: number) => void;
  handleScroll: (index: number) => void;
  handleChangeCurrentKit: (index: number) => void;
  handleAddItem: () => void;
};

export const Select = ({
  images,
  currentKit,
  set,
  handleChangeImage,
  handleScroll,
  handleChangeCurrentKit,
  handleAddItem,
}: Props) => {
  const selectRef = useRef(null);

  const kitList = images.map((kit) => (
    <option key={kit.index} value={kit.index}>
      {kit.name}
    </option>
  ));

  return (
    <div>
      <h1>{set.toUpperCase()}</h1>
      <div>${currentKit.price}</div>
      <div>Keycap Kit:</div>
      <select
        onChange={(e) => {
          handleChangeImage(+e.target.value);
          handleScroll(+e.target.value);
          handleChangeCurrentKit(+e.target.value);
        }}
        ref={selectRef}
        name="product"
        id="product"
      >
        {kitList}
      </select>
      <button onClick={handleAddItem}>ADD TO CART</button>
    </div>
  );
};
