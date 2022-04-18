var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var cors = require('cors');


//Websocket setup
io.on('connection', (socket)=> {
      console.log('User Online');

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 4545;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})

//Database get/post requests
var { User } = require("./models/whiteboard");
var { Whiteboard } = require("./models/whiteboard");
User.findOne()
Whiteboard.findOne()

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://DoscaUser:DoscaPassword123@cluster0.f5mpn.mongodb.net/doscadb?retryWrites=true&w=majority");
//Use this link to connect to MongoDB Compass: mongodb+srv://DoscaUser:DocsaPassword123@cluster0.f5mpn.mongodb.net/test

//Retrieves all whiteboards (TESTING PURPOSES ONLY)
app.get("/getWhiteboards", (req, res) => {
    Whiteboard.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

//Creates new whiteboard w/ unique code
app.post("/createWhiteboard", async (req, res) => {

      //Creates host user
      const user = req.body;
      const newUser = new User(user);

      var randomCode = Math.round((Math.random()*1000));
      newUser.code = randomCode;

      if(!Whiteboard.findOne({code: randomCode})){
            console.log("CODE IS UNIQUE");
      }else{
            console.log("CODE IS NOT UNIQUE, RECALCULATING");
            randomCode = randomCode*10;
      }   

      //Creates new whiteboard w/ passed-in data.
      const whiteboard = {
            code: randomCode,
            url: req.body.url,
            host: req.body.username,
            users: [newUser],
      };
      const newWhiteboard = new Whiteboard(whiteboard);
      await newWhiteboard.save();

      res.json(whiteboard);
});

//Adds a user into an existing whiteboard using a unique code
app.post("/addUser", async (req, res) => {
      const user = req.body;
      const newUser = new User(user);

      Whiteboard.findOneAndUpdate(
      { code: req.body.code }, 
      { $push: { users: newUser } },
      function (err, success) {
            if (err) {
                  console.log(err);
                  res.json(err);
            } else {
                  if(!success){
                        console.log("INVALID CODE");
                  } else {
                        console.log("ADDED USER");
                  }
                  res.json(success);
            }
      });
});
module.exports = app
