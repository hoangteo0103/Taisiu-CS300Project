
import {socketURL} from '../constant'

export const socketMiddleware = (socket) => (params) => (next) => (action) => {
    const { dispatch, getState } = params
    const { type } = action
  
    switch (type) {
      case 'socket/connect':
        socket.connect(socketURL)
        dispatch({ type: 'socket/set', payload: socket });
        break
      case 'socket/create_new_game':
        socket.send('create_new_game', action.payload)
        break
      case 'socket/disconnect':
        socket.disconnect()
        break
  
      default:
        break
    }
  
    return next(action)
  }