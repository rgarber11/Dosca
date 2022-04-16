const { json } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var user = new Schema({
    code:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    color:{
        type: String,
        default: "red",
        required: true,
    },
    
    //Permissions
    can_draw:{
        type: Boolean,
        default: true,
        required: true,
    },
    is_banned:{
        type: Boolean,
        default: false,
        required: true,
    }
})

var whiteboard = new Schema({
    code:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    host:{
        type: String,
        required: true,
    },
    users:[{
        type: user
    }]

})

const userSchema = mongoose.model('User', user);
const whiteboardSchema = mongoose.model('Whiteboard', whiteboard)

module.exports = { User: userSchema, Whiteboard: whiteboardSchema }