import { KeycapSet } from "src/models/products";
import React, { useState } from "react";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

const getImages = (product: KeycapSet) => {
  const previewImg = product.preview;
  const productImg = product.kits.map((kit) => kit.img);
  return [...previewImg, ...productImg];
};

const ProductSlider = (props: KeycapSet) => {
  const images = getImages(props);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <ProductPreviewFrame link={images[currentIndex]} />
      <ImageSlider images={images} />
    </>
  );
};

const ProductPreviewFrame = ({ link }: { link: StaticImageData }) => {
  return (
    <>
      <Image src={link} alt="" />
    </>
  );
};

const ImageSlider = ({ images }: { images: StaticImageData[] }) => {
  const list = images.map((image) => (
    <Image key={image.src} src={image} alt="" />
  ));
  return <>{list}</>;
};
