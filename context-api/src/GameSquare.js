import React from 'react';
import PlayerImage from './PlayerImage';
import {withAppContext} from "./AppProvider";

function GameSquare(props) {
    const {appContext, row, square} = props
    const {onTakeTurn} = appContext
    const handlePlay = () => {
        onTakeTurn({row, square})
    }

    return (
        <div
            className="ttt-square"
            onClick={() => handlePlay()}>
            <PlayerImage player={props.player}/>
        </div>
    );
}

export default withAppContext(GameSquare)