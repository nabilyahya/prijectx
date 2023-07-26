import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material";

const SimilerProductsSlider = () => {
  const products = [
    {
      name: "Product 1",
      image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b",
      description: "This is product 1 description.",
      rating: 4.5,
    },
    {
      name: "Product 2",
      image: "https://images.unsplash.com/photo-1593642532400-2682810df593",
      description: "This is product 2 description.",
      rating: 4.0,
    },
    {
      name: "Product 3",
      image: "https://images.unsplash.com/photo-1527402858-36f052d83df4",
      description: "This is product 3 description.",
      rating: 3.5,
    },
    {
      name: "Product 4",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      description: "This is product 4 description.",
      rating: 5.0,
    },
    {
      name: "Product 5",
      image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30e",
      description: "This is product 5 description.",
      rating: 4.2,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel responsive={responsive}>
      {products.map((product) => (
        <Card key={product.id} style={{ margin: "15px" }}>
          <CardMedia component="img" height="200" image={product.image} />
          <CardContent>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Rating name="product-rating" value={product.rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {product.price}
            </Typography>
            <Button variant="contained" color="primary">
              Sepete Ekle
            </Button>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default SimilerProductsSlider;
