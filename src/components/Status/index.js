import { Typography } from "@mui/material";
import React from "react";

export const Status = ({ children }) => {
  return (
    <Typography
      component={"span"}
      color={
        children?.toLowerCase() === "published" ? "success.main" : "info.main"
      }
      bgcolor={
        children?.toLowerCase() === "published" ? "success.light" : "info.light"
      }
      p="7px 12px"
      width="94px"
      textAlign={"center"}
      height="32px"
      textTransform={"capitalize"}
      borderRadius={1}
    >
      {children}
    </Typography>
  );
};
