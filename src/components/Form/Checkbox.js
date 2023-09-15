import React from "react";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

const Checkbox = ({ label, disabled, formSx, ...rest }) => {
  return (
    <FormControlLabel
      disabled={disabled}
      sx={formSx}
      control={
        <MuiCheckbox
          sx={{
            fontSize: "1.5rem",
            "&.Mui-checked": {
              color: "secondary.light",
            },
          }}
          {...rest}
        />
      }
      label={label}
    />
  );
};

export default React.memo(Checkbox);
