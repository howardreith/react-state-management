import React from 'react';
import PlayerImage from './PlayerImage';
import {withAppContext} from "./AppProvider";

function GameScore(props) {
    console.log('===> gamescore props', props)
    return (
        <div className="ttt-running-score">
            <h3>Running Score:</h3>
            <span className="p-3">
        <PlayerImage player="X"/> {props.xWins}
                <PlayerImage player="O"/> {props.oWins}
      </span>
        </div>
    );
}

export default withAppContext(GameScore);
