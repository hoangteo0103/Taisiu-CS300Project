import { io } from 'socket.io-client';
import { socketURL } from '../constant';

// "undefined" means the URL will be computed from the `window.location` object
const URL = socketURL;

export const socket = io(URL, {
    transports: ['websocket', 'polling']
    }
    );