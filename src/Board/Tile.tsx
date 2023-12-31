import { BoardType, TileProps } from "./Types";
import s from "./Tile.module.css";
import {
  pawnSettings,
  knightSettings,
  bishopSettings,
  rookSettings,
  kingSettings,
  queenSettings,
} from "./FullFiguresSettings";
import { selectFigureSettings } from "./SelectFigureSettings";
export const placeFigures = (board: BoardType[][]) => {
  board.forEach((row) => {
    row.forEach((tile) => {
      if (
        (tile.y === 6 && tile.x >= 0 && tile.x <= 7) ||
        (tile.y === 1 && tile.x >= 0 && tile.x <= 7)
      ) {
        tile.type = 'filled';
        tile.figure = 'pawn'
      }
      if (
        (tile.x === 0 && tile.y === 7) ||
        (tile.x === 7 && tile.y === 7) ||
        (tile.x === 0 && tile.y === 0) ||
        (tile.x === 7 && tile.y === 0)
      ) {
        tile.type = 'filled';
        tile.figure = 'rook'
      }
      if (
        (tile.x === 1 && tile.y === 0) ||
        (tile.x === 6 && tile.y === 0) ||
        (tile.x === 6 && tile.y === 7) ||
        (tile.x === 1 && tile.y === 7)
      ) {
        tile.type = 'filled';
        tile.figure = 'knight'
      }
      if (
        (tile.x === 2 && tile.y === 7) ||
        (tile.x === 5 && tile.y === 7) ||
        (tile.x === 5 && tile.y === 0) ||
        (tile.x === 2 && tile.y === 0)
      ) {
        tile.type = 'filled';
        tile.figure = 'bishop'
      }
      if ((tile.x === 3 && tile.y === 7) || (tile.x === 3 && tile.y === 0)) {
        tile.type = 'filled';
        tile.figure = 'queen'
      }
      if ((tile.x === 4 && tile.y === 7) || (tile.x === 4 && tile.y === 0)) {
        tile.type = 'filled';
        tile.figure = 'king'
      }
    });
  });
};

export const Tile = ({
  tile,
  board,
  setBoard,
  selectedTile,
  setSelectedTile,
  chosenTile,
  setChosenTile,
  turn,
  dispatch,
}: TileProps) => {
  const marked = tile.markedMove ? <span className={s.point}>●</span> : null;
  const pawn =
    tile.figure === "pawn" ? (
      <div>
        <img
          src={`../assets/${tile.color}-pawn.png`}
          alt=""
          className={s.figureStyle}
        />
      </div>
    ) : null;
  const rook =
    tile.figure === "rook" ? (
      tile.color === "white" ? (
        <img src="../assets/white-rook.png" alt="" className={s.figureStyle} />
      ) : (
        <img src="../assets/black-rook.png" alt="" className={s.figureStyle} />
      )
    ) : null;
  const knight =
    tile.figure === "knight" ? (
      tile.color === "white" ? (
        <img
          src="../assets/white-knight.png"
          alt=""
          className={s.figureStyle}
        />
      ) : (
        <img
          src="../assets/black-knight.png"
          alt=""
          className={s.figureStyle}
        />
      )
    ) : null;
  const bishop =
    tile.figure === "bishop" ? (
      tile.color === "white" ? (
        <img
          src="../assets/white-bishop.png"
          alt=""
          className={s.figureStyle}
        />
      ) : (
        <img
          src="../assets/black-bishop.png"
          alt=""
          className={s.figureStyle}
        />
      )
    ) : null;
  const king =
    tile.figure === "king" ? (
      tile.color === "white" ? (
        <img src="../assets/white-king.png" alt="" className={s.figureStyle} />
      ) : (
        <img src="../assets/black-king.png" alt="" className={s.figureStyle} />
      )
    ) : null;
  const queen =
    tile.figure === "queen" ? (
      tile.color === "white" ? (
        <img src="../assets/white-queen.png" alt="" className={s.figureStyle} />
      ) : (
        <img src="../assets/black-queen.png" alt="" className={s.figureStyle} />
      )
    ) : null;

  const selectFigure = (tile: BoardType, board: BoardType[][]) => {
    selectFigureSettings({
      tile,
      board,
      selectedTile,
      setSelectedTile,
      setChosenTile,
      turn,
    });
  };

  const makeAMove = (tile: BoardType) => {
    if (selectedTile?.[selectedTile.length - 1]?.figure === "pawn") {
      pawnSettings({
        tile,
        board,
        setBoard,
        selectedTile,
        setSelectedTile,
        chosenTile,
        dispatch,
      });
    }
    if (selectedTile?.[selectedTile.length - 1]?.figure === "knight") {
      knightSettings({
        tile,
        board,
        setBoard,
        selectedTile,
        setSelectedTile,
        chosenTile,
        dispatch,
      });
    }
    if (selectedTile?.[selectedTile.length - 1]?.figure === "bishop") {
      bishopSettings({
        tile,
        board,
        setBoard,
        selectedTile,
        setSelectedTile,
        chosenTile,
        dispatch,
      });
    }
    if (selectedTile?.[selectedTile.length - 1]?.figure === "rook") {
      rookSettings({
        tile,
        board,
        setBoard,
        selectedTile,
        setSelectedTile,
        chosenTile,
        dispatch,
      });
    }
    if (selectedTile?.[selectedTile.length - 1]?.figure === "king") {
      kingSettings({
        tile,
        board,
        setBoard,
        selectedTile,
        setSelectedTile,
        chosenTile,
        dispatch,
      });
    }
    if (selectedTile?.[selectedTile.length - 1]?.figure === "queen") {
      queenSettings({
        tile,
        board,
        setBoard,
        selectedTile,
        setSelectedTile,
        chosenTile,
        dispatch,
      });
    }
  };

  const tileClasses = [s.tile];
  if (tile.backgroundColor === "even") {
    tileClasses.push(s.even);
  } else {
    tileClasses.push(s.odd);
  }

  const checkTile = (selectedTile || []).every((t) => t.color === tile.color);
  return (
    <>
      <div
        className={tileClasses.join(" ")}
        onClick={() =>
          checkTile ? selectFigure(tile, board) : makeAMove(tile)
        }
      >
        <div>
        </div>
        {marked || pawn || rook || knight || bishop || king || queen}
      </div>
    </>
  );
};
