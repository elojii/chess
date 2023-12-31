import { FullFiguresSettigns } from "./Types";
import {
  moveBishop,
  moveKing,
  moveKnight,
  movePawn,
  moveQueen,
  moveRook,
} from "./FiguresMoves";

export const pawnSettings = ({
  tile,
  board,
  setBoard,
  selectedTile,
  setSelectedTile,
  chosenTile,
  dispatch,
}: FullFiguresSettigns) => {
  if (!selectedTile) return;
  const lastSelItem = selectedTile[selectedTile.length - 1];
  console.log(lastSelItem);
  if (lastSelItem.color === "white") {
    const possibleUpdates = [];

    if (board[lastSelItem.x]?.[lastSelItem.y - 1].type === "empty") {
      possibleUpdates.push(board[lastSelItem.x]?.[lastSelItem.y - 1]);
    }
    if (board[lastSelItem.x - 1]?.[lastSelItem.y - 1].type === "filled") {
      possibleUpdates.push(board[lastSelItem.x - 1]?.[lastSelItem.y - 1]);
    }
    if (board[lastSelItem.x + 1]?.[lastSelItem.y - 1].type === "filled") {
      possibleUpdates.push(board[lastSelItem.x + 1]?.[lastSelItem.y - 1]);
    }

    const checkForMatch = possibleUpdates.some((update) => tile === update);
    if (checkForMatch) {
      movePawn({
        tile,
        board,
        setBoard,
        setSelectedTile,
        chosenTile,
        dispatch,
      });
      possibleUpdates.forEach((update) => {
        if (update) {
          update.markedMove = false;
        }
      });
      lastSelItem.type = "empty";
      lastSelItem.figure = false;
      lastSelItem.selected = false;
      lastSelItem.color = false;
    }
  } else if (lastSelItem.color === "black") {
    const possibleUpdates = [];
    if (board[lastSelItem.x]?.[lastSelItem.y + 1].type === "empty") {
      possibleUpdates.push(board[lastSelItem.x]?.[lastSelItem.y + 1]);
    }
    if (board[lastSelItem.x - 1]?.[lastSelItem.y + 1].type === "filled") {
      possibleUpdates.push(board[lastSelItem.x - 1]?.[lastSelItem.y + 1]);
    }
    if (board[lastSelItem.x + 1]?.[lastSelItem.y + 1].type === "filled") {
      possibleUpdates.push(board[lastSelItem.x + 1]?.[lastSelItem.y + 1]);
    }

    const checkForMatch = possibleUpdates.some((update) => tile === update);
    if (checkForMatch) {
      movePawn({
        tile,
        board,
        setBoard,
        setSelectedTile,
        chosenTile,
        dispatch,
      });
      possibleUpdates.forEach((update) => {
        if (update) {
          update.markedMove = false;
        }
      });
      lastSelItem.type = "empty";
      lastSelItem.figure = false;
      lastSelItem.selected = false;
      lastSelItem.color = false;
    }
  }
};

export const knightSettings = ({
  tile,
  board,
  setBoard,
  selectedTile,
  setSelectedTile,
  chosenTile,
  dispatch,
}: FullFiguresSettigns) => {
  if (!selectedTile) return;
  const lastSelItem = selectedTile[selectedTile.length - 1];
  const possibleUpdates = [
    board[lastSelItem.x - 1]?.[lastSelItem.y - 2],
    board[lastSelItem.x - 2]?.[lastSelItem.y - 1],
    board[lastSelItem.x - 2]?.[lastSelItem.y + 1],
    board[lastSelItem.x - 1]?.[lastSelItem.y + 2],
    board[lastSelItem.x + 1]?.[lastSelItem.y + 2],
    board[lastSelItem.x + 2]?.[lastSelItem.y + 1],
    board[lastSelItem.x + 2]?.[lastSelItem.y - 1],
    board[lastSelItem.x + 1]?.[lastSelItem.y - 2],
  ];
  const checkForMatch = possibleUpdates.some((update) => tile === update);
  if (checkForMatch) {
    moveKnight({
      tile,
      board,
      setBoard,
      setSelectedTile,
      chosenTile,
      dispatch,
    });
    possibleUpdates.forEach((update) => {
      if (update) {
        update.markedMove = false;
      }
    });
    lastSelItem.type = "empty";
    lastSelItem.figure = false;
    lastSelItem.selected = false;
    lastSelItem.color = false;
  }
};

