import React from "react";
import "./loader.css";
import { Stack } from "@mui/material";

export const Loader = () => {
   return (
      <Stack
         width={"100%"}
         height={700}
         alignItems={"center"}
         justifyContent={"center"}
         zIndex={99}>
         <span className="loader"></span>
      </Stack>
   );
};
