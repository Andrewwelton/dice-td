import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

const Board = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Table>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faDiceOne} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceTwo} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceThree} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceFour} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceFive} />
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faDiceOne} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceTwo} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceThree} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceFour} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceFive} />
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faDiceOne} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceTwo} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceThree} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceFour} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faDiceFive} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Board;
