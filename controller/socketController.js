const socketio = require("socket.io");
const io = socketio();
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const formatMessage = require("../utils/messages");
const otpController = require("../controller/otpController");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("../utils/users");
const ChatModel = require("../models/chatModel");

exports.chat = (http) => {
  // const wrap = (otpController.protect = (socket, next) =>
  //   otpController.protect(socket.request, {}, next));

  app.use(express.static("public"));
  const io = require("socket.io")(http,
    {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });

  io.on("connection", (socket) => {
    console.log("connyerf");


    socket.on("join", ({ name, room }, callback) => {
      const { error, user } = userJoin(socket.id, name, room)
      if (error) return callback(error)
      socket.emit("message", { user: `${user.username}`, text: `${user.username}, welcome to the room ${user.room}` })
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: "New user has joined" });
      socket.join(user.room);
      //
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      })
      callback();
    });

    socket.on("chatMessage", (msg, callback) => {
      const user = getCurrentUser(socket.id);
      io.to(user.room).emit("message", formatMessage(user.username, msg));

      // let chatMessage = new ChatModel({
      //   message: msg,
      //   sender: user.username,
      //   time: user.time,
      //   room: user.room
      // })

      // chatMessage.save();
      callback();
    });

    // socket.on('e')
  });
};

exports.roomchat = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      room: req.params.id,
    });
    res.status(200).json({
      status: "true",
      data: chat,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
