import { Paper } from "@mui/material";

const PreviewEditor = ({ content }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        maxHeight: 450,
        height: 450,
        // width: "70% !important",
        overflow: "auto",
        p: "1rem 2rem",
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </Paper>
  );
};
export default PreviewEditor;
