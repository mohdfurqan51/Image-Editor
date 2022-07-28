const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors : ['http://localhost:3000']});

io.on("connection", (socket) => {
  console.log("a client connected");

  socket.on('sendmsg', (data) => {
    console.log(data);
  })
});

const port = 5000;

const userRouter = require('./routers/userRouter');
const cors = require('cors');


app.use(express.json());
app.use( cors({origin : ['http://localhost:3000']}));

// middleware
app.use('/user', userRouter);


app.get('/add', (req, res) => {
    res.send('Response from Express!');
});

app.get('/', (req, res) => {
    res.send("Response from express");
})
app.get('/home', (req, res) => {
    res.send('Response from Express Home!');
});

httpServer.listen(port, () => console.log('server started'));
