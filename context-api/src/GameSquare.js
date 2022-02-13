import React from 'react';
import PlayerImage from './PlayerImage';
import {withAppContext} from "./AppProvider";

function GameSquare(props) {
    const {appContext, row, square} = props
    const {onTakeTurn} = appContext

    return (
        <div
            className="ttt-square"
            onClick={() => onTakeTurn({row, square})}>
            <PlayerImage player={props.player}/>
        </div>
    );
}

export default withAppContext(GameSquare)