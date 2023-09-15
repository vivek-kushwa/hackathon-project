import React from "react";
import {
  AppBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SpaceBetween } from "components";
import { ImportContacts } from "@mui/icons-material";
const PageHeader = ({ PageIcon = <ImportContacts />, PageTitle, children }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        p: "1rem 3rem",
        width: "100%",
        display: "flex",
        gap: 1,
        bgcolor: "common.white",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "neutrals.300",
      }}
    >
      <SpaceBetween>
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{
              color: "primary.main",
              fontSize: "1.5rem",
              fontFamily: "Gellix-SemiBold",
              cursor: "pointer",
            }}
          >
            <ListItemIcon
              sx={{
                pr: 1.5,
                minWidth: "auto",
                fontFamily: "Gellix-SemiBold",
                fontSize: "inherit",
              }}
            >
              {PageIcon}
            </ListItemIcon>
            <ListItemText
              primary={PageTitle}
              primaryTypographyProps={{
                fontFamily: "Gellix-SemiBold",
                fontSize: "inherit",
              }}
            />
          </ListItem>
        </List>
        <>{children}</>
      </SpaceBetween>
    </AppBar>
  );
};

export default React.memo(PageHeader);
