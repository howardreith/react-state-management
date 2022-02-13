import React from 'react';
import PlayerImage from './PlayerImage';

export default function GameSquare(props) {
    const {row, square, onTakeTurn} = props

    return (
        <div
            className="ttt-square"
            onClick={() => onTakeTurn({row, square})}>
            <PlayerImage player={props.player}/>
        </div>
    );
}
