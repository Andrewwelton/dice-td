const initialState = {
  0: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  },
  1: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  },
  2: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  },
  openSlot: true,
};

function fullBoardCheck(boardState) {
  const boardKeys = Object.keys(boardState);
  let openSlot = false;
  boardKeys.forEach((key) => {
    if (key === "openSlot") {
      return;
    }
    let row = boardState[key];
    const rowKeys = Object.keys(row);
    rowKeys.forEach((rowKey) => {
      if (!row[rowKey]) {
        openSlot = true;
      }
    });
  });

  return openSlot;
}

function BoardReducer(state, action) {
  switch (action.type) {
    case "spawn_die":
      const openSlot = fullBoardCheck(state);
      if (!openSlot) {
        return { ...state, openSlot };
      }
      let rowNum = Math.floor(Math.random() * 3);
      let colNum = Math.floor(Math.random() * 5);
      while (state[rowNum][colNum]) {
        rowNum = Math.floor(Math.random() * 3);
        colNum = Math.floor(Math.random() * 5);
      }

      return {
        ...state,
        [rowNum]: { ...state[rowNum], [colNum]: true },
        openSlot,
      };
    default:
      throw new Error("Oh god what");
  }
}

export { initialState, BoardReducer };
