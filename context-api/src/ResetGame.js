import React from 'react';
import {withAppContext} from "./AppProvider";

function ResetGame(props) {
    const {appContext} = props
    const {onResetGame, winner} = appContext
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

export default withAppContext(ResetGame)