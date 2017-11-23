import React, { Component } from 'react';
import './App.css';

function Square(props){

    return(
        <button className="square">
            {props.valoare}
        </button>
    )
}


class Board extends Component {

    constructor(props){
        super(props);
        this.state={
            howmanyvalues: 0,
            howmanytimes: 0,
            matrice: Array(16).fill(null),
            schimbare: -1,
            marray: [...Array(4).keys()].map(i => Array(4))
        }
    }


    getValue() {
        let x = Math.floor(Math.random() * 100) + 1;
        let squarevalue = 0;
        let easy = 94;
        let medium = 96;
        let high = 98;
        this.state.schimbare++;
        if (this.state.howmanytimes < 16)
        this.state.howmanytimes++;
        if (x > 0 && x < 11 && this.state.howmanyvalues < 2) {
            squarevalue = 2;
            this.state.howmanyvalues++;
            this.state.matrice[this.state.schimbare]=2;
            return squarevalue;
        }
        if (x > easy && x < 101 && this.state.howmanyvalues < 2){
            squarevalue = 4;
            this.state.howmanyvalues++;
            this.state.matrice[this.state.schimbare]=4;
            return squarevalue;
        }
        if (this.state.howmanyvalues < 1 && this.state.howmanytimes === 15){
            squarevalue = 2;
            this.state.matrice[this.state.schimbare]=2;
            return squarevalue;
        }
        if (this.state.howmanyvalues < 2 && this.state.howmanytimes === 16){
            squarevalue = 2;
            this.state.matrice[this.state.schimbare]=2;
            return squarevalue;
        }
        else
            squarevalue = null;
        console.log(this.state.matrice);
        return squarevalue;
    }


    renderSquare(){
        return(
            <Square
                valoare = {this.getValue()}
            />
        )
    }

  render() {
    return (
        <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
            </div>
            <div className="board-row">
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
            </div>
            <div className="board-row">
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare(11)}
            </div>
            <div className="board-row">
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
                {this.renderSquare(15)}
            </div>
        </div>
    );
  }
}

class Game extends React.Component {


    onKeyPress(event) {
        const code = event.keyCode || event.which;
        if (code === 37){
            let newmatrice = Array(15).fill(null);
            for(var i = 0; i<newmatrice.length; i++)
            {
                var howmanytiles = 0;
                for(var j = 0; j<newmatrice.length; j++)
                {
                        newmatrice[i][j-howmanytiles] = newmatrice[i][j];
                    }
                }

            console.log(newmatrice);
        }
        if (code === 38){

        }
        if (code === 39){

        }
        if (code === 40){

        }
    }

    render() {

        return (
            <div className="game" onKeyDown={this.onKeyPress.bind(this)}>
                <div className="game-board">
                    <Board
                    />
                </div>
            </div>
        );
    }
}

export default Game;
