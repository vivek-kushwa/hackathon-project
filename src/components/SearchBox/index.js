import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useAutocomplete,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 8,
  border: `1px solid ${theme.palette.primary.light}`,
  backgroundColor: theme.palette.common.white,
  marginRight: 0,
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),

  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  color: theme.palette.neutrals.main,
}));

const Input = styled("input")(({ theme }) => ({
  color: "inherit",
  border: "1px solid " + theme?.palette?.neutrals["300"],
  outline: "1px solid " + theme?.palette?.neutrals["300"],

  padding: theme.spacing(2, 1, 2, 0),
  borderRadius: "5px",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
  width: "100%",
  "&:focus": {
    borderColor: theme.palette.custom.dark,
  },
}));

export const SearchBox = React.memo(
  ({
    list = [],
    basesOn = "name",
    navigateTo = "",
    onClick = () => {},
    ...rest
  }) => {
    const {
      getRootProps,
      getInputLabelProps,
      getInputProps,
      getListboxProps,
      getOptionProps,
      groupedOptions,
    } = useAutocomplete({
      id: "use-autocomplete-demo",
      options: list,
      getOptionLabel: (option) => option[basesOn],
    });
    const navigation = useNavigate();

    return (
      <Box position={"relative"} width={"100%"}>
        <Search {...getRootProps()}>
          <SearchIconWrapper {...getInputLabelProps()}>
            <SearchIcon />
          </SearchIconWrapper>
          <Input
            sx={{ fontSize: "1rem" }}
            fullWidth
            {...getInputProps()}
            {...rest}
          />
        </Search>

        {groupedOptions && groupedOptions?.length > 0 && (
          <List
            disablePadding
            {...getListboxProps()}
            sx={{
              position: "absolute",
              top: "105%",
              width: "100%",
              maxHeight: 300,
              border: "1px solid",
              borderColor: "neutrals.300",
              bgcolor: "common.white",
              overflow: "auto",
              zIndex: 1,
            }}
          >
            {groupedOptions.map((option, index) => {
              console.log(option);
              return (
                <ListItem
                  key={option?.id || option?.userId || index}
                  disablePadding
                  {...getOptionProps({ option, index })}
                >
                  <ListItemButton
                    onClick={() => {
                      !navigateTo
                        ? onClick(option)
                        : navigation(navigateTo + "/" + option?.id);
                    }}
                    sx={{
                      fontSize: 20,
                    }}
                  >
                    <ListItemText
                      primary={
                        option?.id
                          ? option[basesOn]
                          : `${option["User.firstName"]} ${option["User.lastName"]}`
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
    );
  }
);

export const PopSearchBox = React.memo((props) => {
  return (
    <Box position={"relative"} width={"100%"}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Input sx={{ fontSize: "1rem" }} fullWidth {...props} />
      </Search>
    </Box>
  );
});

export const SearchBoxWithApi = React.memo(
  ({ dispatchAction = () => {}, ...rest }) => {
    const [query, setQuery] = useState("");

    const debouncedSearch = _.debounce((value) => {
      dispatchAction({ name: value });
    }, 1000);

    useEffect(() => {
      debouncedSearch(query);
      return () => {
        debouncedSearch.cancel();
      };
    }, [query]);

    const handleQueryChange = (event) => {
      setQuery(event.target.value);
    };

    return (
      <Box position={"relative"} width={"100%"}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <Input
            sx={{ fontSize: "1rem" }}
            fullWidth
            onChange={handleQueryChange}
            {...rest}
          />
        </Search>
      </Box>
    );
  }
);
