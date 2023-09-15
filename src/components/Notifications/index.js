import React, { useState } from "react";
import { Alert, AlertTitle, IconButton, Snackbar, Slide, Typography } from "@mui/material";
import { CheckCircleRounded, ErrorRounded, InfoRounded, CloseRounded } from "@mui/icons-material";

function Transition(props) {
   return <Slide {...props} direction="left" />;
}

export let message;

export function Notification() {
   const [open, setOpen] = useState(false);
   const [severity, setSeverity] = useState("success");
   const [description, setDescription] = useState("");
   const handleClose = (_, reason) => {
      if (reason === "clickaway") {
         return;
      }
      setDescription("");
      setOpen(false);
   };

   const helper = (description, severity) => {
      setOpen(true);
      setDescription(description);
      setSeverity(severity);
   };

   message = {
      success: description => {
         helper(description, "success");
      },
      error: description => {
         helper(description, "error");
      },
      info: description => {
         helper(description, "info");
      },
   };
   const backgroundColor =
      severity === "success" ? "success.light" : severity === "info" ? "info.light" : "error.light";

   const color =
      severity === "success" ? "success.main" : severity === "info" ? "info.main" : "error.main";

   const Icon =
      severity === "success" ? (
         <CheckCircleRounded
            sx={{
               color,
            }}
         />
      ) : severity === "info" ? (
         <InfoRounded
            sx={{
               color,
            }}
         />
      ) : (
         <ErrorRounded
            sx={{
               color,
            }}
         />
      );

   return (
      <Snackbar
         sx={{
            mt: 2,
            width: 400,

            borderRadius: 1,
         }}
         anchorOrigin={{ vertical: "top", horizontal: "right" }}
         open={open}
         autoHideDuration={3000}
         onClose={handleClose}
         TransitionComponent={Transition}>
         <Alert
            icon={Icon}
            severity={severity}
            action={
               <IconButton
                  onClick={() => setOpen(false)}
                  aria-label="close"
                  color="inherit"
                  size="small">
                  <CloseRounded fontSize="inherit" />
               </IconButton>
            }
            sx={{
               width: "100%",
               bgcolor: { backgroundColor },
               padding: "0.7rem 1.1rem",
               border: "1px solid",
               borderColor: color,
            }}>
            <AlertTitle sx={{ textTransform: "capitalize", color: color }}>
               <Typography variant="h6" fontSize={18}>
                  {severity}
               </Typography>
            </AlertTitle>
            <Typography variant="body1" fontSize={14} color="primary.main">
               {description}
            </Typography>
         </Alert>
      </Snackbar>
   );
}
