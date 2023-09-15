import { Add, MoreVertRounded } from "@mui/icons-material";
import {
   Card,
   CardContent,
   CardHeader,
   Divider,
   IconButton,
   Stack,
   Tooltip,
   Typography,
} from "@mui/material";
import { Button, Status } from "components";
import React from "react";
import { sortText } from "utils/constant";

export const CardWithHeaderFixed = ({
   enableAction,
   title,
   onAction,
   children,
   actionTitle = "ADD MORE",
   Icon = (
      <Add
         sx={{
            fontSize: "26px !important",
         }}
      />
   ),
}) => {
   return (
      <Card
         sx={{
            boxShadow: "none",
            border: "1px solid",
            borderColor: "neutrals.300",
            borderBottom: "none",
            borderRadius: 1,
         }}>
         <CardHeader
            sx={{
               borderBottom: "1px solid",
               borderColor: "neutrals.300",
            }}
            action={
               enableAction ? (
                  <Button
                     variant={""}
                     onClick={onAction}
                     aria-label="add more"
                     sx={{
                        color: "secondary.light",
                        ":hover": {
                           backgroundColor: "transparent !important",
                           textDecoration: "underline !important",
                        },
                     }}
                     startIcon={Icon}>
                     {actionTitle}
                  </Button>
               ) : (
                  <></>
               )
            }
            title={
               <Typography variant="h4" fontSize={16}>
                  {title || "Short Courses (6)"}
               </Typography>
            }
         />
         <CardContent sx={{ p: 0, pb: "0 !important", maxHeight: "330px", overflow: "auto" }}>
            {children}
         </CardContent>
      </Card>
   );
};

export const SimpleCard = ({
   title,
   createdOn,
   status,
   version,
   moreIcon = <MoreVertRounded />,
   courseType,
   onClick,
}) => {
   return (
      <Card sx={{ width: "100%", boxShadow: 0, padding: "1rem" }}>
         <CardContent
            sx={{
               padding: "0",
               display: "flex",
               flexDirection: "column",
               gap: 1,
               height: "10%",
            }}>
            <Stack direction={"row"} justifyContent={"space-between"}>
               <Status>{status}</Status>
               <IconButton
                  aria-label="more"
                  size="small"
                  sx={{
                     bgcolor: "common.white",
                  }}
                  onClick={onClick}>
                  {moreIcon}
               </IconButton>
            </Stack>
            <Tooltip title={title} arrow placement="top-start">
               <Typography
                  variant="h1"
                  sx={{ fontWeight: 600, fontSize: "18px", marginTop: "8px" }}>
                  {sortText(title)}
               </Typography>
            </Tooltip>
            <Typography
               variant="body2"
               color="text.secondary"
               sx={{ fontWeight: 400, fontSize: "14px" }}>
               {createdOn}
            </Typography>
            <Typography
               variant="body2"
               color="text.secondary"
               sx={{ fontWeight: 400, fontSize: "12px" }}>
               <b>{courseType}</b> | <b>{version}</b>
            </Typography>
         </CardContent>
         <Divider sx={{ margin: "14px 0" }} />
         <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 400, fontSize: "11px" }}>
            {"-----"}
         </Typography>
      </Card>
   );
};
