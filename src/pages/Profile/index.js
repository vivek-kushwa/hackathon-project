import { CloseRounded, LocationOn } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";

import "./styles.css";
import { debounce } from "@mui/material/utils";

const GOOGLE_MAPS_API_KEY = "AIzaSyAMQo6jcfeeX7_JlDo9hV6cfCHGYi10mPY";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const UDGeneralInfo = ({
  register,
  reset,
  errors,
  setValue,
  getValues,
  control,
  watch,
  value,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 400),
    []
  );

  React.useEffect(() => {
    let active = true;
    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }
    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }
    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          console.log(results, "svklsvmsde");
          newOptions = results.filter(
            (result) =>
              result.types.includes("locality") || // City
              result.types.includes("administrative_area_level_1") || // State
              result.types.includes("country") // Country
          );
          console.log(newOptions, "svklsvmsde");
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const fileValue = watch("profile_pic");
  return (
    <Grid
      container
      spacing={2}
      className="info-root-container"
      sx={{ padding: "4rem", paddingBottom: "4rem" }}
    >
      <Grid item xs={12}>
        <Typography
          className="pt-4 md:text-start text-center"
          variant="h5"
          sx={{ color: "#A52B92", fontWeight: "800" }}
        >
          Please fill in your information
        </Typography>
      </Grid>

      {/* 
        1st Container */}
      <Grid
        item
        xs={12}
        sx={{
          marginTop: "1rem",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "#F0F2F9",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={12}>
            <InputLabel>Full Name*</InputLabel>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              fullWidth
              //   {...register("full_name")}
              error={errors?.full_name?.message}
            />
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.full_name?.message}{" "}
            </Typography>
          </Grid>

          <Grid item xs={6} sx={{ marginTop: "1rem" }}>
            <InputLabel>DOB*</InputLabel>

            <TextField
              sx={{ backgroundColor: "#fff" }}
              name="startDate"
              type="date"
              size="small"
              placeholder="DD/MM/YYYY"
              InputProps={{ min: new Date().toISOString().slice(0, 16) }}
              //   {...register("dob")}
              error={errors?.dob?.message}
            />
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.dob?.message}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "1rem" }}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <Controller
                name={`gender`}
                control={control}
                defaultValue="" // Set an initial value if needed
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    defaultValue="male"
                    sx={{
                      display: "flex !important",
                      flexDirection: "row !important",
                    }}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      {/* 
        2nd Container */}
      <Grid
        item
        xs={12}
        sx={{
          marginTop: "1rem",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "#F0F2F9",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={6} sx={{ paddingRight: "10px" }}>
            <InputLabel>Phone Number*</InputLabel>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              fullWidth
              //   {...register("phone")}
              error={errors?.phone?.message}
            />
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.phone?.message}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Email Address*</InputLabel>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              fullWidth
              //   {...register("email")}
              error={errors?.email?.message}
            />
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.email?.message}{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* 
        3rd Container */}
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            backgroundColor: "#F0F2F9",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={6} sx={{ paddingRight: "10px" }}>
            <InputLabel>House Number*</InputLabel>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              fullWidth
              //   {...register("house_number")}
              error={errors?.house_number?.message}
            />
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.house_number?.message}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Landmark</InputLabel>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              fullWidth
              //   {...register("landmark")}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "1rem" }}>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              placeholder="Street 1*"
              fullWidth
              //   {...register("street_1")}
              error={errors?.street_1?.message}
            />
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.street_1?.message}{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "1rem" }}>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              placeholder="Street 2"
              fullWidth
              //   {...register("street_2")}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "1rem", paddingRight: "10px" }}>
            <InputLabel>City*</InputLabel>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              placeholder="Enter the city."
              // label="City*"
              fullWidth
              //   {...register("city")}
            />
            {/* <Controller
              name="city"
              control={control}
              defaultValue="" // Set an initial value if needed
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  getOptionLabel={(option) =>
                    typeof option === "string" ? option : option.description
                  }
                  filterOptions={(x) => x}
                  options={options}
                  autoComplete
                  includeInputInList
                  filterSelectedOptions
                  // value={value}
                  noOptionsText="No locations"
                  onChange={(event, newValue) => {
                    console.log(newValue, "Location");
                    setOptions(newValue ? [newValue, ...options] : options);
                    setValue(
                      "city",
                      newValue?.terms[newValue?.terms?.length - 3]?.value ||
                        newValue?.terms[newValue?.terms?.length - 2]?.value
                    );
                    setValue(
                      "state",
                      newValue?.terms[newValue?.terms?.length - 2]?.value
                    );
                    setValue(
                      "country",
                      newValue?.terms[newValue?.terms?.length - 1]?.value
                    );
                  }}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label="Add a location!!!"
                      fullWidth
                      error={errors?.city?.message}
                    />
                  )}
                  renderOption={(props, option) => {
                    const matches =
                      option.structured_formatting
                        .main_text_matched_substrings || [];
                    console.log(
                      option.structured_formatting,
                      option.structured_formatting.main_text,
                      matches
                    );
                    const parts = parse(
                      option.structured_formatting.main_text,
                      matches.map((match) => [
                        match.offset,
                        match.offset + match.length,
                      ])
                    );

                    return (
                      <li {...props}>
                        <Grid container alignItems="center">
                          <Grid
                            item
                            sx={{
                              width: "calc(100% - 44px)",
                              wordWrap: "break-word",
                            }}
                          >
                            {parts.map((part, index) => (
                              <Box
                                key={index}
                                component="span"
                                sx={{
                                  fontWeight: part.highlight
                                    ? "bold"
                                    : "regular",
                                }}
                              >
                                {part.text}
                              </Box>
                            ))}
                          </Grid>
                        </Grid>
                      </li>
                    );
                  }}
                />
              )}
            /> */}
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.city?.message}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "1rem" }}>
            <InputLabel>State/Province*</InputLabel>
            {/* <Controller
              name="state"
              control={control}
              defaultValue="" // Set an initial value if needed
              render={({ field }) => (
                <Select
                  {...field}
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  fullWidth
                  {...register("state")}
                  error={errors?.state?.message}
                >
                  <MenuItem value="Karnataka">Karnataka</MenuItem>
                  <MenuItem value="Delhi NCR">Delhi NCR</MenuItem>
                  <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                </Select>
              )}
            /> */}
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              placeholder="Enter the state."
              // label="State*"
              fullWidth
              //   {...register("state")}
              error={errors?.state?.message}
            />

            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.state?.message}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "1rem", paddingRight: "10px" }}>
            <InputLabel>Country*</InputLabel>
            <Controller
              name="country"
              control={control}
              defaultValue="" // Set an initial value if needed
              render={({ field }) => (
                <Select
                  {...field}
                  sx={{ backgroundColor: "#fff" }}
                  size="small"
                  fullWidth
                  {...register("country")}
                  error={errors?.country?.message}
                >
                  <MenuItem value="India">India</MenuItem>
                </Select>
              )}
            />
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.country?.message}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "1rem" }}>
            <InputLabel>ZIP Code*</InputLabel>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              fullWidth
              //   {...register("pincode")}
              error={errors?.pincode?.message}
            />
            <Typography
              sx={{
                color: "#d32f2f",
                fontSize: "12px",
                padding: "2px 2px 2px 6px",
              }}
            >
              {errors && errors?.pincode?.message}{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* 4th container */}
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            backgroundColor: "#F0F2F9",
            padding: "1rem",
            borderRadius: "10px",
          }}
          // justifyContent={"center"}
        >
          {/* <Grid item xs={12}>
            <InputLabel>Upload Profile Picture or Choose Avatar</InputLabel>
          </Grid>
          <Grid item xs={6} sx={{ paddingRight: "10px" }}>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              type="file"
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Upload"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <FileUploadOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("file")}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              sx={{ backgroundColor: "#fff" }}
              size="small"
              placeholder="Choose Avatar"
              fullWidth
              {...register("avatar")}
            >
              <MenuItem value={1}>avatar 1</MenuItem>
            </Select>
          </Grid> */}
          <InputLabel>Upload Profile Picture or Choose Avatar</InputLabel>
          <Grid item xs={12} container justifyContent={"center"}>
            <Grid item xs={3}>
              <input
                type="file"
                id="input-file-upload1"
                accept=".png, .jpg, .jpeg, .svg"
                onClick={(event) => {
                  event.currentTarget.value = null;
                }}
                // {...register("profile_pic", { required: true })}
              />

              <label id="label-file-upload1" htmlFor="input-file-upload1">
                <Grid
                  item
                  xs={12}
                  container
                  sx={{
                    textAlign: "center",
                    height: "20vh",
                    borderRadius: "15px",
                    padding: "0.5rem",
                    backgroundColor: "#fff",
                    border: "1px solid #341950",
                  }}
                  className="flex items-center justify-center relative"
                >
                  {fileValue && (
                    <IconButton
                      onClick={() => setValue("profile_pic", "")}
                      sx={{
                        position: "absolute !important",
                        top: 0,
                        right: 0,
                      }}
                    >
                      <CloseRounded />
                    </IconButton>
                  )}
                </Grid>
              </label>
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: "#d32f2f",
              fontSize: "12px",
              padding: "2px 2px 2px 6px",
            }}
          >
            {errors && errors?.profile_pic?.message}{" "}
          </Typography>
        </Grid>
      </Grid>
      {/* 5th container */}
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            backgroundColor: "#F0F2F9",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={12}>
            <InputLabel>About Me</InputLabel>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              size="small"
              placeholder="Description"
              fullWidth
              multiline
              rows={4}
              //   {...register("bio")}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={12} sx={{ marginTop: "1rem", textAlign: "end" }}>
        <Button type="submit" variant="contained" sx={{ width: "8rem" }}>
          Save
        </Button>
      </Grid> */}
    </Grid>
  );
};

export default UDGeneralInfo;
