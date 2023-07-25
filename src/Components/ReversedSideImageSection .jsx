import React from "react";
import { Typography, Button, Box, Grid, Paper } from "@mui/material";
import Image from "assets/hero.jpg"; // استبدل هذا بالمسار الذي لديك للصورة

const ReversedSideImageSection = () => {
  return (
    <Paper
      elevation={2}
      style={{ borderRadius: "10px", overflow: "hidden", margin: "20px 0" }}
    >
      <Grid
        container
        direction={window.innerWidth > 600 ? "row-reverse" : "row"}
      >
        <Grid item xs={12} md={6}>
          <img
            src={Image}
            alt="Section"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            عنوان القسم
          </Typography>
          <Typography variant="body1" gutterBottom>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، قام بتوليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </Typography>
          <Box mt={3}>
            <Button variant="contained" color="primary">
              اضغط هنا
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReversedSideImageSection;
