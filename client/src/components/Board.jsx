import React, { useReducer } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { initialState, BoardReducer } from "../reducers/BoardReducer";
import { DraggableTypes, Colours } from "../constants/constants";
import { getSpawnPosition, getSpawnType } from "../utilities/BoardUtility";
import Dice from "./Dice";

const BoardSquare = ({ dispatch, children, row, column }) => {
  const [{ sourceSquare }, drop] = useDrop({
    accept: DraggableTypes.DICE,
    drop: () => {
      dispatch({
        type: "move_die",
        sourceRow: sourceSquare.sourceRow,
        sourceColumn: sourceSquare.sourceColumn,
        destRow: row,
        destCol: column,
      });
    },
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
      sourceSquare: mon.getItem(),
    }),
  });

  return (
    <td ref={drop} className="Board-cell align-middle">
      {children}
    </td>
  );
};

const buildBoard = (boardState, dispatch) => {
  return boardState.map((row, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {row.map((column, columnIndex) => (
          <BoardSquare
            key={rowIndex + columnIndex}
            dispatch={dispatch}
            row={rowIndex}
            column={columnIndex}
          >
            {column && <Dice {...column} row={rowIndex} column={columnIndex} />}
          </BoardSquare>
        ))}
      </tr>
    );
  });
};

const Board = () => {
  const [state, dispatch] = useReducer(BoardReducer, initialState);

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Card bordered bg="light">
            <Card-body>
              <DndProvider backend={HTML5Backend}>
                <Table bordered>
                  <tbody>{buildBoard(state.board, dispatch)}</tbody>
                </Table>
              </DndProvider>
              <Button
                style={{ "border-radius": "50%" }}
                variant="outline-dark"
                disabled={!state.openSlot}
                onClick={(e) => {
                  const { rowNum, colNum } = getSpawnPosition(state.board);
                  const colour = getSpawnType(Colours.length);
                  dispatch({ type: "spawn_die", rowNum, colNum, colour });
                }}
              >
                <FontAwesomeIcon size="2x" icon={faDice} />
              </Button>
            </Card-body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Board;
