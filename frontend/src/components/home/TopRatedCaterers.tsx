import React from "react";
import Card from "./Card";

const TopRatedCaterers: React.FC = () => {
  const caterers = [
    {
      image: "../src/assets/images/chefs_and_caterers/chef1.jpg",
      title: "Chef’s Delight",
      desc: "5-star rated catering service for all occasions.",
      link1: "#",
      link2: "#",
      btn1: "Contact",
      btn2: "View Menu"
    },
    {
      image: "../src/assets/images/chefs_and_caterers/chef2.jpg",
      title: "Taste Buds",
      desc: "Known for gourmet dishes and impeccable service.",
      link1: "#",
      link2: "#",
      btn1: "Contact",
      btn2: "View Menu"
    },
    {
      image: "../src/assets/images/chefs_and_caterers/chef4.jpg",
      title: "Wedding Catering",
      desc: "Top-rated catering for weddings and corporate events.",
      link1: "#",
      link2: "#",
      btn1: "Contact",
      btn2: "View Menu"
    },
    {
      image: "../src/assets/images/chefs_and_caterers/chef5.jpg",
      title: "Party Catering",
      desc: "Top-rated catering for weddings and corporate events.",
      link1: "#",
      link2: "#",
      btn1: "Contact",
      btn2: "View Menu"
    }
  ];

  return (
    <div className="container-fluid mt-5">
      <h2>Top Rated Caterers</h2>
      <div className="row">
        {caterers.map((caterer, idx) => (
          <Card key={idx} {...caterer} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedCaterers;
