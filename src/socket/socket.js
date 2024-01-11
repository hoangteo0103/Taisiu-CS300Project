class Socket {
    constructor() {
      this.socket = null

    }
  
    connect(url) {
      if (!this.socket) {
        this.socket = new WebSocket(url)
      }
    }
  
    disconnect() {
      if (this.socket) {
        this.socket.close()
        this.socket = null
      }
    }

    async send(message, payload) {
    console.log('send', message, payload)
    payload["event"] = message
    if (this.socket.readyState) {
        this.socket.send(JSON.stringify(payload))
    } else {
      setTimeout(() => {
        this.send(message, payload)
      }, 100);
    }
  }
  
    on(eventName, callback) {
      if (this.socket) {
        this.socket.addEventListener(eventName, callback)
      }
    }
  }
  
  export { Socket }