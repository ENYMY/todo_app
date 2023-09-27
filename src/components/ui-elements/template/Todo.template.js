import React from "react";
import { FullPageLoader } from "../common/CoreElements";

function TodoTemplate({ children = null }) {
  return (
    <div className="template-wrapper">
      {children}
      <FullPageLoader />
    </div>
  );
}

export default TodoTemplate;
