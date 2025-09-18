import React from "react";
import Card from "./Card";

const Cuisines: React.FC = () => {
  const cuisines = [
    {
      image: "../src/assets/images/image/image26.jpg",
      title: "Punjabi",
      desc: "Delicious Punjabi meals.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image23.jpg",
      title: "Thai",
      desc: "Tasty Thai dishes.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image24.jpg",
      title: "Italian",
      desc: "Classic Italian flavors.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image18.jpg",
      title: "Arab",
      desc: "Authentic Arab cuisine.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image21.jpg",
      title: "American",
      desc: "Popular American meals.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image14.jpg",
      title: "Mexican",
      desc: "Spicy Mexican food.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image12.jpg",
      title: "South Indian",
      desc: "Traditional South Indian dishes.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image15.jpg",
      title: "Sea Food",
      desc: "Fresh seafood delicacies.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image11.jpg",
      title: "Odiya",
      desc: "Special Odisha flavors.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
    {
      image: "../src/assets/images/image/image13.jpg",
      title: "Kashmiri",
      desc: "Rich Kashmiri cuisine.",
      link1: "#",
      link2: "#",
      btn1: "Meals",
      btn2: "Caterers",
    },
  ];

  return (
    <div className="container-fluid my-5">
      <h2 className="text-center mb-4">Shop By Cuisines</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3">
        {cuisines.map((cuisine, idx) => (
          <Card key={idx} {...cuisine} />
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
