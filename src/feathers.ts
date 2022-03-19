import feathers from '@feathersjs/client';
import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';

let HOST =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_HOST
    : process.env.REACT_APP_LOCAL_HOST;

//@ts-ignore
const socket = io(HOST, {
  transports: ['websocket'],
  forceNew: true,
  timeout: 10000,
});

//@ts-ignore
const feathersClient = feathers();

feathersClient.configure(socketio(socket));
feathersClient.configure(auth());

export default feathersClient;
