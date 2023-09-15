import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { SpaceBetween, Heading, Button } from "components";
import React, { useEffect } from "react";

export const Expandable = ({
  title,
  children,
  isCreateNew,
  isEditable,
  isViewOnly,
  extraFields = [],
  onEditAction = () => {},
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (isEditable && !open) {
      setOpen(true);
    } else if (!isEditable && open) {
      setOpen(false);
    }
  }, [isEditable]);

  return (
    <>
      <SpaceBetween mt={2}>
        <Tooltip title={title} arrow>
          <Heading>{title}</Heading>
        </Tooltip>

        {isViewOnly && (
          <Button
            variant={"contained"}
            onClick={() => {
              setOpen(true);
              onEditAction();
            }}
          >
            EDIT
          </Button>
        )}
        <IconButton onClick={handleClick} sx={{ cursor: "pointer" }}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </SpaceBetween>
      {open || isCreateNew || extraFields.length === 0 ? (
        <></>
      ) : (
        <Paper variant="outlined" elevation={0} sx={{ mt: 3, pl: 1 }}>
          <List
            sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          >
            {extraFields.map((item, index) => (
              <ListItemButton
                key={index}
                sx={{
                  p: "0.5rem",
                  fontSize: "1.5rem",
                  pointerEvents: "none",
                }}
              >
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: 12,
                        }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.label || "----"}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: 14,
                          mt: 2,
                          textTransform: "capitalize",
                        }}
                        component="span"
                        variant="h6"
                        color="primary.main"
                      >
                        {item?.value || "----"}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
      <Divider sx={{ mt: 2, mb: 3 }} />
      <Collapse in={isCreateNew ? !open : open} timeout="auto" unmountOnExit>
        {children}
        <Divider sx={{ mt: 3, mb: 3 }} />
      </Collapse>
    </>
  );
};

export const SimpleExpandable = ({ children, HeadingChildren }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <SpaceBetween mt={2}>
        {HeadingChildren}
        <IconButton onClick={handleClick} sx={{ cursor: "pointer" }}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </SpaceBetween>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
        <Divider sx={{ mt: 3, mb: 3 }} />
      </Collapse>
    </>
  );
};
