import { Button, FormControl, TextField } from "@material-ui/core";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { brandSignIn, signIn, updateEmail, updatePassword } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Login</h2>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          onBlur={updateEmail}
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          onBlur={updatePassword}
          variant="outlined"
          required
        />
        <Button varient="outlined" color="primary" onClick={signIn}>
          Submit
        </Button>
        <Button
          varient="contained"
          onClick={() => brandSignIn(googleProvider)}
          color="primary"
        >
          Signin using Google
        </Button>
        <small>
          New user <Link to="/register">Register</Link>
        </small>
      </FormControl>
    </div>
  );
};

export default Login;
