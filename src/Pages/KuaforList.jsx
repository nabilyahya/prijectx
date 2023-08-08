import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Rating,
} from "@mui/material";
import { LocationOn, AccessTime } from "@mui/icons-material";
import FilterList from "Components/KuaforListFilter";
const KuaforList = () => {
  // افترض أن هذه هي بيانات مصففي الشعر
  const hairStylists = [
    {
      id: 1,
      name: "محمد",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4.5,
      location: "الرياض",
      workingHours: "12:00 PM - 11:00 PM",
    },
    {
      id: 2,
      name: "أحمد",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 4.2,
      location: "جدة",
      workingHours: "1:00 PM - 10:00 PM",
    },
    {
      id: 3,
      name: "يوسف",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4.8,
      location: "الدمام",
      workingHours: "2:00 PM - 11:00 PM",
    },
    // يمكنك إضافة المزيد من المصففين هنا...
  ];

  return (
    <Grid container spacing={2} direction="row" dir="rtl">
      <Grid item xs={12} md={3}>
        <FilterList />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2} direction="column">
          {hairStylists.map((stylist) => (
            <Grid item key={stylist.id}>
              <Card sx={{ maxWidth: 750 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={stylist.image}
                    alt={stylist.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {stylist.name}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Rating value={stylist.rating} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({stylist.rating})
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                      <LocationOn color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        {stylist.location}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                      <AccessTime color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        {stylist.workingHours}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default KuaforList;
