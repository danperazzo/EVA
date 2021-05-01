import server from './app';

console.log("Listening port" + process.env.PORT)
server.listen(process.env.PORT);