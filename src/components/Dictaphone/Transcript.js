import React, { useContext } from 'react'
import DictaphoneContext from "../../context/dictaphone/dictaphoneContext";

const Transcript = () => {
    const dictaphoneContext = useContext(DictaphoneContext);
    const { transcript } = dictaphoneContext;

    return (
        <div>
            <p>{ transcript }</p>
        </div>
    )
}

export default Transcript;