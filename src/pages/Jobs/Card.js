import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import {
  AccessTimeFilledRounded,
  BookmarkBorderOutlined,
  BookmarkRounded,
  LocationOnRounded,
  MonetizationOnRounded,
} from "@mui/icons-material";

export default function JobCard() {
  return (
    <Card sx={{ maxWidth: 700, p: "1rem" }}>
      <Stack direction={"row"}>
        <CardContent
          sx={{
            width: "90%",
          }}
        >
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            fontSize={"1.8rem"}
            fontWeight={"700"}
          >
            Lizard
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            lineHeight={1.5}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Stack
            gap={1}
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            mt={"2rem"}
          >
            <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
              <IconButton>
                <LocationOnRounded />
              </IconButton>
              <Typography variant="subtitle1" lineHeight={1.5}>
                Aligarh
              </Typography>
            </Box>
            <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
              <IconButton>
                <MonetizationOnRounded />
              </IconButton>
              <Typography variant="subtitle1" lineHeight={1.5}>
                22/04/2023
              </Typography>
            </Box>
          </Stack>
        </CardContent>
        <Stack gap={1}>
          <IconButton
            sx={{
              fontSize: "3rem",
            }}
          >
            <BookmarkRounded />
            {/* <BookmarkBorderOutlined /> */}
          </IconButton>

          <Button variant="contained">Apply</Button>
        </Stack>
      </Stack>
    </Card>
  );
}
