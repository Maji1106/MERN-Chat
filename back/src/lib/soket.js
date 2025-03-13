import { server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new server(server, {
  cors: {
    origin: [process.env.FRONTEND_URL],
  },
});

const userSocketMap = {}; //{userId:socketId}

io.on("connection", (Socket) => {
  console.log("A User connect", Socket.id);
  const userId = Socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = Socket.id;
  }
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  Socket.on("disconnect", () => {
    console.log("A user disconneted", Socket.id);
    delete userSocketMap[userId];
  });
});
