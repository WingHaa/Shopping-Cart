import { KeycapKits, KeycapSet } from "src/models/products";
import React, { useRef, useState } from "react";
import { Select } from "./Select";
import { ImageSlider } from "./ImageSlider";
import Image, { StaticImageData } from "next/image";
import productDatabase from "src/utils/products-database";

export interface PreviewImg {
  img: StaticImageData;
  index: number;
}

export interface KitData extends KeycapKits {
  index: number;
}

interface CartItem {
  item: KeycapKits;
  amount: number;
}

const getImages = (product: KeycapSet): [PreviewImg[], KitData[]] => {
  let i = 0;
  const previewImg = product.preview.map((image) => ({
    img: image,
    index: i++,
    set: product.set,
  }));
  const productImg = product.kits.map((kit) => ({
    ...kit,
    index: i++,
    set: product.set,
  }));
  return [previewImg, productImg];
};

const getProduct = (name: string, setName: string): KeycapKits | undefined => {
  const set = productDatabase.find((set) => set.set === setName);
  if (!set) throw new Error("Set not found");
  return set.kits.find((kit) => kit.name === name);
};

const ProductSlider = (props: KeycapSet) => {
  const [preview, product] = getImages(props);
  const images = [...preview, ...product];

  const [currentKit, setCurrentKit] = useState(product[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = () => {
    const name = currentKit.name;
    const set = props.set;
    if (cart.find((product) => product.item.name === name)) {
      return setCart((prevCart) =>
        prevCart.map((product) => {
          if (product.item.name === name) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        })
      );
    }
    const newItem = getProduct(name, set);
    if (!newItem) throw new Error("Item not found");
    return setCart((prevCart) => [...prevCart, { item: newItem, amount: 1 }]);
  };
  const removeItem = (name: string) => {
    if (
      cart.find((product) => product.item.name === name && product.amount > 1)
    ) {
      return setCart((prevCart) =>
        prevCart.map((product) => {
          if (product.item.name === name) {
            return { ...product, amount: product.amount - 1 };
          }
          return product;
        })
      );
    }
    return setCart((prevCart) =>
      prevCart.filter((product) => product.item.name === name)
    );
  };

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

  const cartEl = cart.map((product) => (
    <div key={product.item.name}>
      <div>{product.item.name}</div>
      <div>Total: {product.item.price * product.amount}</div>
    </div>
  ));

  const getNextIndex = (modifier: number): number => {
    if (modifier === -1) {
      if (currentIndex === 0) return images.length - 1;
      return currentIndex - 1;
    }
    if (modifier === 1) {
      if (currentIndex === images.length - 1) return 0;
      return currentIndex + 1;
    }
  };

  return (
    <div className="flex">
      <div className="w-[1100px]">
        <div className="relative ">
          <span className="z-50 absolute -bottom-4 right-0 ">
            <button
              className="border-2 border-purple-600"
              onClick={() => {
                handleScroll(getNextIndex(-1));
                handleChangeImage(getNextIndex(-1));
              }}
            >
              Left
            </button>
            <button
              className="border-2 border-purple-600"
              onClick={() => {
                handleScroll(getNextIndex(1));
                handleChangeImage(getNextIndex(1));
              }}
            >
              Right
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
      <div>
        <Select
          handleChangeImage={handleChangeImage}
          handleScroll={handleScroll}
          handleChangeCurrentKit={handleChangeCurrentKit}
          handleAddItem={addItem}
          images={product}
          currentKit={currentKit}
          set={props.set}
        />
      </div>
      <div className="cart">{cartEl}</div>
    </div>
  );
};

export default ProductSlider;
