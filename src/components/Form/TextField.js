import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

const Input = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    position: "relative",
    backgroundColor: `${theme.palette.common.white} !important`,
    border: "1.5px solid " + theme.palette.neutrals["300"],
    fontSize: 18,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color"]),
    "&:focus": {
      borderColor: theme.palette.custom.dark,
    },
    "&:-internal-autofill-selected": {
      backgroundColor: `${theme.palette.common.white} !important`,
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

const TextField = ({
  label,
  value,
  isDisabled,
  defaultValue,
  error = false,
  name,
  placeholder,
  isRequired,
  type,
  startIcon,
  endIcon,
  errorMessage,
  ...rest
}) => {
  return (
    <FormControl variant="standard" fullWidth error={error}>
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
      <Input
        value={value}
        name={name}
        error={error}
        type={type}
        disabled={isDisabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={isRequired}
        {...rest}
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};
export default TextField;
