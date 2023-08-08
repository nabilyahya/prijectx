import React from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterPaper = styled(Paper)(({ theme }) => ({
  width: "250px",
  padding: theme.spacing(2),
}));

const FilterFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: "80%",
}));

const FilterTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&$checked": {
    color: theme.palette.primary.dark,
  },
}));

const FilterList = () => {
  const [province, setProvince] = React.useState("");
  const [area, setArea] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsOpen(event.target.checked);
  };

  return (
    <FilterPaper elevation={3}>
      <FilterTypography variant="h6">الفلاتر</FilterTypography>
      <FormGroup>
        <FilterFormControl>
          <InputLabel id="province-label">المحافظات</InputLabel>
          <Select
            labelId="province-label"
            id="province-select"
            value={province}
            onChange={handleChange}
          >
            <MenuItem value={"province1"}>محافظة 1</MenuItem>
            <MenuItem value={"province2"}>محافظة 2</MenuItem>
            <MenuItem value={"province3"}>محافظة 3</MenuItem>
          </Select>
        </FilterFormControl>

        <FilterFormControl>
          <InputLabel id="area-label">المناطق</InputLabel>
          <Select
            labelId="area-label"
            id="area-select"
            value={area}
            onChange={handleAreaChange}
          >
            <MenuItem value={"area1"}>منطقة 1</MenuItem>
            <MenuItem value={"area2"}>منطقة 2</MenuItem>
            <MenuItem value={"area3"}>منطقة 3</MenuItem>
          </Select>
        </FilterFormControl>

        <FormControlLabel
          control={
            <CustomCheckbox
              checked={isOpen}
              onChange={handleCheckboxChange}
              name="isOpen"
            />
          }
          label="مفتوح"
        />
      </FormGroup>
    </FilterPaper>
  );
};

export default FilterList;
