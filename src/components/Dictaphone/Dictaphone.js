import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition';
import DictaphoneContext from "../../context/dictaphone/dictaphoneContext";

const Dictaphone = ({ 
    transcript, 
    resetTranscript, 
    browserSupportsSpeechReconigition, 
    startListening, 
    stopListening,
    listening,
    finalTranscript 
    }) => {
    const dictaphoneContext = useContext(DictaphoneContext);
    const { updateTranscript, clearTranscript } = dictaphoneContext;
    useEffect( () => {
        updateTranscript(finalTranscript);
        
    }, [finalTranscript]);
    if(!browserSupportsSpeechReconigition) return (
        <div style={{ color: 'red' }}>
            Browser does not supports this
        </div>
    )
    const start = () => {
        clearTranscript()
        startListening();
    }

    const stop = () => {
        resetTranscript();
        stopListening();
        clearTranscript();
    }

    return(
        <div>
            <button onClick={ resetTranscript }>Reset</button>
            { listening ? <button onClick={stop}>Stop</button> : <button onClick={start}>Start</button> }
            <p>{transcript} - {finalTranscript}</p>
        </div>
    )
}

Dictaphone.propTypes = {
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechReconigition: PropTypes.bool,
}

const options = {
    autoStart: false,
}

export default SpeechRecognition(options)(Dictaphone);