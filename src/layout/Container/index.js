import { Container as MuiContainer } from "@mui/material";
import React from "react";

const Container = ({ children, ...rest }) => {
  return <MuiContainer {...rest}>{children}</MuiContainer>;
};

export default React.memo(Container);
