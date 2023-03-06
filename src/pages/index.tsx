import Link from "next/link";
import Image from "next/image";
import productDatabase from "@/utils/products-database";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useRef, useState } from "react";
import HeroSlider from "@/components/slider";
const headingDesc = [
  "Carbon is back with new kits and plenty of old favorites.",
  "Inspired by the iconic colorway on the original Apollo 11 Lunar Module Cockpit",
  "Meaning “handmade” in German, Handarbeit is a faithful recreation of the colors from the now-iconic piece. ",
  "Capturing the neon lights, dark shadows, and intriguing antiheroes of the genre, it looks like it was shot straight from the barrel of a laser.",
  "Since Oblivion first launched, Oblotzky's signature set has become one of the most recognizable on the market.",
];

export default function Home() {
  const [lastIndex, setLastIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideStyle, setSlideStyle] = useState({
    transition: "all 300ms ease-out",
  });
  const autoSlideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    autoSlideTimer.current = setInterval(() => {
      handleSlide("right");
    }, 3000);

    return () => {
      clearInterval(autoSlideTimer.current!);
    };
  });

  useEffect(() => {
    if (isTransitioning === false) return;
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300 + 50);

    return () => {
      clearTimeout(transitionTimer);
    };
  }, [isTransitioning]);

  const hero = productDatabase.map((set, index) => {
    return (
      <div className="relative w-[968px] h-[569px]" key={index}>
        <Image
          key={index}
          src={set.preview[0]}
          style={{ objectFit: "cover", width: "100%" }}
          alt=""
          fill
        />
      </div>
    );
  });

  const handleSlide = (direction: string) => {
    const allSlides = productDatabase.length - 1;
    let nextIndex = 0;
    if (direction === "left") nextIndex = currentIndex - 1;
    if (direction === "right") nextIndex = currentIndex + 1;
    if (nextIndex < 0) nextIndex = allSlides;
    if (nextIndex > allSlides) nextIndex = 0;
    setLastIndex(currentIndex);
    setCurrentIndex(nextIndex);
    setIsTransitioning(true);
  };

  const heroHeadings = headingDesc.map((heading, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-start py-6 pl-8 pr-5 min-h h-72"
      >
        <div className="text-2xl font-medium">
          {productDatabase[index].name}
        </div>
        <div className="h-2"></div>
        <div>{heading}</div>
        <div style={{ flex: "1 1 0%" }}></div>
        <Link
          className="font-medium min-w-0  bg-black text-white hover:bg-[#fdcf41] hover:text-black"
          href={`/${productDatabase[index].kits[0].set}`}
        >
          <span className="flex items-center justify-center px-5 h-11">
            Shop Now
          </span>
        </Link>
      </div>
    );
  });

  const heroControl = (
    <span className="z-10 absolute bottom-0 right-0 translate-y-1/2">
      <button
        onClick={() => handleSlide("left")}
        className="group w-11 h-11 bg-[#fdcf41] hover:bg-black"
      >
        <span className="flex justify-center items-center group-hover:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
          </svg>
        </span>
      </button>
      <button
        onClick={() => handleSlide("right")}
        className="group w-11 h-11 bg-[#fdcf41] hover:bg-black"
      >
        <span className="flex justify-center items-center group-hover:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
              transform="scale(-1, 1) translate(-24, 0)"
            ></path>
          </svg>
        </span>
      </button>
    </span>
  );

  return (
    <div className="w-4/5 max-w-screen-xl min-h-[700px] m-auto">
      <div className="h-[750px] relative">
        <HeroSlider
          className="absolute top-0 right-0"
          items={hero}
          lastIndex={lastIndex}
          currentIndex={currentIndex}
          isTransitioning={isTransitioning}
          slideStyle={slideStyle}
          handleSlide={handleSlide}
          hideDefaultControl={true}
        />
        <HeroSlider
          className="w-96 absolute bottom-6 left-0 bg-white -translate-x-1/2 -translate-y-3/4"
          items={heroHeadings}
          lastIndex={lastIndex}
          currentIndex={currentIndex}
          isTransitioning={isTransitioning}
          slideStyle={slideStyle}
          handleSlide={handleSlide}
          hideDefaultControl={true}
          control={heroControl}
        />
      </div>
    </div>
  );
}
