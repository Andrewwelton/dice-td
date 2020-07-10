import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import { useDrag } from "react-dnd";

import { DraggableTypes } from "../constants/constants";

const Dice = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: DraggableTypes.DICE,
      sourceRow: props.row,
      sourceColumn: props.column,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}>
      <FontAwesomeIcon
        size="4x"
        icon={faDiceOne}
        color={props.colour}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Dice;
