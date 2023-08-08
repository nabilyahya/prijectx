import HeaderComponent from "../Components/HeaderComponent";
import FooterComponent from "../Components/FooterComponent";
import { Box } from "@mui/material";
const GusteLayout = ({ children }) => (
  <Box>
    <HeaderComponent />
    {children}
    <FooterComponent />
  </Box>
);

export default GusteLayout;
