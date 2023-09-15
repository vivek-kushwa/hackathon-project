import {
  CropSquareRounded,
  FilterListRounded,
  StopRounded,
  FilterAltRounded,
} from "@mui/icons-material";
import { Box, IconButton, Popover, Typography, Stack } from "@mui/material";
import { Center } from "components/Flex";
import { RadioGroup } from "components/Form";

import { useState } from "react";

export const SortBy = ({
  filterOptions = [
    { label: "Last Updated", value: "updatedAt" },
    { label: "Date Created", value: "createdAt" },
  ],
  dispatchAction = () => {},
  selectedFilter = "",
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState(selectedFilter);
  const handleOpenMoreActions = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMoreActions = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        sx={{
          border: "1px solid",
          borderColor: "neutrals.500",
          height: "100%",
          color: "Primary.main",
          p: 1,
          fontSize: "2rem",
          borderRadius: 1,
        }}
        onClick={handleOpenMoreActions}
        {...rest}
      >
        <Box component={"div"} sx={{ display: "flex", margin: "0px 8px" }}>
          <FilterListRounded />
        </Box>
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleCloseMoreActions}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <RadioGroup
          label={"Sort by"}
          name={"filter"}
          options={filterOptions}
          onChange={(e) => {
            setFilterType(e.target.value);
            dispatchAction(e.target.value);
          }}
          value={filterType}
          icon={
            <CropSquareRounded
              sx={{
                fontSize: 24,
              }}
            />
          }
          checkedIcon={
            <Center
              component={"span"}
              sx={{
                position: "relative",
                color: "secondary.main",
              }}
            >
              <CropSquareRounded
                sx={{
                  fontSize: 24,
                }}
              />
              <StopRounded
                sx={{
                  position: "absolute",
                  fontSize: 18,
                }}
              />
            </Center>
          }
        />
      </Popover>
    </Box>
  );
};

const filterOptions = [
  { label: "Published", value: "published" },
  { label: "In Draft", value: "draft" },
];
export const Filter = ({ onApplyFilter = () => {}, ...rest }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState("");
  const handleOpenMoreActions = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMoreActions = () => {
    setAnchorEl(null);
  };

  const handleFilter = (type) => {
    onApplyFilter(type);
  };

  return (
    <Box>
      <IconButton
        sx={{
          border: "1px solid",
          borderColor: "neutrals.500",
          height: "100%",
          borderRadius: 1,
        }}
        onClick={handleOpenMoreActions}
        {...rest}
      >
        <Box component={"div"} sx={{ display: "flex", margin: "0px 8px" }}>
          <FilterAltRounded
            sx={{
              color: "primary.main",
            }}
          />
        </Box>
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleCloseMoreActions}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <RadioGroup
          label={
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1" color={"neutrals.main"}>
                Filter
              </Typography>
              <Typography
                variant="body1"
                color={"secondary.main"}
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleFilter();
                  setFilterType("");
                  setAnchorEl(null);
                }}
              >
                Clear
              </Typography>
            </Stack>
          }
          name={"filter"}
          options={filterOptions}
          onChange={(e) => {
            setFilterType(e.target.value);
            handleFilter(e.target.value);
          }}
          value={filterType}
          icon={
            <CropSquareRounded
              sx={{
                fontSize: 24,
              }}
            />
          }
          checkedIcon={
            <Center
              component={"span"}
              sx={{
                position: "relative",
                color: "secondary.main",
              }}
            >
              <CropSquareRounded
                sx={{
                  fontSize: 24,
                }}
              />
              <StopRounded
                sx={{
                  position: "absolute",
                  fontSize: 18,
                }}
              />
            </Center>
          }
        />
      </Popover>
    </Box>
  );
};
