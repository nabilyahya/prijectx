import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const theme = createTheme();

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link
                  to="/ProductsList-List"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem>منتجات</MenuItem>
                </Link>
                <Link
                  to="/Kuafor-List"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem>جميع الصالونات</MenuItem>
                </Link>
                <Link
                  to="/MedicalDescribe-List"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem>وصفات </MenuItem>
                </Link>
              </Menu>
            </>
          ) : (
            <>
              <Link
                to="/ProductsList-List"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit">منتجات</Button>
              </Link>
              <Link
                to="/Kuafor-List"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit">جميع الصالونات</Button>
              </Link>
              <Link
                to="/MedicalDescribe-List"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit"> وصفات</Button>
              </Link>
            </>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Site Logo
            </Link>
          </Typography>
          <IconButton color="inherit">
            <Avatar />
          </IconButton>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default HeaderComponent;
