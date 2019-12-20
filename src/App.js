import React from 'react';
import './App.css';
import Dictaphone from "./components/Dictaphone/Dictaphone";
import Transcript from "./components/Dictaphone/Transcript";
import DictaphoneState from "./context/dictaphone/DictaphoneState";

const App = () => {
  return (
    <DictaphoneState>
      <div className="App">
        <h1>Speech to Text converter</h1>
        <Dictaphone browserSupportsSpeechReconigition />
        <Transcript />
      </div>
    </DictaphoneState>
  );
}

export default App;
