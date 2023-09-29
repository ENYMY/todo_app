import { Fragment, useContext } from "react";
import { IsEmpty } from "./utilElements";
import { CircularProgress } from "@mui/material";
import { uiContext } from "../../global-context/contexts/ui-context";
import { isEmpty } from "../../../helper/util.helper";

const emptyFunction = (...param) => {};

const NoResultsFound = () => {
  return <div>No Todos Found</div>;
};

const LoopItems = ({
  wrapperStyle = "todo-list",
  items = [],
  renderIfEmpty = <NoResultsFound />,
  renderItem = emptyFunction,
}) => {
  return (
    <ul className={wrapperStyle}>
      <IsEmpty value={items} renderIfEmpty={renderIfEmpty}>
        <Fragment>
          {!isEmpty(items)
            ? items.map((item, index) => renderItem(item, index))
            : null}
        </Fragment>
      </IsEmpty>
    </ul>
  );
};

const SpinWraper = ({ color = "inherit" }) => {
  return <CircularProgress color={color} />;
};

// const FullPageLoader = () => {
//   const uiState = useContext(uiContext);
//   return <Fragment>{uiState.state.isLoad ? <SpinWraper /> : null}</Fragment>;
// };
export { NoResultsFound, LoopItems, emptyFunction, SpinWraper };
