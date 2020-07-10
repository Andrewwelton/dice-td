function fullBoardCheck(boardState) {
  let openSlot = false;
  boardState.forEach((row) => {
    row.forEach((column) => {
      if (!column) {
        openSlot = true;
        return;
      } else {
        return;
      }
    });

    if (openSlot) {
      return;
    }
  });

  return openSlot;
}

function getSpawnPosition(boardState) {
  let rowNum = Math.floor(Math.random() * 3);
  let colNum = Math.floor(Math.random() * 5);
  while (boardState[rowNum][colNum]) {
    rowNum = Math.floor(Math.random() * 3);
    colNum = Math.floor(Math.random() * 5);
  }

  return { rowNum, colNum };
}

function getSpawnType(numOfColours) {
  return Math.floor(Math.random() * numOfColours);
}

export { fullBoardCheck, getSpawnPosition, getSpawnType };
