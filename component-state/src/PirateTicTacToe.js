import React, {Component} from 'react';
import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import ResetGame from './ResetGame';
import GameScore from './GameScore';
import './index.css';
import {emptyBoard, NONE, score} from "./helpers";


class PirateTicTacToe extends Component {
    constructor(props) {
        super(props)

        this.takeTurn = this.takeTurn.bind(this)
        this.resetGame = this.resetGame.bind(this)

        this.state = {
            gameBoard: emptyBoard,
            winner: null,
            player: 'X',
            xWins: 0,
            oWins: 0,
        };
    }

    takeTurn(action) {
        if (this.state.winner || this.state.gameBoard[action.row][action.square] !== NONE) {
            return
        }

        // clone the array so we don't mutate the existing state
        let gameBoard = this.state.gameBoard.map(r => r.slice(0));
        gameBoard[action.row][action.square] = this.state.player;

        const player = this.state.player === 'X' ? 'O' : 'X';
        const winner = score(gameBoard);
        const xWins = winner === 'X' ? this.state.xWins + 1 : this.state.xWins;
        const oWins = winner === 'O' ? this.state.oWins + 1 : this.state.oWins;

        this.setState({...this.state, player, winner, gameBoard, xWins: xWins, oWins: oWins});
    }

    resetGame() {
        this.setState({...this.state, gameBoard: emptyBoard, winner: null, player: 'X'})
    }

    render() {
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
                        <GameInfo player={this.state.player} winner={this.state.winner}/>
                        <GameBoard gameBoard={this.state.gameBoard} onTakeTurn={this.takeTurn}/>
                    </div>
                    <div className="col-md-5 col-sm-10 offset-md-0 offset-sm-1 align-items-center text-center">
                        <GameScore xWins={this.state.xWins} oWins={this.state.oWins}/>
                        <ResetGame onResetGame={this.resetGame} winner={this.state.winner}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default PirateTicTacToe;
