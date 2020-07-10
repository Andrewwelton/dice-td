import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";

const Dice = (props) => {
  console.log(props);
  return (
    <FontAwesomeIcon
      size="4x"
      icon={faDiceOne}
      color={props.colour}
    ></FontAwesomeIcon>
  );
};

export default Dice;
