import React, { useContext, useEffect } from 'react'
import DictaphoneContext from "../../context/dictaphone/dictaphoneContext";
import "./transcript.css";

const Transcript = () => {
    const dictaphoneContext = useContext(DictaphoneContext);
    const { transcript, listening } = dictaphoneContext;
    let end = null;
    const content = transcript.length ? (
        transcript.map( (text, key) => (
            <div className="card" key={key}>{ text }</div>
        ))
    ) : (
        listening ? (
            <div className="card bg-success">Transript is empty. Please speak to the microphone</div>
        ) : (
            <div className="card bg-danger">Mic is turned off. Please click start button first</div>
        )
    )
    const scroll = () => end.scrollIntoView({ behavior: "smooth" });
    useEffect( () => {
        scroll();
        // eslint-disable-next-line
    }, [transcript]);
    return (
        <div className="text-left margin-y-2" id="transcript">
            { content }
            <div 
                style={{ float: "left", clear: 'both' }}
                ref={ (el) => { end=el } }
            />
        </div>
    )
}

export default Transcript;