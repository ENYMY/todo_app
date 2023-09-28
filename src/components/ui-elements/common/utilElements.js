import { Fragment } from "react";
import { isEmpty } from "../../../helper/util.helper";
import { NoResultsFound, emptyFunction } from "./CoreElements";

const IsEmpty = ({
  value = [],
  renderIfEmpty = <NoResultsFound />,
  children = null,
}) => {
  const content = isEmpty(value) ? renderIfEmpty : children;
  console.log(content);
  return <Fragment>{content}</Fragment>;
};

export { IsEmpty };
