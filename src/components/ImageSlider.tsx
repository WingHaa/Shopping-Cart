import { StaticImageData } from "next/image";
import { forwardRef } from "react";
import Image from "next/image";

type Props = {
  currentIndex: number;
  images: {
    img: StaticImageData;
    id?: string;
    name?: string;
    price?: number;
  }[];
  handleScroll: (index: number) => void;
  handleChangeImage: (index: number) => void;
};

export const ImageSlider = forwardRef<HTMLImageElement[], Props>(
  function ImageSlider(
    { currentIndex, images, handleScroll, handleChangeImage },
    ref
  ) {
    const list = images.map((image, index) => (
      <Image
        className={
          "w-auto h-full border-2 transition-all " +
          (currentIndex === index
            ? "border-amber-300 p-1"
            : "border-transparent p-2")
        }
        key={index}
        ref={(el: HTMLImageElement) => {
          if (typeof ref === "object" && ref && ref.current)
            return (ref.current[index] = el);
        }}
        onClick={() => {
          handleScroll(index);
          handleChangeImage(index);
        }}
        src={image.img}
        alt=""
      />
    ));

    return <div className="mt-2 overflow-hidden flex h-32 gap-1">{list}</div>;
  }
);
