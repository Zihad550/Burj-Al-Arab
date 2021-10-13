import { Button, FormControl, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { register, updateEmail, updatePassword } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Register</h2>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Email"
          onBlur={updateEmail}
          type="email"
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
        <Button varient="outlined" color="primary" onClick={register}>
          Submit
        </Button>
        <small>
          Already Registered <Link to="/login">Login</Link>
        </small>
      </FormControl>
    </div>
  );
};

export default Register;
