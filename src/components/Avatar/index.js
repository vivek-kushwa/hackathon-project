import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";

const Avatar = ({ src, ...rest }) => {
  return <MuiAvatar src={src} {...rest} />;
};

export default React.memo(Avatar);
