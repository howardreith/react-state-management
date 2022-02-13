import React from 'react';

export default function ResetGame(props) {
    const {onResetGame, winner} = props
    return (
        <div className="ttt-reset-game">
            {winner && (
                <button className="btn btn-lg btn-primary m-3" onClick={onResetGame}>
                    New Game
                </button>
            )}
        </div>
    );
}
