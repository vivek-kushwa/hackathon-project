import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Stack } from "@mui/material";
import { Button, Heading, TextField } from "components";
import { Form } from "layout";
import React, { useState } from "react";
import * as Yup from "yup";
import { Paper } from "@mui/material";
import auth from "assets/images/auth.svg";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
});
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [ConShowPassword, setConShowPassword] = useState(false);
  const handleClickConShowPassword = () => setConShowPassword(!ConShowPassword);

  return (
    <>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          gap: 5,
          m: 4,
          p: 5,
        }}
      >
        <Stack
          sx={{
            mt: 10,
          }}
        >
          <img src={auth} width={370} />
        </Stack>
        <Stack spacing={5} m={10} sx={{ width: "100%" }}>
          <Heading>Log IN</Heading>
          <Form
            handleSubmit={(data) => {}}
            validationSchema={validationSchema}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {(formik) => {
              const { errors, touched, values, handleChange, setFieldValue } =
                formik;
              console.log(values, errors, "asklv");
              return (
                <Stack spacing={3}>
                  <TextField
                    name="email"
                    onChange={handleChange}
                    value={values?.email}
                    error={touched?.email && !!errors?.email}
                    errorMessage={errors?.email}
                    placeholder="Enter your email here"
                  />
                  <TextField
                    name="password"
                    onChange={handleChange}
                    value={values?.password}
                    error={touched?.password && !!errors?.password}
                    errorMessage={errors?.password}
                    placeholder="Enter your password"
                    InputProps={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />

                  <Button variant={"contained"} type="submit">
                    Log In
                  </Button>
                </Stack>
              );
            }}
          </Form>
        </Stack>
      </Paper>
    </>
  );
};

export default Login;
