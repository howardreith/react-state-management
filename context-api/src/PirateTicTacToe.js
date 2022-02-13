import React from 'react';
import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import ResetGame from './ResetGame';
import GameScore from './GameScore';
import './index.css';


function PirateTicTacToe() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="jumbotron col-10 offset-1">
                    <h1>Pirate Tic Tac Toe</h1>
                    <hr className="my-4"/>
                    <p>
                        Click on a Tic Tac Toe square to claim it for the current player.
                    </p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-5 col-sm-10 offset-md-1 offset-sm-1">
                    <GameInfo/>
                    <GameBoard/>
                </div>
                <div className="col-md-5 col-sm-10 offset-md-0 offset-sm-1 align-items-center text-center">
                    <GameScore/>
                    <ResetGame/>
                </div>
            </div>
        </div>
    );
}

export default PirateTicTacToe;
