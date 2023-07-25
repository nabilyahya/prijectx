import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import Image from "assets/hero.jpg"; // استبدل هذا بمسار الصورة التي تريدها

const HomePageHeroWithCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 500,
          bgcolor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            العنوان
          </Typography>
          <Typography variant="body2">
            هذا هو المحتوى الرئيسي للبطاقة. يمكنك تغيير هذا النص كما تشاء.
          </Typography>
          <TextField
            id="outlined-basic"
            label="حقل الإدخال الأول"
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="حقل الإدخال الثاني"
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          />
          <Button variant="contained" fullWidth>
            الزر
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePageHeroWithCard;
