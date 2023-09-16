import { Box, Paper, Stack } from "@mui/material";
import { Button, Heading, TextField } from "components";
import React from "react";
import auth from "assets/images/auth.svg";
import * as Yup from "yup";
import { Form } from "layout";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please Enter your first Name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string().email("Please enter your valid email"),
    password: Yup.string()
      .min(8, "Please enter your valid password")
      .required("Please enter your password"),
  });

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
        <Stack spacing={5} m={10}>
          <Heading>Sign Up</Heading>
          <Form
            handleSubmit={(data) => {}}
            validationSchema={validationSchema}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
          >
            {(formik) => {
              const { errors, touched, values, handleChange } = formik;
              return (
                <>
                  <Box>
                    <Stack spacing={3}>
                      <Stack direction={"row"} spacing={3}>
                        <TextField
                          label={"Enter your name"}
                          placeholder={"Enter your name"}
                          isRequired={true}
                          name={"firstName"}
                          onChange={handleChange}
                          value={values?.firstName}
                          error={touched?.firstName && !!errors?.firstName}
                          errorMessage={errors?.firstName}
                        />

                        <TextField
                          label={"Enter your last name"}
                          placeholder={"Enter your last name"}
                          isRequired={true}
                          name={"lastName"}
                          onChange={handleChange}
                          value={values?.lastName}
                          error={touched?.lastName && !!errors?.lastName}
                          errorMessage={errors?.lastName}
                        />
                      </Stack>

                      <Stack direction={"row"} spacing={3}>
                        <TextField
                          label={"Enter your email"}
                          placeholder={"Enter your email"}
                          isRequired={true}
                          name={"name"}
                          type={"email"}
                          onChange={handleChange}
                          value={values?.email}
                          error={touched?.email && !!errors?.email}
                          errorMessage={errors?.email}
                        />

                        <TextField
                          label={"Enter your password"}
                          placeholder={"Enter your password"}
                          isRequired={true}
                          name={"password"}
                          type={"password"}
                          onChange={handleChange}
                          value={values?.password}
                          error={touched?.password && !!errors?.password}
                          errorMessage={errors?.password}
                        />
                      </Stack>

                      <Button type="submit" variant={"contained"}>
                        Log In
                      </Button>
                    </Stack>
                  </Box>
                </>
              );
            }}
          </Form>
        </Stack>
      </Paper>
    </>
  );
};

export default SignUp;
