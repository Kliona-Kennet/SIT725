var express = require("express");
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('A user is connected');

  const intervalId = setInterval(() => {
    const message = `Server time: ${new Date().toLocaleTimeString()}`;
    socket.emit('update', message);
  }, 5000);

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    clearInterval(intervalId);
  });
});

http.listen(port, () => console.log(`App listening to: http://localhost:${port}`));