import { Box, Typography } from "@mui/material";
import React from "react";

export const NoDataFound = () => {
  return (
    <Box>
      <Typography
        variant="subtitle2"
        width={"100%"}
        height={200}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        fontSize={20}
      >
        No Data Found!
      </Typography>
    </Box>
  );
};


