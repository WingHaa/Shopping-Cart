import { KeycapSet } from "src/models/products";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

const getImages = (product: KeycapSet) => {
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

  const list = images.map((image, index) => (
    <Image
      className="w-auto h-full"
      key={index}
      ref={(el: HTMLImageElement) => {
        imageRef.current[index] = el;
      }}
      onClick={() => {
        handleChangeImage(image.index);
        handleScroll(index);
      }}
      src={image.img}
      alt=""
    />
  ));

  return (
    <div className="w-[1100px]">
      <ProductPreviewFrame link={images[currentIndex].img} />
      <div className="overflow-hidden flex h-32">{list}</div>;
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
