import React, { useState, useEffect } from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core/';
import './App.css';
import Message from './Message';
import db from './firebase';


function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {username: 'Bryce', message: 'Hi'}, 
    {username: 'Sarah', message: 'Hello'}
  ]);
  const [username, setUsername] = useState('');

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [] )

  useEffect(() => {
    // const username = prompt('Please enter your name')
    setUsername(prompt('Please enter your name'))

    //run code here...
    // if its blank inside [], this code runs ONCE when the app component loads
  }, [] ) //condition

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([
      ...messages, 
      { username: username, text: input}
    ]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Facebook Messenger Clone 🚀 </h1>
      <h2>Welcome {username} </h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      
      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }

    </div>
  );
}

export default App;
