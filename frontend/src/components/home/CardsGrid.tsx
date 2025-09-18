import React from "react";
import Card from "./Card";

interface CardProps {
  image: string;
  title: string;
  desc: string;
  link1: string;
  link2: string;
  btn1: string;
  btn2: string;
}

interface CardsGridProps {
  items: CardProps[];
}

const CardsGrid: React.FC<CardsGridProps> = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              col-12      /* full width on xs */
              col-sm-6    /* 2 cards per row on small screens */
              col-md-5    /* 3 cards per row on medium screens */
              col-lg-3    /* 4 cards per row on large screens */
              pt-2
            "
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
