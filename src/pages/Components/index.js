import { DeleteRounded } from "@mui/icons-material";
import { Box, DialogTitle, Divider, IconButton, Stack, Typography } from "@mui/material";
import {
  Button,
  Dialog,
  GoBack,
  Heading,
  Modal,
  NoDataFound,
  Pagination,
  SearchBox,
  Status,
  TextField,
  message,
} from "components";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Components = () => {
  const notify = () => {
    message.success("Success!");
    message.error("Success!");
    message.info("Success!");
  };

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  return (
    <Stack gap={5} m={5}>
      <Divider>Buttons from Component </Divider>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "secondary.mediumLight",
        }}
      >
        Primary
      </Button>
      <Button
        variant="outlined"
        disabled
        sx={{
          "&.Mui-disabled": {
            color: "secondary.light",
          },
        }}
      >
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      <Divider>Icon Buttons from MUI </Divider>
      <div>
        <IconButton aria-label="delete" size="small">
          <DeleteRounded fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteRounded fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteRounded />
        </IconButton>
        <IconButton aria-label="delete" size="large">
          <DeleteRounded fontSize="inherit" />
        </IconButton>
      </div>
      <Divider> Form Element from Component </Divider>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="Enter the name"
      />

      <Divider> Typography from MUI </Divider>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
      <Divider> Heading from Component </Divider>

      <Heading>
        Heading :- Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Heading>

      <Divider> Back from Component </Divider>
      <GoBack to="Back" />

      <Divider> Pagination from Component </Divider>
      <Pagination
        onChangePage={(_, page) => {
          console.log(page);
        }}
      />
      <Divider> status from Component </Divider>
      <Status>Published</Status>
      <Divider> Search box from Component </Divider>
      <SearchBox to="Back" placeholder="Enter here...." />

      <Divider> Notification box from Component </Divider>
      <Button variant="primary" onClick={notify}>
        Click me
      </Button>

      <Divider> NoData box from Component </Divider>
      <NoDataFound />
      <Divider> Modal from Component </Divider>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
      <Divider> Dialog from Component </Divider>

      <Dialog onCancel={handleClose2} open={open2}>
        <DialogTitle>Set backup account</DialogTitle>
      </Dialog>
      <Button variant="outlined" onClick={handleOpen2}>
        Open simple dialog
      </Button>
    </Stack>
  );
};

export default Components;

/////////////////// MORE COMPONENTS /////////////////////


// export * from "./Tabs";
// export * from "./Form";
// export * from "./Expendables";
// export * from "./BreadCrumbs";
// export * from "./FileUpload";
// export * from "./MoreOptions";
// export * from "./Editor";
// export * from "./Filters";
// export * from "./Loader";
