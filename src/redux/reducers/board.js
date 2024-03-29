import { CALC_SITE_POSITIONS, SET_BOARD_SIZE, SET_IS_DONE, SET_IS_END } from "../actions/actionTypes";
import {calculatePositions} from '../../utility/boardUtility'
const initialState = {
    side: null,
    rowWidth: null,
    positions: [],
    isDone: false,
    isEnd: false
}

export default function board(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case SET_BOARD_SIZE:
            return {
                ...state,
                side: payload.side,
                rowWidth: payload.rowWidth
            }
        case CALC_SITE_POSITIONS:
            let calculatedPositions = calculatePositions(payload)
            return {
                ...state,
                positions: calculatedPositions
            }
        case SET_IS_DONE:
            return {
                ...state,
                isDone: payload
            }
        case SET_IS_END:
            return {
                ...state,
                isEnd: payload
            }
        default:
            return state
    }
}