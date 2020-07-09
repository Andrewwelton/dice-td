import React, { useReducer } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

import { initialState, BoardReducer } from "../reducers/BoardReducer";

const buildTableRows = (row) => {
  return Object.keys(row).map((rowKey) => (
    <td>{row[rowKey] && <FontAwesomeIcon icon={faDiceOne} />}</td>
  ));
};

const Board = () => {
  const [state, dispatch] = useReducer(BoardReducer, initialState);

  return (
    <Container>
      <Row>
        <Col>
          <Table>
            <tbody>
              <tr>{buildTableRows(state["0"])}</tr>
              <tr>{buildTableRows(state["1"])}</tr>
              <tr>{buildTableRows(state["2"])}</tr>
            </tbody>
          </Table>
          <Button onClick={() => dispatch({ type: "spawn_die" })}>
            Spawn Die
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Board;
