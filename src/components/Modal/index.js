import React from "react";
import { Modal as MuiModal } from "@mui/material";

const Modal = ({ children, open, handleClose, ...rest }) => {
  return (
    <>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...rest}
      >
        {children}
      </MuiModal>
    </>
  );
};

export default React.memo(Modal);
