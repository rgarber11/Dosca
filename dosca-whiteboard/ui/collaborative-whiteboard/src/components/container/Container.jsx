import React from 'react';
import Board from '../board/Board';
import eraser from '../../assets/neraser.png';
import fulllogo from '../../assets/Doscafull.png';
import './style.css';

class Container extends React.Component 
{
    constructor() {
        super();

        this.state = {
            color: "#000000",
            size: "5",
            lastColor: "#FFFFFF"
        }
    }

    changeColor(params) {
        this.setState({
            lastColor: this.state.color,
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    changeToEraser(){
        console.log(this.color);
        this.setState({
            color: "#FFFFFF"
        })
        console.log(this.color);
    }
    
    changeToOldColor(){
        var temp = this.state.color;
                    this.setState({
                        color: this.state.lastColor,
                        lastColor: temp
                    })
    }

    render() {
        return (
            <div className="container">
                <div className="dosca_logo">
                    <img src={fulllogo} height="auto" width="150"   />
                </div>
                <div className="tools" >
                    <button className="last-color" onClick={() => {
                    var temp = this.state.color;
                    this.setState({
                        color: this.state.lastColor,
                        lastColor: temp
                    })}} style={{backgroundColor: this.state.lastColor}}> </button>
                    <input className ="color-changer" type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/> 
                    <button onClick={() => {this.setState({color: "#FFFFFF"})}} type="button" className="eraser">
                    <img src={eraser} alt="eraser" width="35" height = "35" />
                    </button>
                    <input className="size-slider" type="range" min="2" max="75" value={this.state.size} onInput={this.changeSize.bind(this)}></input>
                    <div className="class-code" style={{backgroundColor: '#91BAD6'}}> Dosca Lobby Code: <div class="code"> 3340 </div> </div>
                    
                    </div>
                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size} >
                    </Board>
                </div>
            </div>
        )
    }
}

export default Container