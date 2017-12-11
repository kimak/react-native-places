import React from "react";

import * as icons from "./svg";

function Icon(props) {
  const SelectedIcon = icons[props.type];
  /* eslint-disable no-console */
  if (!SelectedIcon)
    console.warn("The icon ", props.type, " is not available.");
  /* eslint-enable no-console */
  return SelectedIcon ? <SelectedIcon {...props} /> : null;
}

export default Icon;
