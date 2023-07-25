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
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit">Option 1</Button>
              <Button color="inherit">Option 2</Button>
            </>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Site Logo
          </Typography>
          <IconButton color="inherit">
            <Avatar />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default HeaderComponent;
