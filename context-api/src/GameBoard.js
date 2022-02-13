import React from 'react';
import GameSquare from './GameSquare';
import {withAppContext} from "./AppProvider";

function GameBoard(props) {
    const {appContext} = props
    const {gameBoard, onPlay} = appContext
    return (
        <div className="ttt-board">
            {gameBoard.map((row, row_index) => (
                <div key={row_index} className="ttt-row">
                    {row.map((square, square_index) => (
                        <GameSquare
                            key={`${row_index}-${square_index}`}
                            row={row_index}
                            square={square_index}
                            player={gameBoard[row_index][square_index]}
                            onPlay={onPlay}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default withAppContext(GameBoard)