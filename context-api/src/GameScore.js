import React from 'react';
import PlayerImage from './PlayerImage';
import {withAppContext} from "./AppProvider";

function GameScore(props) {
    const {appContext} = props
    const {xWins, oWins} = appContext
    return (
        <div className="ttt-running-score">
            <h3>Running Score:</h3>
            <span className="p-3">
        <PlayerImage player="X"/> {xWins}
                <PlayerImage player="O"/> {oWins}
      </span>
        </div>
    );
}

export default withAppContext(GameScore);
