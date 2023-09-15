import { FormControlLabel, Radio as MuiRadio } from "@mui/material";
import React from "react"

const Radio = ({ value, label, icon, checkedIcon, ...rest }) => {
  return (
    <>
      <FormControlLabel
        value={value}
        control={<MuiRadio icon={icon} checkedIcon={checkedIcon} />}
        label={label}
        {...rest}
      />
    </>
  );
};

export default React.memo(Radio);
