import { Typography } from "@mui/material";
import React from "react";

export const FormLabel = React.memo(({ error, label }) => {
  return (
    <Typography
      component={"span"}
      sx={{
        fontWeight: error ? 600 : 400,
        fontSize: 12,
        lineHeight: 1,
        color: error ? "error.main" : "primary.main",
      }}
    >
      {label}
    </Typography>
  );
});
