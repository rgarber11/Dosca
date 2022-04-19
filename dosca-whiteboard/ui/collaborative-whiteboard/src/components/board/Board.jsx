import React from 'react';
import io from 'socket.io-client';

import './style.css';


class Board extends React.Component {

    timeout;
    socket = io.connect("http://localhost:4545");

    //console.log(window.location.port);
    //Use this to get browser link
    //number = window.location.hostname;

    //will keep track of who's drawing first
    raceDraw = false;

    constructor() {
        super();

        //connecting our websocket, this is the client side websocket
        this.socket.on("canvas-data", function(data){

            var interval = setInterval(function(){
                //all of these variables here are our board objects 
                if(this.raceDraw) return;
                this.raceDraw = true;
                clearInterval(interval);
                var image = new Image();
                //our board 
                var whiteboard = document.querySelector('#board');
                var current = whiteboard.getContext('2d');
                image.onload = function() {
                    current.drawImage(image, 0, 0);
                    this.raceDraw = false;
                };
                image.src = data;
            }, 200)
        })
    }

    //using react component library to draw on white board
    componentDidMount() {
        this.drawOnWhiteboard();
    }

    //Givivng new attributes to our whiteboard
    componentWillReceiveProps(newProps) {
        this.current.strokeStyle = newProps.color;
        this.current.lineWidth = newProps.size;
    }

    //Clear Whiteboard - used for whiteboard function
    clearwWiteboard() {
        this.current.fillstyle= "white";
        this.current.clearRect(0,0,this.whiteboard.width, this.whiteboard.height);
        this.current.fillRect(0,0,this.whiteboard.width, this.whiteboard.height);
    }

    //actually doing the drawing 
    drawOnWhiteboard() {
        var whiteboard = document.querySelector('#board'); 
        this.current = whiteboard.getContext('2d'); //updating our current whiteboard
        var current = this.current;
        var drawing = document.querySelector('#drawing'); //getting our current page/whiteboard
        var drawing_style = getComputedStyle(drawing);

        whiteboard.width = parseInt(drawing_style.getPropertyValue('width'));
        whiteboard.height = parseInt(drawing_style.getPropertyValue('height'));

        var cursor = {
            x: 0,
            y: 0};
        var last_cursor_position = {
            x: 0, 
            y: 0};

    
        //This will change based on where the mouse cursor currently is positioned
        whiteboard.addEventListener('mousemove', function(input) {
            last_cursor_position.x = cursor.x;
            last_cursor_position.y = cursor.y;

            cursor.x = input.pageX - this.offsetLeft;
            cursor.y = input.pageY - this.offsetTop;
        }, false);

        //CURRENt is our current attributes associated with our line
        current.lineWidth = this.props.size;
        current.lineJoin = 'round'; //using round so the line doesn't have any spaces when connecting the ends
        current.lineCap = 'round';
        current.strokeStyle = this.props.color;

        //Checking for events we draw on
        whiteboard.addEventListener('mousedown', function(input) {
            whiteboard.addEventListener('mousemove', onPaint, false);
        }, false);

        whiteboard.addEventListener('mouseup', function(input) {
            whiteboard.removeEventListener('mousemove', onPaint, false);
        }, false);

        var rn = this;
        var onPaint = function() {
            //creating our lines 
            current.beginPath(); 
            current.moveTo(last_cursor_position.x, last_cursor_position.y); //from last cursor
            current.lineTo(cursor.x, cursor.y); //to current cursor
            current.closePath(); 
            current.stroke(); //stroke created from our current properties

            if(rn.timeout != undefined) clearTimeout(rn.timeout);
            rn.timeout = setTimeout(function(){
                var base64ImageData = whiteboard.toDataURL("image/png");
                rn.socket.emit("canvas-data", base64ImageData);
            }, 1500)
        };
    }

    render() {
        return ( 
            <div class="drawing" id="drawing">
                <canvas className="board" id="board"></canvas>  
            </div>
        )
    }
}

export default Board