import { Box, Stack } from "@mui/material";
import { Button, Heading, TextField } from "components";
import React from "react";

const SignUp = () => {
  return (
    <>
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
    </>
  );
};

export default SignUp;
