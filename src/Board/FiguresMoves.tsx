import { setWinner } from "../store/gameOutcome";
import { setGameStart } from "../store/gameStarted";
setGameStart;
import { toggleTurn } from "../store/turn";
import { BoardType, MakeMove } from "./Types";

export const movePawn = ({
  board,
  setSelectedTile,
  setBoard,
  tile,
  chosenTile,
  dispatch,
}: MakeMove) => {
  const updatedTile: BoardType = {
    x: tile.x,
    y: tile.y,
    type: "filled",
    figure: "pawn",
    selected: false,
    color: chosenTile?.color,
    markedMove: false,
    backgroundColor: tile.backgroundColor,
  };
  const newBoard = board.map((row) =>
    row.map((t) => {
      if (t === tile) {
        if (t.figure === "king") {
          dispatch(setWinner(t.color === "white" ? "black" : "white"));
          dispatch(setGameStart());
          console.log(t);
          console.log(tile);
        }
        return updatedTile;
      } else {
        return t;
      }
    })
  );
  dispatch?.(toggleTurn());
  setSelectedTile(null);
  setBoard(newBoard);
};

export const moveKnight = ({
  board,
  setSelectedTile,
  setBoard,
  tile,
  chosenTile,
  dispatch,
}: MakeMove) => {
  const updatedTile: BoardType = {
    x: tile.x,
    y: tile.y,
    type: "filled",
    figure: "knight",
    selected: false,
    color: chosenTile?.color,
    markedMove: false,
    backgroundColor: tile.backgroundColor,
  };

  const newBoard = board.map((row) =>
    row.map((t) => {
      if (t === tile) {
        if (t.figure === "king") {
          dispatch?.(setWinner(t.color === "white" ? "black" : "white"));
          dispatch(setGameStart());
        }
        return updatedTile;
      } else {
        return t;
      }
    })
  );

  dispatch?.(toggleTurn());
  setSelectedTile(null);
  setBoard(newBoard);
};

export const moveBishop = ({
  board,
  setSelectedTile,
  setBoard,
  tile,
  chosenTile,
  dispatch,
}: MakeMove) => {
  const updatedTile: BoardType = {
    x: tile.x,
    y: tile.y,
    type: "filled",
    figure: "bishop",
    selected: false,
    color: chosenTile?.color,
    markedMove: false,
    backgroundColor: tile.backgroundColor,
  };

  const newBoard = board.map((row) =>
    row.map((t) => {
      if (t === tile) {
        if (t.figure === "king") {
          dispatch?.(setWinner(t.color === "white" ? "black" : "white"));
          dispatch(setGameStart());
        }
        return updatedTile;
      } else {
        return t;
      }
    })
  );
  dispatch?.(toggleTurn());
  setSelectedTile(null);
  setBoard(newBoard);
};

export const moveRook = ({
  board,
  setSelectedTile,
  setBoard,
  tile,
  chosenTile,
  dispatch,
}: MakeMove) => {
  const updatedTile: BoardType = {
    x: tile.x,
    y: tile.y,
    type: "filled",
    figure: "rook",
    selected: false,
    color: chosenTile?.color,
    markedMove: false,
    backgroundColor: tile.backgroundColor,
  };
  const newBoard = board.map((row) =>
    row.map((t) => {
      if (t === tile) {
        if (t.figure === "king") {
          dispatch?.(setWinner(t.color === "white" ? "black" : "white"));
          dispatch(setGameStart());
        }
        return updatedTile;
      } else {
        return t;
      }
    })
  );
  dispatch?.(toggleTurn());
  setSelectedTile(null);
  setBoard(newBoard);
};

export const moveKing = ({
  board,
  setSelectedTile,
  setBoard,
  tile,
  chosenTile,
  dispatch,
}: MakeMove) => {
  const updatedTile: BoardType = {
    x: tile.x,
    y: tile.y,
    type: "filled",
    figure: "king",
    selected: false,
    color: chosenTile?.color,
    markedMove: false,
    backgroundColor: tile.backgroundColor,
  };
  const newBoard = board.map((row) =>
    row.map((t) => {
      if (t === tile) {
        if (t.figure === "king") {
          dispatch?.(setWinner(t.color === "white" ? "black" : "white"));
          dispatch(setGameStart());
        }
        return updatedTile;
      } else {
        return t;
      }
    })
  );
  dispatch?.(toggleTurn());
  setSelectedTile(null);
  setBoard(newBoard);
};

export const moveQueen = ({
  board,
  setSelectedTile,
  setBoard,
  tile,
  chosenTile,
  dispatch,
}: MakeMove) => {
  const updatedTile: BoardType = {
    x: tile.x,
    y: tile.y,
    type: "filled",
    figure: "queen",
    selected: false,
    color: chosenTile?.color,
    markedMove: false,
    backgroundColor: tile.backgroundColor,
  };
  const newBoard = board.map((row) =>
    row.map((t) => {
      if (t === tile) {
        if (t.figure === "king") {
          dispatch?.(setWinner(t.color === "white" ? "black" : "white"));
          dispatch(setGameStart());
        }
        return updatedTile;
      } else {
        return t;
      }
    })
  );
  dispatch?.(toggleTurn());
  setSelectedTile(null);
  setBoard(newBoard);
};
