import React from 'react';
import {emptyBoard, NONE, score} from "./helpers";

export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
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
            <AppContext.Provider value={{...this.state, onTakeTurn: this.takeTurn, onResetGame: this.resetGame}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export function withAppContext(Component) {
    return function WrapperComponent(props) {
        return (
            <AppContext.Consumer>
                {state => <Component {...props} appContext={state}/>}
            </AppContext.Consumer>
        )
    }
}
