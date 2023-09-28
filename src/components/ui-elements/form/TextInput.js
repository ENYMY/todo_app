import { TextField } from "@mui/material";
import React from "react";
import { emptyFunction } from "../common/CoreElements";
import { InputVariant } from "../../../configs/ui-elements.config";

const TextInput = ({
  id = "",
  label = "",
  variant = InputVariant.filled,
  onTextChange = emptyFunction,
  value = "",
}) => {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      onChange={(event) => onTextChange(event)}
      value={value}
    />
  );
};

export default TextInput;
