import React from 'react';
import AppProvider from './AppProvider';
import PirateTicTacToe from "./PirateTicTacToe";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            correct: 0,
            incorrect: 0,
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="jumbotron col-10 offset-1">
                        <h1>Pirate Tic Tac Toe</h1>
                    </div>
                </div>
                <AppProvider>
                    <PirateTicTacToe/>
                </AppProvider>
            </div>
        );
    }
}
