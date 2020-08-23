import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(['hello', 'Hi', 'Whats up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send a message goes here
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Facebook Messenger Clone 🚀 </h1>

      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
      {/* input field */}
      {/* button */}

      {/* messages themselves */}
    </div>
  );
}

export default App;
