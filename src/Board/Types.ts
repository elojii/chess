import { AppDispatch } from "../store";

export type BoardType = {
  x: number;
  y: number;
  type: string;
  figure: string | boolean;
  selected: boolean;
  color?: string | boolean;
  markedMove: boolean;
  backgroundColor: string;
};

export type TileProps = {
  tile: BoardType; 
  board: BoardType[][];
  setBoard: React.Dispatch<React.SetStateAction<BoardType[][]>>;
  selectedTile: BoardType[] | null;
  setSelectedTile: React.Dispatch<React.SetStateAction<BoardType[] | null>>;
  chosenTile: BoardType | null;
  setChosenTile: React.Dispatch<React.SetStateAction<BoardType | null>>;
  turn:string
  dispatch: AppDispatch
};

export type MakeMove = Omit<TileProps, 'selectedTile' | 'setChosenTile' | 'turn'>

export type FullFiguresSettigns = Omit<TileProps, 'setChosenTile' | 'turn'> 

export type SelectFigureSetting = Omit<TileProps, 'setBoard'| 'chosenTile' | 'dispatch'>