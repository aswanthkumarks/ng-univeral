const socketEvents = {
    USER_CONNECTED: 'USER_CONNECTED',
    NEW_LOG: 'NEW_LOG',
};
module.exports.socketEvents = socketEvents;

var io = {};

module.exports.startSocketServer = function (app) {
    const streamingServer = require('http').createServer(app);
    io = require('socket.io')(streamingServer);
    io.on('connection', function (socket) {
        socket.emit(socketEvents.USER_CONNECTED, {});
        socket.on('disconnect', disconnectSocket(socket));
    });
    return streamingServer;
};

module.exports.emitNewLogEvent = function (data) {
    const socketIds = [];
    socketIds.forEach(socket => {
        io.to(socket).emit(socketEvents.NEW_LOG, data);
    });
};

const disconnectSocket = function (socket) {
    return function (data) {
    };
};

