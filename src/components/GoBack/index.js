import {  ArrowBackRounded } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Buttons";

export const GoBack = React.memo(({ to }) => {
  const navigate = useNavigate();
  return (
    <Button
      startIcon={
        <ArrowBackRounded color="neutrals.main" sx={{ mr: 0.2, fontSize: "6rem" }} />
      }
      onClick={() => navigate(-1)}
      sx={{
        color: "neutrals.main",
        fontFamily: "Proxima_Nova-Regular",
        px: 0,
        ":hover": { bgcolor: "transparent" },
      }}
    >
      {to}
    </Button>
  );
});
