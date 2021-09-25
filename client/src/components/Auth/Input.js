import React from "react";
import { TextField, IconButton, Grid, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Input({
  name,
  half,
  handleChange,
  handleShowPassword,
  label,
  type,
  autoFocus,
}) {
  return (
    <Grid xs={12} md={half ? 6 : 12}>
      <TextField
        name={name}
        required
        fullWidth
        onChange={handleChange}
        label={label}
        type={type}
        variant="outlined"
        autoFocus={autoFocus}
        inputProps={
          name === "password" && {
            endAdorment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
          // : null
        }
      ></TextField>
    </Grid>
  );
}

export default Input;
