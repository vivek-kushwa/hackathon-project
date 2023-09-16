import {
  Box,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";

import {
  Button,
  Center,
  FormLabel,
  RadioGroup,
  Select,
  TextField,
} from "components";
import { Form } from "layout";
import React from "react";
import { checkFileType } from "utils/constant";
import upload from "assets/images/blank-image.svg";
import { DeleteRounded, ModeEditOutlineRounded } from "@mui/icons-material";
import * as Yup from "yup";

const Profile = () => {
  return (
    <Form
      handleSubmit={(data) => {}}
      validationSchema={validationSchema}
      initialValues={{
        first_name: "",
        last_name: "",
        gender: "",
        phone_number: "",
        certificate: "",
        category: "",
      }}
    >
      {(formik) => {
        const { errors, touched, values, handleChange, setFieldValue } = formik;
        console.log(values, errors, "asklv");
        return (
          <Grid
            container
            spacing={2}
            className="info-root-container"
            sx={{ padding: "4rem", paddingBottom: "4rem" }}
          >
            <Grid item xs={12}>
              <Typography
                mt={"3rem"}
                className="pt-4 md:text-start text-center"
                variant="h5"
                sx={{ color: "primary.main", fontWeight: "800" }}
              >
                Personal Details
              </Typography>
            </Grid>
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
                  backgroundColor: "#fff",
                  padding: "2rem",
                  borderRadius: "10px",
                }}
                gap={2}
              >
                <Grid item xs={5.8}>
                  <TextField
                    name="first_name"
                    label={"Enter First name"}
                    onChange={handleChange}
                    value={values?.first_name}
                    error={touched?.first_name && !!errors?.first_name}
                    errorMessage={errors?.first_name}
                  />
                </Grid>
                <Grid item xs={5.8}>
                  <TextField
                    name="last_name"
                    label={"Enter Last name"}
                    onChange={handleChange}
                    value={values?.last_name}
                    error={touched?.last_name && !!errors?.last_name}
                    errorMessage={errors?.last_name}
                  />
                </Grid>

                <Grid item xs={6} sx={{ marginTop: "1rem" }}>
                  <TextField
                    name="phone_number"
                    label={"Enter Phone "}
                    onChange={handleChange}
                    value={values?.phone_number}
                    error={touched?.phone_number && !!errors?.phone_number}
                    errorMessage={errors?.phone_number}
                  />
                </Grid>
                <Grid
                  item
                  xs={5.8}
                  container
                  alignItems={"center"}
                  width={"100%"}
                >
                  <RadioGroup
                    label={"Gender"}
                    value={values?.gender}
                    name={"gender"}
                    options={[
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                    ]}
                    error={!!errors?.gender}
                    errorMsg={errors?.gender}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography
                mt={"3rem"}
                className="pt-4 md:text-start text-center"
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: "800",
                }}
              >
                Additional Details
              </Typography>
            </Grid>
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
                  backgroundColor: "#fff",
                  padding: "2rem",
                  borderRadius: "10px",
                }}
                gap={4}
              >
                <Grid item xs={12}>
                  <Select
                    label={"Select how you are special"}
                    options={[
                      { label: "Blindness", value: "Blind" },
                      { label: "Partial Blindness", value: "Partially Blind" },
                      {
                        label: "Hearing Impairment",
                        value: "Hearing Impaired",
                      },
                      { label: "Handicap", value: "Disabled" },
                      {
                        label: "Person with Disability",
                        value: "Disabled Person",
                      },
                    ]}
                    name="category"
                    onChange={handleChange}
                    value={values?.category}
                    error={!!errors?.category}
                    errorMsg={errors?.category}
                    placeholder="Select how you are special"
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  container
                  alignItems={"center"}
                  width={"100%"}
                  justifyContent={"flex-start"}
                  flexDirection={"column"}
                >
                  <FormLabel
                    error={errors?.certificate}
                    label="Please upload certificate"
                  />
                  <Box
                    sx={{
                      width: "15rem",
                      m: "auto",
                    }}
                  >
                    <Center
                      sx={{ marginTop: "1.5rem", cursor: "pointer" }}
                      htmlFor="certificate"
                      component={"label"}
                    >
                      <Paper
                        elevation={0}
                        variant="outlined"
                        sx={{
                          padding: "1.2rem",
                          border: "1px solid",
                          borderColor: errors?.certificate
                            ? "error.main"
                            : "primary.main",
                          position: "relative",
                        }}
                      >
                        {checkFileType(values?.certificate, upload)}

                        {values?.certificate && (
                          <Box
                            position={"absolute"}
                            bottom={"0"}
                            right={"0"}
                            display={"flex"}
                            gap={"1rem"}
                            onClick={() => {
                              setFieldValue("certificate", "");
                            }}
                            htmlFor="certificate"
                          >
                            <IconButton>
                              {" "}
                              <DeleteRounded />
                            </IconButton>
                          </Box>
                        )}
                      </Paper>
                      <input
                        accept="image/*"
                        type="file"
                        name="certificate"
                        id="certificate"
                        hidden
                        onChange={(e) => {
                          console.log(e.target.files);
                          setFieldValue("certificate", e.target.files);
                        }}
                        onClick={(event) => {
                          event.currentTarget.value = null;
                        }}
                      />
                    </Center>
                  </Box>

                  {errors?.certificate && (
                    <Typography
                      sx={{
                        color: "error.main",
                        fontSize: "1rem",
                        mt: "0.5rem",
                      }}
                      variant="subtitle2"
                    >
                      {errors?.certificate}{" "}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              sm={12}
              width={"100%"}
              container
              justifyContent={"center"}
              gap={"4rem"}
              mt={"2rem"}
            >
              <Button
                variant={"outlined"}
                sx={{
                  width: {
                    xs: "15rem",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant={"contained"}
                sx={{
                  width: {
                    xs: "15rem",
                  },
                }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        );
      }}
    </Form>
  );
};

export default Profile;

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .matches(
      /^[aA-zZ\s]+$/,
      "Firs Name can only contain alphabetic characters"
    ),
  last_name: Yup.string()
    .required("Last name is required")
    .matches(
      /^[aA-zZ\s]+$/,
      "Last Name can only contain alphabetic characters"
    ),
  phone_number: Yup.string()
    .required("Mobile number is required")
    .max(10)
    .min(10)
    .matches(/^\d{10}$/)
    .nullable()
    .typeError("Invalid mobile number."),
  certificate: Yup.mixed()
    .test("fileOrUrl", "This field is required.", function (value) {
      const hasFile = value && value[0] instanceof File;
      const hasUrl =
        typeof value === "string" && Yup.string().url().isValidSync(value);
      return hasFile || hasUrl;
    })
    .test("fileSize", "File size should be less than 5MB", (value) => {
      if (value && value[0] && value[0] instanceof File) {
        return value[0].size <= 5 * 1024 * 1024;
      }
      return true;
    })

    .test(
      "fileType",
      "Only JPEG, PNG, SVG, and WebP files are allowed",
      (value) => {
        if (value && value[0] && value[0] instanceof File) {
          const fileType = value[0].type;
          return (
            fileType === "image/jpeg" ||
            fileType === "image/png" ||
            fileType === "image/svg+xml" ||
            fileType === "image/webp" ||
            fileType === "application/pdf"
          );
        }
        return true;
      }
    ),
  category: Yup.string().required("This field is required"),
  gender: Yup.string().required("Gender is required"),
});
