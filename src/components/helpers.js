import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderTextField = ({
  type,
  name,
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    margin="none"
    type={type}
    error={touched && error && true}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
