import { SelectFigureSetting } from "./Types";

export const selectFigureSettings = ({
    tile,
    board,
    selectedTile,
    setSelectedTile,
    setChosenTile,
    turn,
  }: SelectFigureSetting) => {
    if (tile.type === "filled" && turn === tile.color) {
        setSelectedTile([...(selectedTile || []), tile]);
        setChosenTile(tile);
      }
      board.forEach((row) => {
        row.forEach((t) => {
          t.markedMove = false;
        });
      });
  
      let lastItem
      if (tile.figure === "pawn") {
        if (tile.color === "white") {
          lastItem = board[tile.x][tile.y - 1];
        } else if (tile.color === "black") {
          lastItem = board[tile.x][tile.y + 1];
        }
  
        if (lastItem && lastItem.type !== "filled") {
          lastItem.markedMove = true;
        }
      }
      if (tile.figure === "knight") {
        const possibleUpdates = [
          board[tile.x - 1]?.[tile.y - 2],
          board[tile.x - 2]?.[tile.y - 1],
          board[tile.x - 2]?.[tile.y + 1],
          board[tile.x - 1]?.[tile.y + 2],
          board[tile.x + 1]?.[tile.y + 2],
          board[tile.x + 2]?.[tile.y + 1],
          board[tile.x + 2]?.[tile.y - 1],
          board[tile.x + 1]?.[tile.y - 2],
        ];
        const definedUpdates = possibleUpdates.filter(
          (update) => update !== undefined && update.type !== "filled"
        );
        if (definedUpdates) {
          definedUpdates.forEach((update) => (update.markedMove = true));
        }
      }
      if (tile.figure === "bishop") {
        const possibleUpdates = [];
        for (let i = 1; tile.x - i >= 0 && tile.y - i >= 0; i++) {
          const nextTile = board[tile.x - i][tile.y - i];
          if (nextTile.type === "filled") {
            break;
          } else {
            possibleUpdates.push(board[tile.x - i][tile.y - i]);
          }
        }
  
        for (let i = 1; tile.x - i >= 0 && tile.y + i < 8; i++) {
          const nextTile = board[tile.x - i][tile.y + i];
          if (nextTile.type === "filled") {
            break;
          } else {
            possibleUpdates.push(board[tile.x - i][tile.y + i]);
          }
        }
  
        for (let i = 1; tile.x + i < 8 && tile.y - i >= 0; i++) {
          const nextTile = board[tile.x + i][tile.y - i];
          if (nextTile.type === "filled") {
            break;
          } else {
            possibleUpdates.push(board[tile.x + i][tile.y - i]);
          }
        }
  
        for (let i = 1; tile.x + i < 8 && tile.y + i < 8; i++) {
          const nextTile = board[tile.x + i][tile.y + i];
          if (nextTile.type === "filled") {
            break;
          } else {
            possibleUpdates.push(board[tile.x + i][tile.y + i]);
          }
        }
        possibleUpdates.forEach((update) => (update.markedMove = true));
      }
      if (tile.figure === "rook") {
        const possibleUpdates = [];
        for (let i = 1; tile.x + i < 8; i++) {
          const nextTile = board[tile.x + i][tile.y];
          if (nextTile.type === "filled") {
            break;
          } else {
            possibleUpdates.push(board[tile.x + i][tile.y]);
          }
        }
  
        for (let i = 1; tile.x - i >= 0; i++) {
          const nextTile = board[tile.x - i][tile.y];
          if (nextTile.type === "filled") {
            break;
          } else {
            possibleUpdates.push(board[tile.x - i][tile.y]);
          }
        }
  
        for (let i = 1; tile.y + i < 8; i++) {
          const nextTile = board[tile.x][tile.y + i];
          if (nextTile.type === "filled") {
            break;
          } else {
            possibleUpdates.push(board[tile.x][tile.y + i]);
          }
        }
  
        for (let i = 1; tile.y - i >= 0; i++) {
          const nextTile = board[tile.x][tile.y - i];
          if (nextTile.type === "filled") {
            break;
          } else {
            possibleUpdates.push(board[tile.x][tile.y - i]);
          }
        }
        possibleUpdates.forEach((update) => (update.markedMove = true));
      }
      if (tile.figure === "king") {
        const possibleUpdates = [];
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (x !== 0 || y !== 0) {
              if (
                tile.x + x >= 0 &&
                tile.x + x < 8 &&
                tile.y + y >= 0 &&
                tile.y + y < 8
              ) {
                const nextTile = board[tile.x + x][tile.y + y];
                if (nextTile.type === "filled") {
                  continue;
                } else {
                  possibleUpdates.push(nextTile);
                }
              }
            }
          }
        }
        possibleUpdates.forEach((update) => (update.markedMove = true));
      }
      if (tile.figure === "queen") {
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
          let x = tile.x + direction.x;
          let y = tile.y + direction.y;
  
          while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            const nextTile = board[x][y];
            if (nextTile.type === "filled") {
              break;
            } else {
              possibleUpdates.push(nextTile);
            }
            x += direction.x;
            y += direction.y;
          }
        }
        possibleUpdates.forEach((update) => (update.markedMove = true));
      }
}