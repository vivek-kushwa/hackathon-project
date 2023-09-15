import { Close } from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export const Tags = ({ name, values, onChange, disabled, handleClick, isCreateNew }) => {
   const [clickedEl, setClickedEl] = useState("");

   // Selected tag when user is in view mode
   useEffect(() => {
      if (!isCreateNew && handleClick !== undefined && !clickedEl && values?.length) {
         setClickedEl(values[0]);
      }
   }, [values, clickedEl, isCreateNew, handleClick]);

   return (
      <Stack direction={"row"} gap={2} flexWrap="wrap">
         {values?.map(element => (
            <Chip
               key={element?.id || element}
               label={element?.name || element}
               variant="filled"
               size="large"
               onClick={() => {
                  if (handleClick) {
                     handleClick(element);
                     setClickedEl(element?.id || element);
                  }
               }}
               sx={{
                  borderRadius: 1.5,
                  fontSize: 18,
                  height: 50,
                  minWidth: 125,
                  bgcolor: "neutrals.50",
                  textTransform: "capitalize",
                  color: "primary",
                  border:
                     clickedEl === element?.id || clickedEl === element ? "1.5px solid" : "none",
                  borderColor:
                     clickedEl === element?.id || clickedEl === element ? "custom.dark" : "none",
                  ".MuiChip-deleteIcon": {
                     color: "primary.main",
                  },
                  ":hover": {
                     bgcolor: "neutrals.50",
                  },
               }}
               onDelete={() => {
                  onChange(
                     name,
                     values
                        .filter(tag => {
                           if (tag?.id) {
                              return tag?.id !== element?.id;
                           } else {
                              return tag !== element;
                           }
                        })
                        .map(value => value?.id || value)
                  );
               }}
               deleteIcon={
                  !disabled ? (
                     <Close
                        sx={{
                           cursor: "pointer",
                           color: "primary.main",
                        }}
                     />
                  ) : (
                     <></>
                  )
               }
            />
         ))}
      </Stack>
   );
};
