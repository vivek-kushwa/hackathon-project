import { Typography } from "@mui/material";
import React from "react";

export const FormLabel = React.memo(({ error, label }) => {
  return (
    <Typography
      component={"div"}
      sx={{
        fontWeight: error ? 600 : 400,
        fontSize: 12,
        lineHeight: 1,
        textAlign: "left",
        color: error ? "error.main" : "primary.main",
        width: "100%",
      }}
    >
      {label}
    </Typography>
  );
});
