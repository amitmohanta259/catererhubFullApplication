import React from "react";
import Card from "./Card";

const CateringServices: React.FC = () => {
  const services = [
    {
      image: "../src/assets/images/chefs_and_caterers/chef1.jpg",
      title: "Party Catering",
      desc: "Delicious party menus customized for your guests.",
      link1: "#",
      link2: "#",
      btn1: "Book Now",
      btn2: "Menu",
    },
    {
      image: "../src/assets/images/chefs_and_caterers/chef2.jpg",
      title: "Wedding Catering",
      desc: "Make your big day memorable with exquisite meals.",
      link1: "#",
      link2: "#",
      btn1: "Book Now",
      btn2: "Menu",
    },
    {
      image: "../src/assets/images/chefs_and_caterers/chef3.jpg",
      title: "Corporate Catering",
      desc: "Professional catering for corporate events and meetings.",
      link1: "#",
      link2: "#",
      btn1: "Book Now",
      btn2: "Menu",
    },
    {
      image: "../src/assets/images/chefs_and_caterers/chef4.jpg",
      title: "Birthday Catering",
      desc: "Fun and tasty menus for birthday celebrations.",
      link1: "#",
      link2: "#",
      btn1: "Book Now",
      btn2: "Menu",
    },
    {
      image: "../src/assets/images/chefs_and_caterers/chef5.jpg",
      title: "Anniversary Catering",
      desc: "Celebrate your milestones with special meals.",
      link1: "#",
      link2: "#",
      btn1: "Book Now",
      btn2: "Menu",
    },
  ];

  return (
    <div className="container-fluid my-5">
      <h2 className="text-center mb-4">Catering Services</h2>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-5  g-2 g-lg-3">
        {services.map((service, idx) => (
          <Card key={idx} {...service} />
        ))}
      </div>
    </div>
  );
};

export default CateringServices;
