import React from "react";
import { FormControlLabel, Switch as MuiSwitch } from "@mui/material";
import styled from "@emotion/styled";

const CustomSwitch = styled(MuiSwitch)(({ theme }) => ({
  width: 32, //changed from 40 to 32
  height: 16, //changed from 24 to 16
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.success.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        // opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      // color: '#33cf4d',
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 12, //19
    height: 12, //19
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.neutrals["900"],
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Switch = ({ label, checked, onChange, size, ...props }) => {
  return (
    <FormControlLabel
      sx={{ marginRight: "0px" }} //no sx
      control={
        <CustomSwitch checked={checked} onChange={onChange} size={size} />
      }
      label={label}
      {...props}
    />
  );
};

export default Switch;
