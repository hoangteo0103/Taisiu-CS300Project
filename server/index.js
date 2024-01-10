const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const cors = require("cors");

app.use(cors());


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("User connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected: ", socket.id);
    });

    socket.on("sound", (data) => {
        socket.broadcast.emit("receive_sound", data);
    });

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log("User joined room: ", data);
    });
});

server.listen(3001, () => {
    console.log("Server is running on port 3001");
});

