import React, { useReducer } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDice } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

import { initialState, BoardReducer } from "../reducers/BoardReducer";
import Dice from "./Dice";

const buildTableRows = (row) => {
  return Object.keys(row).map((rowKey) => (
    <td className="Board-cell align-middle">
      {row[rowKey] && <Dice {...row[rowKey]}></Dice>}
    </td>
  ));
};

const Board = () => {
  const [state, dispatch] = useReducer(BoardReducer, initialState);

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Card bordered bg="light">
            <Card-body>
              <Table bordered>
                <tbody>
                  <tr>{buildTableRows(state["0"])}</tr>
                  <tr>{buildTableRows(state["1"])}</tr>
                  <tr>{buildTableRows(state["2"])}</tr>
                </tbody>
              </Table>
              <Button
                style={{ "border-radius": "50%" }}
                variant="outline-dark"
                disabled={!state.openSlot}
                onClick={() => dispatch({ type: "spawn_die" })}
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
