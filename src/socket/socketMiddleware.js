
export const socketMiddleware = (socket) => (params) => (next) => (action) => {
    const { dispatch, getState } = params
    const { type } = action
  
    switch (type) {
      case 'socket/connect':
        socket.connect('wss://example.com')
  
        socket.on('open', () => {})
        socket.on('message', (data) => {})
        socket.on('close', () => {})
        break
  
      case 'socket/disconnect':
        socket.disconnect()
        break
  
      default:
        break
    }
  
    return next(action)
  }