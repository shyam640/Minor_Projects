const express = require('express');
const http = require('http');
const chalk = require('chalk');
const path = require('path');
const socketio = require('socket.io');
const Filter = require('bad-words');
const { generateMessage , generateLocationMessage } = require('./utils/messages');
const { addUser , removeUser , getUser , getUsersInRoom } = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Creating port 
const port = process.env.PORT || 3000;

// Defining path to public directory
const pathToPublicDir = path.join(__dirname,'../public');

app.use(express.static(pathToPublicDir));

app.get('', (req,res) => {
   res.render('index',{
      title : 'Chat-App NodeJS',
      name : 'its_shyam640'
   });
});

io.on('connection', (socket) => {
   

   socket.on('join',(options , callback) => {
      const {error , user} = addUser({ id : socket.id , ...options });

      if(error){
         return callback(error);
      }

      socket.join(user.room);

      socket.emit('message', generateMessage('CoolTalks','Welcome user!'));
      socket.broadcast.to(user.room).emit('message',generateMessage('CoolTalks',`${user.username} has joined the Room!`));
      io.to(user.room).emit('roomData',{
         room : user.room,
         users : getUsersInRoom(user.room)
      });
      callback();
   })

   socket.on('sendMessage', (message,callback) => {
      const user = getUser(socket.id);
      const filter = new Filter();
      if(filter.isProfane(message)){
         return callback('Your message contains bad words!')
      }
      io.to(user.room).emit('message',generateMessage(user.username , message));
      callback();
   });

   socket.on('sendLocation',(coords , callback) => {
      const user = getUser(socket.id);
      io.to(user.room).emit('locationMessage',generateLocationMessage(user.username , `https://google.com/maps?q=${coords.latitude},${coords.longitude}`));
      callback();
   });

   socket.on('disconnect', () => {
      const user = removeUser(socket.id);
      if(user){
         io.to(user.room).emit('message',generateMessage('CoolTalks',`${user.username} has left the ${user.room}!`));
         io.to(user.room).emit('roomData' , {
            room : user.room,
            users : getUsersInRoom(user.room)
         });
      }
      
   });
   
});

server.listen(port , () => {
   // console.log(chalk.green.bold('Listening on port ' + port));
   console.log(chalk.green.bold(`Listening on port ${port}`));
});