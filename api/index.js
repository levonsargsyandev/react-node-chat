import express from "express";
import {Server} from 'socket.io';
import router from "./router.js";
import http from "http";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
const server = http.createServer(app);
const io = new Server(server);
server.listen(process.env.PORT, () => {
    console.log('listening on *:5000');
});

io.on('connection', (socket) => {
    socket.on('message', ({name,message}) => {
        io.emit('message', {name,message});
        console.log({name,message});
    });
});