import {
  Divider,
  FormControl,
  FormLabel,
  InputLabel,
  RadioGroup as MuiRadioGroup,
  Typography,
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
  error = false,
  errorMsg = "",
}) => {
  return (
    <FormControl error={error}>
      <InputLabel
        shrink
        sx={{
          color: "primary.main",
          "&.Mui-error": {
            fontWeight: 700,
          },
          fontWeight: 700,
        }}
      >
        {label}
      </InputLabel>

      <MuiRadioGroup
        aria-labelledby={label}
        {...{ name, value, onChange }}
        sx={{
          display: "flex",
          px: 0.8,

          flexDirection: "row",
          mt: "2rem",
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
      {error && (
        <Typography
          sx={{
            color: "error.main",

            mt: "0.5rem",
          }}
          variant="body2"
        >
          {errorMsg}{" "}
        </Typography>
      )}
    </FormControl>
  );
};

export default React.memo(RadioGroup);
