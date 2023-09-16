import React, { useState } from "react";
import {
  AppBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
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
          <Typography
            onClick={() => {
              navigate("/jobs");
            }}
            variant="h1"
            display="block"
            fontSize={"1.2rem"}
            mr={"1rem"}
            sx={{
              color: "primary.main",
              hover: {
                color: "primary.main",
              },
              cursor: "pointer",
            }}
          >
            {"Jobs"}
          </Typography>
          <Typography
            onClick={() => {
              navigate("/profile");
            }}
            variant="h1"
            display="block"
            fontSize={"1.2rem"}
            mr={"1rem"}
            sx={{
              color: "primary.main",
              hover: {
                color: "primary.main",
              },
              cursor: "pointer",
            }}
          >
            {"Profile"}
          </Typography>
          <Typography
            onClick={() => {
              navigate("/login");
            }}
            variant="h1"
            display="block"
            fontSize={"1.2rem"}
            mr={"1rem"}
            sx={{
              color: "primary.main",
              hover: {
                color: "primary.main",
              },
              cursor: "pointer",
            }}
          >
            {"Login"}
          </Typography>
          {/* <IconButton onClick={() => setIsMenuVisible((state) => !state)}>
            <Avatar />
          </IconButton> */}
        </SpaceBetween>
      </SpaceBetween>
    </AppBar>
  );
};

export default React.memo(PageHeader);
