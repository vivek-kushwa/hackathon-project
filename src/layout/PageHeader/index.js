import React, { useState } from "react";
import {
  AppBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SpaceBetween } from "components";
import { ImportContacts } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.svg";
const PageHeader = ({ PageIcon = <ImportContacts />, PageTitle, children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleRedirection = (path) => {
    navigate(path);
  };

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
              onClick={() => handleRedirection("/login")}
            >
              <img width={30} src={logo} />
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
        <SpaceBetween>
          <IconButton onClick={() => setIsMenuVisible((state) => !state)}>
            <Avatar />
          </IconButton>
        </SpaceBetween>
      </SpaceBetween>
      <Menu
        // transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ vertical: "top" }}
        sx={{
          left: "85vw",
        }}
        open={isMenuVisible}
        onClose={() => setIsMenuVisible(false)}
      >
        <MenuItem onClick={() => handleRedirection("/profile")}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => handleRedirection("/jobs")}>Jobs</MenuItem>
        {/* <MenuItem>Third</MenuItem> */}
      </Menu>
    </AppBar>
  );
};

export default React.memo(PageHeader);
