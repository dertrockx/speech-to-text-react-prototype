import React, { useReducer } from "react";
import DictaphoneContext from "./dictaphoneContext";
import dictaphoneReducer from './dictaphoneReducer';
import {
    CLEAR_TRANSCRIPT,
    UPDATE_TRANSCRIPT
} from '../types';


const DictaphoneState = props => {
    const initialState = {
        transcript: null
    }

    const [ state, dispatch ] = useReducer(dictaphoneReducer, initialState);
    
    const updateTranscript = text => {
        dispatch({
            type: UPDATE_TRANSCRIPT,
            payload: text
        })
    }

    const clearTranscript = () => {
        dispatch({
            type: CLEAR_TRANSCRIPT
        })
    }

    return(
        <DictaphoneContext.Provider value={{
            transcript: state.transcript,
            updateTranscript,
            clearTranscript
        }}>
            { props.children }
        </DictaphoneContext.Provider>
    )

}

export default DictaphoneState;