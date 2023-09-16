import { Box, Paper, Stack } from "@mui/material";
import { Button, Heading, TextField } from "components";
import React from "react";
import auth from "assets/images/auth.svg";

const SignUp = () => {
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
          <Box>
            <Stack spacing={3}>
              <Stack direction={"row"} spacing={3}>
                <TextField
                  label={"Enter your name"}
                  placeholder={"Enter your name"}
                  isRequired={true}
                  name={"firstName"}
                />

                <TextField
                  label={"Enter your last name"}
                  placeholder={"Enter your last name"}
                  isRequired={true}
                  name={"lastName"}
                />
              </Stack>

              <Stack direction={"row"} spacing={3}>
                <TextField
                  label={"Enter your email"}
                  placeholder={"Enter your email"}
                  isRequired={true}
                  name={"name"}
                  type={"email"}
                />

                <TextField
                  label={"Enter your password"}
                  placeholder={"Enter your password"}
                  isRequired={true}
                  name={"password"}
                  type={"password"}
                />
              </Stack>

              <Button variant={"contained"}>Log In</Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default SignUp;
