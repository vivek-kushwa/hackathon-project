import React from "react";
import { Button as MuiButton } from "@mui/material";
import { Add, Edit, Remove } from "@mui/icons-material";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export function ToggleButtons({ handleChange, value = "simple_button", btnList = [], sx = {} }) {
   return (
      <ToggleButtonGroup
         value={value}
         exclusive
         onChange={handleChange}
         fullWidth
         sx={{
            p: 1,
            border: "1px solid",
            borderColor: "neutrals.300",
         }}>
         {btnList.map(btn => (
            <ToggleButton
               key={btn.type}
               value={btn.type}
               aria-label={btn?.text}
               sx={{
                  fontSize: "1rem",
                  color: "primary.main",
                  border: "none",
                  borderRadius: "3px !important",
                  ...sx,
               }}>
               {btn.icon || btn?.text}
            </ToggleButton>
         ))}
      </ToggleButtonGroup>
   );
}

export const Button = ({ children, variant, ...rest }) => {
   return (
      <MuiButton variant={variant} {...rest}>
         {children}
      </MuiButton>
   );
};

export const AddButton = ({ Title, ...rest }) => {
   return (
      <MuiButton
         variant={"contained"}
         sx={{
            fontSize: 14,
         }}
         startIcon={
            <Add
               sx={{
                  fontSize: "24px !important",
               }}
            />
         }
         {...rest}>
         {Title || "ADD NEW"}
      </MuiButton>
   );
};

export const ViewAllButton = ({ Title, ...rest }) => {
   return (
      <MuiButton
         variant={"outlined"}
         sx={{
            fontSize: 14,
         }}
         startIcon={
            <FormatListBulletedRoundedIcon
               sx={{
                  fontSize: "26px !important",
               }}
            />
         }
         {...rest}>
         {Title || "VIEW ALL"}
      </MuiButton>
   );
};

export const AddMoreButton = ({ sx, Title, ...rest }) => {
   return (
      <MuiButton
         variant="outlined"
         sx={{
            borderStyle: "dashed",
            py: 1,
            borderWidth: 2,
            borderColor: "neutrals.700",
            color: "neutrals.main",
            fontFamily: "Proxima_Nova-Regular",
            ":hover": {
               borderStyle: "dashed",
               borderWidth: 2,
               borderColor: "neutrals.700",
            },
            ...sx,
         }}
         startIcon={
            <Add
               sx={{
                  fontSize: "22px !important",
               }}
            />
         }
         {...rest}>
         {Title || "Add more"}
      </MuiButton>
   );
};

export const EditButton = ({ Title, ...rest }) => {
   return (
      <MuiButton
         variant={"contained"}
         sx={{
            fontSize: 14,
         }}
         size="large"
         startIcon={
            <Edit
               sx={{
                  fontSize: "18px !important",
               }}
            />
         }
         {...rest}>
         {Title || "EDIT"}
      </MuiButton>
   );
};

export const DeleteButton = ({ Icon = Remove, Title, ...rest }) => {
   return (
      <MuiButton variant={"contained"} startIcon={<Icon />} {...rest}>
         {Title || "DELETE"}
      </MuiButton>
   );
};
