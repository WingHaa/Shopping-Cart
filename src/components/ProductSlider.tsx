import { KeycapKits, KeycapSet } from "src/models/products";
import React, { MutableRefObject, useRef, useState } from "react";
import { Select } from "./Select";
import { ImageSlider } from "./ImageSlider";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

export interface PreviewImg {
  img: StaticImageData;
  index: number;
}

export interface KitData extends KeycapKits {
  index: number;
}

const getImages = (product: KeycapSet): (PreviewImg | KitData)[] => {
  let i = 0;
  const previewImg = product.preview.map((image) => ({
    img: image,
    index: i++,
  }));
  const productImg = product.kits.map((kit) => ({ ...kit, index: i++ }));
  return [...previewImg, ...productImg];
};

const ProductSlider = (props: KeycapSet) => {
  const images = getImages(props);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement[]>([]);

  const handleChangeImage = (nextIndex: number) => {
    setCurrentIndex(nextIndex);
  };

  const handleScroll = (index: number) => {
    imageRef.current[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  console.table(images);

  return (
    <div className="flex">
      <div className="w-[1100px]">
        <ProductPreviewFrame link={images[currentIndex].img} />
        <ImageSlider
          currentIndex={currentIndex}
          images={images}
          handleScroll={handleScroll}
          handleChangeImage={handleChangeImage}
          ref={imageRef}
        />
      </div>
      <div>
        <Select
          handleChangeImage={handleChangeImage}
          handleScroll={handleScroll}
          images={images}
        />
      </div>
    </div>
  );
};

const ProductPreviewFrame = ({ link }: { link: StaticImageData }) => {
  return (
    <>
      <Image src={link} alt="" />
    </>
  );
};

export default ProductSlider;
