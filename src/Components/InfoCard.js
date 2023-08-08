import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Rating,
  Button,
  Box,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
const InfoCard = ({ name, address, phoneNumber, rating, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <LocationOnIcon />
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          <PhoneIcon />
          <Typography variant="body2" color="text.secondary">
            {phoneNumber}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="body2" color="text.secondary">
            ({rating})
          </Typography>
        </Box>
        <Box mt={2}>
          <Link to="/K-Details">
            <Button variant="contained" fullWidth>
              الزر
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
export default InfoCard;
