import styled from "@emotion/styled";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";
const Input = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.neutrals["main"],
    right: 5,
    fontSize: 18,
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    fontSize: 18,
    padding: "10px 12px",
    border: "1.5px solid " + theme.palette.neutrals["300"],
    transition: theme.transitions.create(["border-color"]),
    "&:focus": {
      borderRadius: 5,
      backgroundColor: theme.palette.common.white,
      border: "1.5px solid " + theme.palette.neutrals["300"],
    },
    "&.Mui-disabled": {
      color: theme.palette.primary.main,
      WebkitTextFillColor: theme.palette.primary.main,
    },
  },
  "&.Mui-error .MuiInputBase-input": {
    borderColor: theme.palette.error.main,
  },
}));
const Select = ({
  label,
  value,
  onChange,
  options = [],
  error = false,
  ...rest
}) => {
  return (
    <>
      <FormControl variant="standard" error={error} fullWidth>
        {!!label && (
          <InputLabel
            shrink
            sx={{
              color: "primary.main",
              "&.Mui-error": {
                fontWeight: 600,
              },
            }}
          >
            {label}
          </InputLabel>
        )}
        <MuiSelect
          value={value}
          onChange={onChange}
          IconComponent={KeyboardArrowDown}
          input={<Input error={error} />}
          sx={{ maxHeight: 300 }}
          {...rest}
        >
          {options.map((option, ind) => (
            <MenuItem
              key={option?.value + ind}
              value={option?.value}
              disabled={option?.disabled}
            >
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </>
  );
};

export default Select;
