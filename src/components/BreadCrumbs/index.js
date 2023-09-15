import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { sortText } from "utils/constant";
export const BreadCrumbs = React.memo(({ breadcrumbs = [] }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ChevronRightIcon fontSize="25px" />}
        aria-label="breadcrumb"
        sx={{}}
      >
        {breadcrumbs.map((navigate) => (
          <Link
            key={navigate.to}
            to={navigate.to}
            style={{
              textTransform: "capitalize",
              textDecoration: "none",
            }}
          >
            {sortText(navigate.title)}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
});
