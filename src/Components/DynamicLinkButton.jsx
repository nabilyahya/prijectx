import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const DynamicLinkButton = ({ buttonText, buttonLink }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to={buttonLink}
    >
      {buttonText}
    </Button>
  );
};

export default DynamicLinkButton;
