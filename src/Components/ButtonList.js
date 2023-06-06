import React from "react";
import Button from "./Button";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
const Buttons = [
  {
    name: "All",
  },
  {
    name: "Gaming",
  },
  {
    name: "Songs",
  },
  {
    name: "Live",
  },
  {
    name: "Cricket",
  },
  {
    name: "Soccer",
  },
  {
    name: "News",
  },
  {
    name: "Cooking",
  },
  {
    name: "Traveling",
  },
  {
    name: "Vlogs",
  },
  {
    name: "Comedy",
  },
  {
    name: "Shots",
  },
  {
    name: "Bollywood",
  },
  {
    name: "Trending",
  },
];
function ButtonList() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };
  return (
    <div className="max-width max-w-5xl mx-auto my-0">
      <div className="relative flex items-center my-2">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 "
          onClick={slideLeft}
          size={35}
        />
        <div
          id="slider"
          className="w-full h-full relative flex items-center overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {Buttons.map((buttons) => (
            <Button info={buttons} />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={35}
        />
      </div>
    </div>
  );
}

export default ButtonList;
