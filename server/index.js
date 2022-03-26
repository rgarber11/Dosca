//API and Database setup

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const LobbyModel = require('./models/lobbies');
const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://DoscaUser:DoscaPassword123@cluster0.f5mpn.mongodb.net/doscadb?retryWrites=true&w=majority");

app.get("/getLobbies", (req, res) => {
    LobbyModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

app.post("/createLobby", async (req, res) => {
    const lobby = req.body;
    const newLobby = new LobbyModel(lobby);
    await newLobby.save();

    res.json(lobby);
});

app.listen(3001, () => {
    console.log("SERVER RUNNING SUCCESSFULLY...");
});