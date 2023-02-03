import { StaticImageData } from "next/image";
import { forwardRef } from "react";
import Image from "next/image";

type Props = {
  images: {
    img: StaticImageData;
    id?: string;
    name?: string;
    price?: number;
  }[];
  handleScroll: (index: number) => void;
  className: string;
};

export const ImageSlider = forwardRef<HTMLImageElement[], Props>(
  function ImageSlider({ images, handleScroll, className }, imageRef) {
    const list = images.map((image, index) => (
      <Image
        key={index}
        ref={(el) => {
          if (
            typeof imageRef !== "function" &&
            el &&
            imageRef &&
            imageRef.current
          )
            imageRef.current[index] = el;
        }}
        onClick={() => {
          handleScroll(index);
        }}
        src={image.img}
        alt=""
      />
    ));

    return <div className={className + " flex h-32"}>{list}</div>;
  }
);
