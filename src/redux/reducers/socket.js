const initialState = {
    socket: null,
  };
  
  const socketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'socket/set':
        return {
          ...state,
          socket: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default socketReducer;
  