const mongoose = require('mongoose');

const LobbySchema = new mongoose.Schema({
    lobbyid: {
        type: String,
        required: true,
    },
    host: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true
    }
});

const LobbyModel = mongoose.model("lobbies", LobbySchema);
module.exports = LobbyModel;