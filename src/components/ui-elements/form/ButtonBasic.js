import { Button } from "@mui/material";
import React from "react";
import {
  InputVariant,
  colorVariant,
} from "../../../configs/ui-elements.config";
import { emptyFunction } from "../common/CoreElements";

const ButtonBasic = ({
  variant = InputVariant.outlined,
  onBtnClick = emptyFunction,
  color = colorVariant.error,
  label = "",
}) => {
  return (
    <Button
      variant={variant}
      onClick={(event) => onBtnClick(event)}
      color={color}
    >
      {label}
    </Button>
  );
};

export default ButtonBasic;
