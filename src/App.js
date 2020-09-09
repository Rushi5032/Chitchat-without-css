import React,{useState,useEffect} from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';

function App() {
const [input,setInput]=useState('');
const [messages,setMessages]=useState([]);
const [username,setUsername]=useState('');

useEffect(()=>{
  db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setMessages(snapshot.docs.map(doc=>doc.data()))
  })
  
},[])

useEffect(() => {
  setUsername(prompt('Enter your name'));
}, [])

const sendMessage =(event)=>{
  event.preventDefault();

  db.collection('messages').add({
    message:input,
    username:username,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

  setInput('');
}

  return (
    <div>
      <div className="App">
      <h1>:Spam mat karna:</h1>
      <h2>Welcome {username}</h2>
      <form>
        <input value={input} onChange={event=>setInput(event.target.value)}/>
        <button disabled={!input} type="submit" onClick={sendMessage}>send</button>
      </form>

      </div>
            <ul>
          {messages.map(message=>
            <Message username={username} message={message}
          />
          )}
      </ul>
    </div>
  );
}

export default App;
