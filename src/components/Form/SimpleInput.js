import { InputBase } from "@mui/material";
import { styled } from "@mui/system";

export const SimpleInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputAdornment-root": {
    color: theme.palette.neutrals["main"],
    marginRight: 1,
    fontSize: 26,
  },
  "&.MuiInputBase-root": {
    border: "1.5px solid " + theme.palette.neutrals["300"],
    backgroundColor: theme.palette.common.white,
    ":focus": {
      border: "1.5px solid " + theme.palette.custom.dark,
    },
    borderRadius: 5,
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    position: "relative",
    backgroundColor: `${theme.palette.common.white} !important`,
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
  "&.Mui-error ": {
    borderColor: theme.palette.error.main,
  },
}));
