import React from "react";

import { PreviewImg, KitData } from "./ProductSlider";

type Props = {
  images: (PreviewImg | KitData)[];
  handleChangeImage: (index: number) => void;
  handleScroll: (index: number) => void;
};

export const Select = ({ images, handleChangeImage, handleScroll }: Props) => {
  const kitList = images
    .filter((obj): obj is KitData => obj.hasOwnProperty("price"))
    .map((kit) => (
      <option key={kit.id} value={kit.id}>
        {kit.name}
      </option>
    ));
  return (
    <select
      onChange={(e) => {
        handleChangeImage(+e.target.value);
        handleScroll(+e.target.value);
      }}
      name="product"
      id="product"
    >
      {kitList}
    </select>
  );
};
