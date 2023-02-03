import { KeycapKits, KeycapSet } from "src/models/products";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface PreviewImg {
  img: StaticImageData;
  index: number;
}

interface KitData extends KeycapKits {
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

const getFirstKitValue = (product: KeycapSet) => {
  const firstKit = product.kits.find((obj) => obj.hasOwnProperty("price"));
  if (firstKit === undefined) throw new Error("There's no price");
  return firstKit.id;
};

const ProductSlider = (props: KeycapSet) => {
  const images = getImages(props);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement[]>([]);
  const [selectedKit, setSelectedKit] = useState(getFirstKitValue(props));

  const getIndex = (): number => {
    const selected = images
      .filter((obj) => obj.hasOwnProperty("price"))
      .find((kit) => (kit as KitData).id === selectedKit);
    if (selected) {
      return selected.index;
    }
    throw new Error("No price");
  };

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
        handleScroll(index);
      }}
      src={image.img}
      alt=""
    />
  ));

  const kitList = images
    .filter((obj): obj is KitData => obj.hasOwnProperty("price"))
    .map((kit) => (
      <option key={kit.id} value={kit.id}>
        {kit.name}
      </option>
    ));

  return (
    <div className="flex">
      <div className="w-[1100px]">
        <ProductPreviewFrame link={images[currentIndex].img} />
        <div className="overflow-hidden flex h-32">{list}</div>;
      </div>
      <div>
        <select
          value={selectedKit}
          onChange={(e) => {
            setSelectedKit(e.target.value);
            handleChangeImage(getIndex());
            handleScroll(getIndex());
          }}
          name="product"
          id="product"
        >
          {kitList}
        </select>
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
