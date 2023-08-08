import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SimilerProductsSlider from "../Components/SimilerProductsSlider";
import ProductReviews from "../Components/ProductReviews";
import SimilarCategoriesSlider from "../Components/SimilarCategoriesSlider";
const DetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1556742212-5b321f3c261b"
  );

  const [isFavourite, setFavourite] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1556742212-5b321f3c261b",
    "https://images.unsplash.com/photo-1593642532400-2682810df593",
    "https://images.unsplash.com/photo-1527402858-36f052d83df4",
  ];

  const productDetail = {
    title:
      "Kerastase Blond Absolu Bain Lumiere Işlem Görmüş Sarı Saçlar Için Parlaklık Veren Şampuan 500ml 3474636881260",
    description:
      "This is the product description. It includes all the details about the product.",
    rating: 4.5,
    price: "1050 TL",
    details: [
      "İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir. 1",
      "Blond Absolu Bain Lumiere, hyaluronik asitle zenginleştirilmiş işlem görmül sarı saçlar için 2",
      "15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayın. 3",
      "saçlar için idealdir. Nazik temizleyici formülü saçları dipten uca pürüzsüz hale getirirken 4",
      "Detail 5",
    ],
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={selectedImage}
              alt="product"
            />
          </Card>
          <Grid container>
            {images.map((image, index) => (
              <Grid item xs={4} key={index} style={{ padding: "5px" }}>
                <img
                  src={image}
                  alt="product"
                  style={{ width: "80px", height: "80px", cursor: "pointer" }}
                  onClick={() => setSelectedImage(image)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">{productDetail.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetail.description}
              </Typography>
              <Rating
                name="product-rating"
                value={productDetail.rating}
                readOnly
              />
              <Typography variant="body2" color="text.secondary">
                {productDetail.price}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px", height: "50px", width: "150px" }}
              >
                Sepete Ekle
              </Button>
              <IconButton
                color="primary"
                aria-label="add to favorites"
                onClick={() => setFavourite(!isFavourite)}
                style={{
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: isFavourite ? "red" : "gray",
                  boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.1)",
                }}
              >
                <FavoriteIcon color={isFavourite ? "secondary" : "action"} />
              </IconButton>
              <Divider style={{ margin: "20px 0" }} />
              {productDetail.details.map((detail, index) => (
                <Typography key={index} variant="body2" color="text.secondary">
                  • {detail}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <SimilerProductsSlider />
      <ProductReviews />
      <SimilarCategoriesSlider />
    </div>
  );
};
export default DetailsPage;
