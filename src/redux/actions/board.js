import {SET_BOARD_SIZE, CALC_SITE_POSITIONS, SET_IS_DONE, SET_IS_END } from './actionTypes'

export function setBoardSize(data){
    return ({
        type: SET_BOARD_SIZE,
        payload: data
    });
}

export function calculateSitePositions(data){
    return {
        type: CALC_SITE_POSITIONS,
        payload: data
    }
}

export function setIsDone(isDone){
    return {
        type: SET_IS_DONE,
        payload: isDone
    }
}

export function setIsEnd(isEnd){
    return {
        type: SET_IS_END,
        payload: isEnd
    }
}