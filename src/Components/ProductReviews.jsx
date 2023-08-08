import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Button,
} from "@mui/material";

const ProductReviews = () => {
  const [reviewsToShow, setReviewsToShow] = useState(5); // Control the amount of reviews to show

  const reviews = [
    {
      username: "User1",
      stars: 5,
      comment: "هذا المنتج رائع! انا احبه كثيراً",
      date: "2023-01-01",
    },
    {
      username: "User2",
      stars: 4,
      comment: "جيد جداً ولكن كان يمكن أن يكون أفضل",
      date: "2023-01-02",
    },
    {
      username: "User3",
      stars: 3,
      comment: "كانت هناك مشكلة في التوصيل لكن المنتج بحالة جيدة",
      date: "2023-01-03",
    },
    {
      username: "User4",
      stars: 2,
      comment: "المنتج لم يكن كما توقعت",
      date: "2023-01-04",
    },
    {
      username: "User5",
      stars: 1,
      comment: "أنا غير راضي عن هذا المنتج",
      date: "2023-01-05",
    },
    // يمكنك إضافة المزيد من التعليقات هنا
  ];

  // Calculate the average rating
  const averageRating =
    reviews.reduce((total, review) => total + review.stars, 0) / reviews.length;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">تقييمات المنتج</Typography>
        <Rating name="product-rating" value={averageRating} readOnly />
        <List>
          {reviews.slice(0, reviewsToShow).map((review, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar
                  alt={review.username}
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary={review.username}
                secondary={
                  <>
                    <Rating
                      name={`review-${index}`}
                      value={review.stars}
                      readOnly
                    />
                    {review.comment}
                    <Typography variant="body2" color="text.secondary">
                      {review.date}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
        {reviewsToShow < reviews.length && (
          <Button
            variant="outlined"
            onClick={() => setReviewsToShow(reviewsToShow + 5)}
          >
            Load More
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductReviews;
