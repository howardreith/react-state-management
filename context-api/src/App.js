import React from 'react';
import AppProvider from './AppProvider';
import PirateTicTacToe from "./PirateTicTacToe";

export default function App() {
    return (
        <div className="container-fluid">
            <AppProvider>
                <PirateTicTacToe/>
            </AppProvider>
        </div>
    );
}
