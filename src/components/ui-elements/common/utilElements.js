import { Fragment } from "react";
import { isEmpty } from "../../../helper/util.helper";
import { NoResultsFound } from "./CoreElements";

const IsEmpty = ({
  value = [],
  renderIfEmpty = <NoResultsFound />,
  children = null,
}) => {
  const content = isEmpty(value) ? renderIfEmpty : children;
  return <Fragment>{content}</Fragment>;
};

export { IsEmpty };
