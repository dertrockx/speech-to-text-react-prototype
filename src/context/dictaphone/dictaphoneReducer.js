import {
    CLEAR_TRANSCRIPT,
    UPDATE_TRANSCRIPT
} from '../types';

export default (state, action) => {
    switch(action.type){
        case UPDATE_TRANSCRIPT:
            return {
                ...state,
                transcript: action.payload + ','
            }
        case CLEAR_TRANSCRIPT:
            return {
                ...state,
                transcript: null
            }
        default:
            return state
            
    }
}