import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const services = [
  { name: "حلاقة شعر", employees: ["John", "Doe", "Jane"] },
  { name: "حلاقة ذقن", employees: ["John", "Doe", "Jane"] },
  { name: "تنظيف بشرة", employees: ["John", "Doe", "Jane"] },
  { name: "صبغة شعر", employees: ["John", "Doe", "Jane"] },
  { name: "تسبيل شعر", employees: ["John", "Doe", "Jane"] },
  { name: "سشوار شعر وتسريح", employees: ["John", "Doe", "Jane"] },
];

const KuafforServices = () => {
  const [employee, setEmployee] = React.useState("");

  const handleChange = (event) => {
    setEmployee(event.target.value);
  };

  return (
    <div>
      {services.map((service, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{service.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl fullWidth>
              <Select
                value={employee}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  اختر الموظف
                </MenuItem>
                {service.employees.map((employee, index) => (
                  <MenuItem key={index} value={employee}>
                    {employee}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default KuafforServices;
