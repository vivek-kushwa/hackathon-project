import { UploadRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "components/Avatar";
import React from "react";

export const FileUpload = ({ name, onChange, disabled, error }) => {
   const handleUpload = async e => {
      const file = e.target.files[0];

      onChange(file);
   };
   return (
      <Box
         alignItems="center"
         display="flex"
         justifyContent="center"
         flexDirection="column"
         sx={{
            width: 180,
            height: 180,
            border: "1px dashed",
            borderColor: error ? "error.main" : "neutrals.500",
            borderRadius: 1,
            mx: "auto",
            pointer: disabled ? "default" : "",
         }}>
         <input
            accept="image/*"
            id="upload-Image"
            type="file"
            hidden
            disabled={disabled}
            name={name}
            onChange={handleUpload}
            onClick={event => {
               event.currentTarget.value = null;
            }}
         />
         <label htmlFor="upload-Image">
            <Button
               disabled={disabled}
               disableRipple={true}
               disableFocusRipple={true}
               disableTouchRipple={true}
               disableElevation={true}
               component="span"
               sx={{
                  ":hover": {
                     background: "transparent",
                  },
                  display: "flex",
                  gap: 2,
                  flexDirection: "column",
                  alignItems: "center",
                  textTransform: "none",
               }}>
               <Avatar
                  variant="rounded"
                  sx={{
                     background: "transparent",
                  }}>
                  <UploadRounded
                     sx={{
                        background: "transparent",
                        color: "neutrals.800",
                        fontSize: "3rem",
                     }}
                  />
               </Avatar>
               <Typography
                  variant="body1"
                  sx={{
                     color: "neutrals.800",
                     fontSize: 14,
                  }}>
                  Upload picture
               </Typography>
            </Button>
         </label>
      </Box>
   );
};
