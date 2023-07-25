import * as React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const Link = styled(MuiLink)`
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const Footer = () => {
  return (
    <Box sx={{ bgcolor: grey[800], color: "white", mt: "auto", py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography>
              <Link href="#">About us</Link>
            </Typography>
            <Typography>
              <Link href="#">Contact us</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <Typography>
              <Link href="#">Cool stuff</Link>
            </Typography>
            <Typography>
              <Link href="#">Random feature</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Typography>
              <Link href="#">Resource name</Link>
            </Typography>
            <Typography>
              <Link href="#">Another resource</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Typography>
              <Link href="#">Privacy policy</Link>
            </Typography>
            <Typography>
              <Link href="#">Terms of use</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
