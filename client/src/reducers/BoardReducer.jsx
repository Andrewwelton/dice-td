import { Colours } from "../constants/constants";

import { fullBoardCheck } from "../utilities/BoardUtility";

const initialState = {
  board: [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],
  openSlot: true,
};

function BoardReducer(state, action) {
  switch (action.type) {
    case "spawn_die":
      const newState = {
        ...state,
      };
      newState.board[action.rowNum][action.colNum] = {
        colour: Colours[action.colour],
      };

      const openSlot = fullBoardCheck(state.board);
      return {
        ...newState,
        openSlot,
      };
    case "move_die":
      const moveState = {
        ...state,
        openSlot: true,
      };

      const dieToMove = state.board[action.sourceRow][action.sourceColumn];
      moveState.board[action.sourceRow][action.sourceColumn] = null;
      moveState.board[action.destRow][action.destCol] = dieToMove;

      return moveState;
    default:
      throw new Error("Oh god what");
  }
}

export { initialState, BoardReducer };
