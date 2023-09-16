import { Box, Stack } from "@mui/material";
import { Button, Heading, TextField } from "components";
import React from "react";

const Login = () => {
  return (
    <>
      <Stack spacing={5} m={10}>
        <Heading>Log IN</Heading>
        <Box>
          <Stack spacing={3}>
            <TextField
              label={"Enter your name"}
              placeholder={"Enter your name"}
              isRequired={true}
              name={"name"}
            />

            <TextField
              label={"Enter your password"}
              placeholder={"Enter your password"}
              isRequired={true}
            />
            <Button variant={"contained"}>Log In</Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Login;
