import { KeycapKits, KeycapSet } from "src/models/products";
import React, { useRef, useState } from "react";
import { SelectComponent } from "../components/Select";
import { ImageSlider } from "../components/ImageSlider";
import Image, { StaticImageData } from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import productDatabase from "@/utils/products-database";

export interface PreviewImg {
  img: StaticImageData;
  index: number;
}

export interface KitData extends KeycapKits {
  index: number;
}

const getImages = (product: KeycapSet): [PreviewImg[], KitData[]] => {
  let i = 0;
  const previewImg = product.preview.map((image) => ({
    img: image,
    index: i++,
    set: product.kits[0].set,
  }));
  const productImg = product.kits.map((kit) => ({
    ...kit,
    index: i++,
    set: product.kits[0].set,
  }));
  return [previewImg, productImg];
};

const ProductSlider = (props: { item: KeycapSet }) => {
  const [preview, product] = getImages(props.item);
  const images = [...preview, ...product];
  const [currentKit, setCurrentKit] = useState(product[0]);
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

  const handleChangeCurrentKit = (index: number) => {
    setCurrentKit(images[index] as KitData);
  };

  // const cartEl = cart.map((product) => (
  //   <div key={product.item.name}>
  //     <div>{product.item.name}</div>
  //     <div>Total: {product.item.price * product.amount}</div>
  //   </div>
  // ));

  const getNextIndex = (modifier: -1 | 1): number => {
    if (modifier === -1) {
      if (currentIndex === 0) return images.length - 1;
      return currentIndex - 1;
    }
    if (currentIndex === images.length - 1) return 0;
    return currentIndex + 1;
  };

  return (
    <div className="flex gap-5">
      <div className="max-w-4xl">
        <div className="relative ">
          <span className="z-10 absolute -bottom-4 right-0 ">
            <div className="absolute top-0 right-0 -translate-y-full bg-gray-50 h-6 w-14 flex justify-center items-center">
              <span className=" text-[8px] ">
                {`${currentIndex + 1}/${images.length}`}
              </span>
            </div>
            <button
              className="group w-11 h-11 bg-[#fdcf41] hover:bg-black"
              onClick={() => {
                handleScroll(getNextIndex(-1));
                handleChangeImage(getNextIndex(-1));
              }}
            >
              <span className="flex justify-center items-center group-hover:text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
                </svg>
              </span>
            </button>
            <button
              className="group w-11 h-11 bg-[#fdcf41] hover:bg-black"
              onClick={() => {
                handleScroll(getNextIndex(1));
                handleChangeImage(getNextIndex(1));
              }}
            >
              <span className="flex justify-center items-center group-hover:text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
                    transform="scale(-1, 1) translate(-24, 0)"
                  ></path>
                </svg>
              </span>
            </button>
          </span>
          <Image src={images[currentIndex].img} alt="" />
        </div>
        <ImageSlider
          currentIndex={currentIndex}
          images={images}
          handleScroll={handleScroll}
          handleChangeImage={handleChangeImage}
          ref={imageRef}
        />
      </div>
      <SelectComponent
        handleChangeImage={handleChangeImage}
        handleScroll={handleScroll}
        handleChangeCurrentKit={handleChangeCurrentKit}
        images={product}
        currentKit={currentKit}
        set={props.item.kits[0].set}
      />
      {/* <div className="cart">{cartEl}</div> */}
    </div>
  );
};

export default ProductSlider;

export const getStaticProps: GetStaticProps = async (context) => {
  const query = context.params?.item;
  const result = productDatabase.find((item) => item.kits[0].set === query);

  return {
    props: {
      item: result,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsWithParams = productDatabase.map((set) => ({
    params: { item: set.kits[0].set },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};
