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
};

function BoardReducer(state, action) {
  switch (action.type) {
    case "spawn_die":
      let rowNum = Math.floor(Math.random() * 3);
      let colNum = Math.floor(Math.random() * 5);
      while (state[rowNum][colNum]) {
        rowNum = Math.floor(Math.random() * 3);
        colNum = Math.floor(Math.random() * 5);
      }

      return { ...state, [rowNum]: { ...state[rowNum], [colNum]: true } };
  }
}

export { initialState, BoardReducer };
