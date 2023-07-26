import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const categories = [
  { name: "Category 1", img: "https://via.placeholder.com/150" },
  { name: "Category 2", img: "https://via.placeholder.com/150" },
  { name: "Category 3", img: "https://via.placeholder.com/150" },
  { name: "Category 4", img: "https://via.placeholder.com/150" },
  { name: "Category 5", img: "https://via.placeholder.com/150" },
  { name: "Category 5", img: "https://via.placeholder.com/150" },
  { name: "Category 5", img: "https://via.placeholder.com/150" },

  // ... other categories
];

const CategorySlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} draggable={false} showDots={false}>
      {categories.map((category, index) => (
        <div
          key={index}
          style={{
            marginRight: "10px",
            width: "80px",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Avatar
            alt={category.name}
            src={category.img}
            style={{ width: "60px", height: "60px" }}
          />
          <Typography variant="caption">{category.name}</Typography>
        </div>
      ))}
    </Carousel>
  );
};

export default CategorySlider;