export const bishopSettings = ({
  tile,
  board,
  setBoard,
  selectedTile,
  setSelectedTile,
  chosenTile,
  dispatch,
}: FullFiguresSettigns) => {
  if (!selectedTile) return;
  const lastSelItem = selectedTile[selectedTile.length - 1];
  const possibleUpdates = [];
  for (let i = 1; lastSelItem.x - i >= 0 && lastSelItem.y - i >= 0; i++) {
    const nextTile = board[lastSelItem.x - i][lastSelItem.y - i];
    if (nextTile.type === "filled") {
      possibleUpdates.push(nextTile);
      break;
    } else {
      possibleUpdates.push(nextTile);
    }
  }

  for (let i = 1; lastSelItem.x - i >= 0 && lastSelItem.y + i < 8; i++) {
    const nextTile = board[lastSelItem.x - i][lastSelItem.y + i];
    if (nextTile.type === "filled") {
      possibleUpdates.push(nextTile);
      break;
    } else {
      possibleUpdates.push(nextTile);
    }
  }

  for (let i = 1; lastSelItem.x + i < 8 && lastSelItem.y - i >= 0; i++) {
    const nextTile = board[lastSelItem.x + i][lastSelItem.y - i];
    if (nextTile.type === "filled") {
      possibleUpdates.push(nextTile);
      break;
    } else {
      possibleUpdates.push(nextTile);
    }
  }

  for (let i = 1; lastSelItem.x + i < 8 && lastSelItem.y + i < 8; i++) {
    const nextTile = board[lastSelItem.x + i][lastSelItem.y + i];
    if (nextTile.type === "filled") {
      possibleUpdates.push(nextTile);
      break;
    } else {
      possibleUpdates.push(nextTile);
    }
  }
  const checkForMatch = possibleUpdates.some((update) => tile === update);
  if (checkForMatch) {
    console.log("check");
    moveBishop({
      tile,
      board,
      setBoard,
      setSelectedTile,
      chosenTile,
      dispatch,
    });
    possibleUpdates.forEach((update) => {
      if (update) {
        update.markedMove = false;
      }
    });
    lastSelItem.type = "empty";
    lastSelItem.figure = false;
    lastSelItem.selected = false;
    lastSelItem.color = false;
  }
};

export const rookSettings = ({
  tile,
  board,
  setBoard,
  selectedTile,
  setSelectedTile,
  chosenTile,
  dispatch,
}: FullFiguresSettigns) => {
  if (!selectedTile) return;
  const lastSelItem = selectedTile[selectedTile.length - 1];
  const possibleUpdates = [];
  for (let i = 1; lastSelItem.x + i < 8; i++) {
    const nextTile = board[lastSelItem.x + i][lastSelItem.y];
    if (nextTile.type === "filled") {
      possibleUpdates.push(nextTile);
      break;
    } else {
      possibleUpdates.push(nextTile);
    }
  }

  for (let i = 1; lastSelItem.x - i >= 0; i++) {
    const nextTile = board[lastSelItem.x - i][lastSelItem.y];
    if (nextTile.type === "filled") {
      possibleUpdates.push(nextTile);
      break;
    } else {
      possibleUpdates.push(nextTile);
    }
  }

  for (let i = 1; lastSelItem.y + i < 8; i++) {
    const nextTile = board[lastSelItem.x][lastSelItem.y + i];
    if (nextTile.type === "filled") {
      possibleUpdates.push(nextTile);
      break;
    } else {
      possibleUpdates.push(nextTile);
    }
  }

  for (let i = 1; lastSelItem.y - i >= 0; i++) {
    const nextTile = board[lastSelItem.x][lastSelItem.y - i];
    if (nextTile.type === "filled") {
      possibleUpdates.push(nextTile);
      break;
    } else {
      possibleUpdates.push(nextTile);
    }
  }
  const checkForMatch = possibleUpdates.some((update) => tile === update);
  if (checkForMatch) {
    moveRook({
      tile,
      board,
      setBoard,
      setSelectedTile,
      chosenTile,
      dispatch,
    });
    possibleUpdates.forEach((update) => {
      if (update) {
        update.markedMove = false;
      }
    });
    lastSelItem.type = "empty";
    lastSelItem.figure = false;
    lastSelItem.selected = false;
    lastSelItem.color = false;
  }
};

export const kingSettings = ({
  tile,
  board,
  setBoard,
  selectedTile,
  setSelectedTile,
  chosenTile,
  dispatch,
}: FullFiguresSettigns) => {
  if (!selectedTile) return;
  const lastSelItem = selectedTile[selectedTile.length - 1];
  const possibleUpdates = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x !== 0 || y !== 0) {
        const nextTile = board[lastSelItem.x + x][lastSelItem.y + y];
        possibleUpdates.push(nextTile);
      }
    }
  }
  const checkForMatch = possibleUpdates.some((update) => tile === update);
  if (checkForMatch) {
    moveKing({
      tile,
      board,
      setBoard,
      setSelectedTile,
      chosenTile,
      dispatch,
    });
    possibleUpdates.forEach((update) => {
      if (update) {
        update.markedMove = false;
      }
    });
    lastSelItem.type = "empty";
    lastSelItem.figure = false;
    lastSelItem.selected = false;
    lastSelItem.color = false;
  }
};

export const queenSettings = ({
  tile,
  board,
  setBoard,
  selectedTile,
  setSelectedTile,
  chosenTile,
  dispatch,
}: FullFiguresSettigns) => {
  if (!selectedTile) return;
  const lastSelItem = selectedTile[selectedTile.length - 1];
  const possibleUpdates = [];

  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 }, 
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: -1 },
  ];

  for (const direction of directions) {
    let x = lastSelItem.x + direction.x;
    let y = lastSelItem.y + direction.y;

    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
      const nextTile = board[x][y];
      possibleUpdates.push(nextTile);
      if (nextTile.type === "filled") {
        possibleUpdates.push(nextTile);
        break;
      }
      x += direction.x;
      y += direction.y;
    }
  }
  const checkForMatch = possibleUpdates.some((update) => tile === update);
  if (checkForMatch) {
    moveQueen({
      tile,
      board,
      setBoard,
      setSelectedTile,
      chosenTile,
      dispatch,
    });
    possibleUpdates.forEach((update) => {
      if (update) {
        update.markedMove = false;
      }
    });
    lastSelItem.type = "empty";
    lastSelItem.figure = false;
    lastSelItem.selected = false;
    lastSelItem.color = false;
  }
};
