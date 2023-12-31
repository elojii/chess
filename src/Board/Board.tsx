import { useState } from "react";
import s from "./Board.module.css";
import { BoardType } from "./Types";
import { Tile, placeFigures } from "./Tile";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { AppDispatch } from "../store";
import { setGameStart } from "../store/gameStarted";
import { setWhiteTurn } from "../store/turn";

export const Board = () => {
  const [board, setBoard] = useState<BoardType[][]>([]);
  const [selectedTile, setSelectedTile] = useState<BoardType[] | null>(null);
  const [chosenTile, setChosenTile] = useState<BoardType | null>(null);
  const turn = useSelector((state: RootState) => state.turn.turn);
  const gameOutcome = useSelector(
    (state: RootState) => state.gameOutcome.winner
  );
  const gameStarted = useSelector(
    (state: RootState) => state.gameStarted.gameStarted
  );
  const dispatch = useDispatch<AppDispatch>();

  const createBoard = () => {
    const newBoard = [];
    for (let x = 0; x < 8; x++) {
      const row = [];
      for (let y = 0; y < 8; y++) {
        let color;
        if (y >= 2 && y <= 5) {
          color = false;
        } else {
          color = y < 2 ? "black" : "white";
        }
        const tileClass = (x + y) % 2 === 0 ? "even" : "odd";
        const tile: BoardType = {
          x,
          y,
          type: 'empty',
          figure: false,
          selected: false,
          color,
          markedMove: false,
          backgroundColor: tileClass,
        };
        row.push(tile);
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
    placeFigures(newBoard);
    dispatch(setGameStart());
    dispatch(setWhiteTurn());
  };

  return (
    <>
      <button onClick={!gameStarted ? createBoard : undefined}>
        Почати гру
      </button>
      {gameOutcome && !gameStarted && (
        <div className={s.winnerStatement}>{`Переможець: ${gameOutcome}`}</div>
      )}
      <p style={{ fontWeight: "bold" }}>{`Зараз хід: ${turn}`}</p>
      <div className={s.container}>
        <div className={s.grid}>
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className={s.row}>
              {row.map((tile, tileIndex) => (
                <div key={tileIndex} className={s.cell}>
                  {gameStarted ? (
                    <Tile
                      tile={tile}
                      board={board}
                      setBoard={setBoard}
                      selectedTile={selectedTile}
                      setSelectedTile={setSelectedTile}
                      chosenTile={chosenTile}
                      setChosenTile={setChosenTile}
                      turn={turn}
                      dispatch={dispatch}
                    />
                  ) : (
                    <div className={s.nonInteractiveTile}>
                      <Tile
                        tile={tile}
                        board={board}
                        setBoard={setBoard}
                        selectedTile={selectedTile}
                        setSelectedTile={setSelectedTile}
                        chosenTile={chosenTile}
                        setChosenTile={setChosenTile}
                        turn={turn}
                        dispatch={dispatch}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
