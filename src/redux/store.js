// import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { Socket } from '../socket/socket'
import {socketMiddleware} from '../socket/socketMiddleware'

export default function createStore(){
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware(),
            socketMiddleware(new Socket()),    
        ],
            devTools: process.env.NODE_ENV !== 'production',}
    )
}