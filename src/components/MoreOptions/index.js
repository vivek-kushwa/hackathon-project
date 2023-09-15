import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";

export const MoreOptions = ({ data, anchorEl, handleCloseMoreActions }) => {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleCloseMoreActions}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <List
        disablePadding
        sx={{
          width: 150,
        }}
      >
        {data.map((item, i) => {
          return (
            <ListItem key={i} disablePadding>
              <ListItemButton
                onClick={item?.onClick}
                sx={{
                  fontSize: 20,
                }}
              >
                <ListItemIcon sx={{ color: "grey", minWidth: "2rem" }}>
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Popover>
  );
};
