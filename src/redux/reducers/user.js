// userReducer.js

const initialState = {
    user: null, // or you can initialize it with default user data
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'CLEAR_USER':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  