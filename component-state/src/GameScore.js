import React from 'react';
import PlayerImage from './PlayerImage';

export default function GameScore(props) {
    const {xWins, oWins} = props
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
