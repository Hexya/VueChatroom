import io from 'socket.io-client'; // SocketIo connection

const socket = io.connect('https://bddi-2019-chat.herokuapp.com');
// const socket = io.connect('https://10.12.0.164:3000')

const api = {
  get connected() {
    return socket.connected;
  },
  // Methods
  userRegister(username, avatar) {
    return new Promise((resolve, reject) => {
      socket.once('user registered', (user) => {
        resolve(user);
      });
      socket.once('error', (error) => {
        reject(error);
      });
      emitProxy('user register', {
        username,
        avatar,
      });
    });
  },
  messageSend(message = '') {
    emitProxy('message new', message);
  },
  commandSend(command, value = '') {
    this.messageSend(`/${command} ${value}`);
  },

  // Events
  onMessage(cb) {
    socket.on('message new', cb);
  },
  onUsersUpdate(cb) {
    socket.on('users update', cb);
  },
  onError(cb) {
    socket.on('chat error', cb);
  },
};

function emitProxy(event, ...args) { // ..args take all arguments after event
  if (socket.connected) { // if Connected
    socket.emit(event, ...args);
  } else { // if Disconnected
    console.log('Socket disconnected.. Waiting for connect..');
    socket.on('connect', () => { // Event connection
      console.log('Socket reconnected, emitting..');
      socket.emit(event, ...args);
    });
  }
}

export default {
  install(Vue, options) {
    Vue.prototype.$api = Vue.$api = api;
  },
};
