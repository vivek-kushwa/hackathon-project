import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { Button, Checkbox } from "..";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";

const DisabledButton = styled(Button)(({ theme }) => ({
  ":disabled": {
    color: theme.palette.primary.main,
  },
}));

export const List = React.memo(
  ({ ExploreIcon = MoreVert, isPreventRendring = false }) => {
    const navigate = useNavigate();
    return (
      <>
        <Box
          sx={{
            p: "1rem 2rem",
            borderRadius: 2,
            m: "auto",
            mt: "1rem",
            bgcolor: "common.white",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`${crypto.randomUUID().toString()}`);
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item xs={6}>
              <Checkbox
                sx={{
                  color: "primary.hover",
                  fontWeight: 500,
                  "&.Mui-checked": {
                    color: "primary.main",
                  },
                }}
                formSx={{
                  "& .MuiFormControlLabel-label": {
                    color: "primary.main",
                    fontWeight: 500,
                    fontSize: 18,
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                label={"Full Stack Data Science"}
              />
            </Grid>
            {!isPreventRendring && (
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "primary.light",
                }}
              >
                Module Based
              </Grid>
            )}
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <DisabledButton
                variant="contained"
                disabled
                sx={{
                  backgroundColor: "primary.disabled",
                  color: "primary.main !important",
                  mr: 1,
                  borderRadius: 3,
                  px: 4,
                }}
              >
                Published
              </DisabledButton>
              <IconButton aria-label="menu" size="small">
                <ExploreIcon  />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
);
