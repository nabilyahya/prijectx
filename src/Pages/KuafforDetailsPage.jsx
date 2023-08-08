import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Modal,
  Rating,
} from "@mui/material";
import KuafforServices from "Components/KuafforServices";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import TimeSlots from "Components/TimeSlots";
const KuafforDetailsPage = () => {
  const [open, setOpen] = useState(false);
  // هنا يمكنك إضافة بيانات المصفف الحقيقية
  const kuafforDetails = {
    name: "John Doe",
    location: "New York, NY",
    workHours: "8 AM - 8 PM",
    totalSeats: 10,
    availableSeats: 5,
    rating: 4.5,
    employeeCount: 3,
    img: "https://via.placeholder.com/150",
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <img
                src={kuafforDetails.img}
                alt={kuafforDetails.name}
                style={{ width: "80%", cursor: "pointer" }}
                onClick={handleOpen}
              />
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <img
                  src={kuafforDetails.img}
                  alt={kuafforDetails.name}
                  style={{ width: "100%" }}
                />
              </Modal>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" component="div" gutterBottom>
                {kuafforDetails.name}
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <LocationOnIcon /> Location: {kuafforDetails.location}
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <AccessTimeIcon /> Work Hours: {kuafforDetails.workHours}
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <EventSeatIcon /> Total Seats: {kuafforDetails.totalSeats}
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <EventSeatIcon /> Available Seats:{" "}
                {kuafforDetails.availableSeats}
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <StarIcon /> Rating: {kuafforDetails.rating}{" "}
                <Rating
                  name="read-only"
                  value={kuafforDetails.rating}
                  readOnly
                />
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                <GroupIcon /> Number of Employees:{" "}
                {kuafforDetails.employeeCount}
              </Typography>
              الأوقات المتوفرة
              <TimeSlots />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <KuafforServices />
    </div>
  );
};

export default KuafforDetailsPage;
