import React, { useReducer } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";

import { initialState, BoardReducer } from "../reducers/BoardReducer";

const buildTableRows = (row) => {
  return Object.keys(row).map((rowKey) => (
    <td className="Board-cell align-middle">
      {" "}
      {row[rowKey] && <FontAwesomeIcon size="4x" icon={faDiceOne} />}
    </td>
  ));
};

const Board = () => {
  const [state, dispatch] = useReducer(BoardReducer, initialState);

  return (
    <Container>
      <Row>
        <Col>
          <Table bordered>
            <tbody>
              <tr>{buildTableRows(state["0"])}</tr>
              <tr>{buildTableRows(state["1"])}</tr>
              <tr>{buildTableRows(state["2"])}</tr>
            </tbody>
          </Table>
          <Button
            variant="outline-dark"
            disabled={!state.openSlot}
            onClick={() => dispatch({ type: "spawn_die" })}
          >
            Spawn Die
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Board;
