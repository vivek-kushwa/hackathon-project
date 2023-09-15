import {
  Divider,
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import React from "react";
import Radio from "./Radio";

const RadioGroup = ({
  label,
  name,
  value,
  onChange,
  options = [],
  icon,
  checkedIcon,
  isDivider = true,
}) => {
  return (
    <FormControl>
      <FormLabel
        sx={{
          p: 2,
          color: "neutrals.main",
        }}
        id={label}
      >
        {label}
      </FormLabel>
      {isDivider && <Divider />}
      <MuiRadioGroup
        aria-labelledby={label}
        {...{ name, value, onChange }}
        sx={{
          display: "flex",
          px: 0.8,
          py: 2,
          width: 238,
        }}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            value={option.value}
            icon={icon}
            checkedIcon={checkedIcon}
            sx={{
              m: 0,
            }}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default React.memo(RadioGroup);
