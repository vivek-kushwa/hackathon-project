import { Tooltip, Typography } from "@mui/material";
import React from "react";
import { sortText } from "utils/constant";

export const Heading = React.memo(({ children }) => {
   return children.length >= 40 ? (
      <Tooltip arrow title={children} placement="top">
         <Typography variant="h1" fontSize={"1.7rem"} width="70%" textTransform={"capitalize"}>
            {sortText(children)}
         </Typography>
      </Tooltip>
   ) : (
      <Typography variant="h1" fontSize={"1.7rem"} width="70%" textTransform={"capitalize"}>
         {children}
      </Typography>
   );
});
