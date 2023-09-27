import { Fragment } from "react";
import { isEmpty } from "../../../helper/util.helper";
import { NoResultsFound } from "./CoreElements";

const IsEmpty = ({
  value = null,
  renderIfEmpty = <NoResultsFound />,
  children = null,
}) => {
  return (
    <Fragment>{isEmpty(value) ? { renderIfEmpty } : { children }}</Fragment>
  );
};

export { IsEmpty };
