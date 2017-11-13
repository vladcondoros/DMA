import React, { Component } from 'react';
import './App.css';

function Square(props){

    return(
        <button className="square" onKeyDown={props.onkeypress}>
            {props.value}
        </button>
    )
}


class Board extends Component {

    constructor(props){
        super(props);
        this.state={
            howmanyvalues: 0
        }
    }

    getValue() {
        let x = Math.floor(Math.random() * 40) + 1;
        let y = Math.floor(Math.random() * 4) + 1;
        let squarevalue = 0;
        if (x === 40 && this.state.howmanyvalues < 2) {
            squarevalue = 4;
            this.state.howmanyvalues++;
            return squarevalue;
        }
        if (y === 4 && this.state.howmanyvalues < 2){
            squarevalue = 2;
            this.state.howmanyvalues++;
        }
        else
            squarevalue = null;
        return squarevalue;
    }



    renderSquare(){
        return(
            <Square
                value = {this.getValue()}
                onKeyDown = {() => this.props.onkeypress()}
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

    handleKeyPress(e){
        e = e || window.event;
        if (e.keyCode==="38"){
            let x = "wtf";
            console.log(x);}
        while (Square.value === null){
            this.render();
        }
    }

    render() {

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        onKeyDown={this.handleKeyPress()}
                    />
                </div>
            </div>
        );
    }
}

export default Game;
