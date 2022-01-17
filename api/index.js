import express from "express";
import { Server } from "socket.io";
import router from "./router.js";
import http from "http";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    // options
});

io.on("connection", (socket) => {

});

app.use(router);
app.listen(process.env.PORT);