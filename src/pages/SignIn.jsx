import React, { useState } from "react";
import { Container, Button, Typography, Stack } from "@mui/material";
import SignForm from "../test/SignForm";
import { Link, useSearchParams } from "react-router-dom";
function SignIn() {
  const [isLogged, setIsLogged] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode");
  console.log("isLogin", isLogin);
  return (
    <div>
      {isLogged ? (
        <>
          <Container>
            <Typography variant="h5" textAlign={"center"}>
              Falta pouco para matar sua fome!
            </Typography>
            <Typography variant="h6" textAlign={"center"}>
              {isLogged ? "Como deseja continuar" : "Cadastre-se"}
            </Typography>
          </Container>
          <Container sx={{ marginBottom: "1.5em" }}>
            <Stack direction="column" variant="contained" sx={{ gap: "1em" }}>
              <Button variant="contained">
                <Link to={`?mode=${isLogin ? "login: " : "signup"}`}>
                  Facebook
                </Link>
              </Button>
              <Button variant="contained" sx={{ margin: "0 2rem" }}>
                Google
              </Button>
            </Stack>
          </Container>
          <Stack direction="row" justifyContent={"center"} sx={{ gap: "1em" }}>
            <Button variant="contained" fullWidth>
              Celular
            </Button>
            <Button variant="contained" fullWidth>
              Email
            </Button>
          </Stack>
        </>
      ) : (
        <SignForm />
      )}
    </div>
  );
}

export default SignIn;
