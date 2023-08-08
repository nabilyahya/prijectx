import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ControlPanel = () => {
  const [selectedSection, setSelectedSection] = useState("section1");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const sections = [
    { id: "section1", title: "Products Mangment" },
    { id: "section2", title: "Medical Mangment" },
    { id: "section3", title: "Kuafors Mangment" },
    { id: "section4", title: "Customers Mangment" },
    { id: "section5", title: "Reservsation Mangment" },
    { id: "section6", title: "Help or AQ" },
    // يمكنك إضافة مزيد من الأقسام هنا
  ];
  const renderSection = () => {
    switch (selectedSection) {
      case "section1":
        return <div>Products Mangment</div>;
      case "section2":
        return <div>Medical Mangment</div>;
      case "section3":
        return <div>Kuafors Mangment</div>;
      case "section4":
        return <div>Customers Mangment</div>;
      case "section5":
        return <div>Reservsation Mangment</div>;
      case "section6":
        return <div>Help or AQ</div>;
      // يمكنك إضافة مزيد من الأقسام هنا
      default:
        return null; // إذا لم يتم تطابق أي قسم
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">لوحة التحكم</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {sections.map((section) => (
            <ListItem
              button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
            >
              <ListItemText primary={section.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container>
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {renderSection()}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ControlPanel;
