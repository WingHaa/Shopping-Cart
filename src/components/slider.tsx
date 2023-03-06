import React, { ReactNode } from "react";
import { render } from "react-dom";

interface Props {
  lastIndex: number;
  currentIndex: number;
  items: ReactNode[];
  isTransitioning: boolean;
  className?: string;
  handleSlide: (_: string) => void;
  slideStyle: { transition: string };
  control?: ReactNode;
  hideDefaultControl?: boolean;
}

function HeroSlider({
  lastIndex,
  currentIndex,
  items,
  control,
  className,
  isTransitioning,
  handleSlide,
  slideStyle,
  hideDefaultControl = false,
}: Props) {
  const totalSlides = items.length - 1;
  const slides = items.map((item, index) => {
    const baseTranslateX = -100 * currentIndex;
    let translateX = baseTranslateX + index * 100;
    if (currentIndex === 0 && index === totalSlides) {
      translateX = -100;
    }
    if (currentIndex === totalSlides && index === 0) {
      translateX = +100;
    }
    const translate = `translate3d(${translateX}%,0,0)`;
    const visible = !(
      isTransitioning && !(index === lastIndex || index === currentIndex)
    );

    return (
      <div
        className={`hero-slider-slide w-full h-full left-0 top-0 ${
          index === currentIndex ? "relative" : "absolute"
        }`}
        key={index}
        style={{
          transform: translate,
          display: visible ? "inherit" : "none",
          ...slideStyle,
        }}
      >
        {item}
      </div>
    );
  });

  return (
    <div className={"hero-slider w-full " + className}>
      <div className="slider-wrapper w-full relative">
        <div className="slider-images overflow-hidden relative">{slides}</div>
        {control ? (
          control
        ) : hideDefaultControl ? null : (
          <>
            <button
              className="border-red-500 z-50"
              onClick={() => handleSlide("left")}
            >
              Prev
            </button>
            <button
              className="border-red-500 z-50"
              onClick={() => handleSlide("right")}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HeroSlider;
