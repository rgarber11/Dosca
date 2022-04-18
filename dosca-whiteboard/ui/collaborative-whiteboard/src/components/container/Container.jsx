import React from 'react';
import Board from '../board/Board';
import eraser from '../../assets/eraser.jpg';
import fulllogo from '../../assets/Doscafull.png';
import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5",
            isErasing: false
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    changeToEraser(){
        this.setState({
            color: "#FFFFFF"
        })
    }
    
    clear() {
        
    }

    render() {

        return (
            <div className="container">
                <span className="dosca_logo">
                    <img src={fulllogo} height="auto" width="150"   />
                </span>
                <div className="tools" >
                    <div className="color-picker"> 
                        &nbsp;
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/> 
                    </div>
                    <div className="brush-picker">
                        Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                            <option> 40 </option>
                            <option> 50 </option>
                        </select>
                    </div>
                    <button onClick="changeToEraser()" type="button" className="Clear">
                        <img src={eraser} alt="eraser" width="30" height = "10" />
                    </button>
                    <button onClick="changeToEraser()" type="button" className="Clear">
                        Clear
                    </button>
                    
                </div>
                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>
            </div>
        )
    }
}

export default Container