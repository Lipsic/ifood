import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Grid,
  Stack,
} from "@mui/material";
function SignForm() {
  return (
    <Stack>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          Insert a valid password!
        </FormHelperText>
      </FormControl>
    </Stack>
  );
}

export default SignForm;

export async function action() {
  fetch("url", {
    method: "POST",
    body: "data",
  });
}
