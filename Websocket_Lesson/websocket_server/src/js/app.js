// "use strict";

// import "./../css/styles.css";

// const app = require("express")();
// const http = require("http").Server(app);
// const io = require("socket.io")(http);

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const history = [];

io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("connected", history);

  socket.on("chat-message", (message) => {
    history.push(message);
    socket.broadcast.emit("chat-message", message);
    console.log(`Received message - ${JSON.stringify(message)}`);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("listening on port 3000");
});
