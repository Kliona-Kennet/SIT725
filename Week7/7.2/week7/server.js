var express = require("express");
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('An user is connected');
  socket.on('disconnected', () => {
    console.log('An user is disconnected');
  });
});

http.listen(port, () =>
  console.log(`App listening to: http://localhost:${port} `)
);