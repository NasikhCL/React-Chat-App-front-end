import React, { useRef, useEffect, useState } from 'react';
import '../index.css'

const Conversation = ({convoDetails, addMessage}) => { 
  const messagesRef = useRef(null);
  const [inputData, setInputData] = useState('')
  const handleSubmit =(e)=>{
    addMessage(e.target.value)
    setInputData('') 
  }
  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  });


    return (
      <section className="current-chat-container">
        <div className="current-chat-settings">
          <div className="current-photo-name-container">
            <div className="current-chat-profile-picture">
              <img
                src={convoDetails.picture}
                alt=""
              />
            </div>
            <div>
              <p>{convoDetails.name}</p>
            </div>
          </div>
          <div className="settings">
            <img src="https://img.icons8.com/ios-glyphs/21/null/search--v1.png" alt=''/>
            <img className="m-2"
              src="https://img.icons8.com/ios-filled/18/null/menu-2.png" alt=''
            />
          </div>
        </div>

        

        {/* <div className="chat-date">
          <p>TODAY</p>
        </div> */}
        {/* <div>
          <div className="chats-received">
            <p className="msg-received">Hi</p>
            <p className="msg-received-time">12:40 PM</p>
          </div>
          <div className="chats-sent">
            <p className="msg-sent">How are you sir?</p>
            <p className="msg-sent-time">12:45 PM</p>
          </div>
        </div> */}
        <div className='chat-convo-container' ref={messagesRef}>

        {
          convoDetails.chatlog.map(msg=>{
            return( 
              <div className={msg.side === 'right' ? 'side-right' : 'side-left'}>
                <p className="msg-sent">{msg.text}</p> 
                <p className="msg-sent-time">{msg.timestamp}</p>
              </div>
            )
          })
        }
        </div>
        
       
        

        
        <div className="sent-messege-container">
          <div>
            <img
              className="smile-button"
              src="https://img.icons8.com/material-outlined/24/null/smiling.png" alt=''
            />
            <img
              className="attach-button"
              src="https://img.icons8.com/ios/24/null/attach.png" alt='' 
            /> 
          </div>
          <div className="sent-messege-input">
            <input type="text" placeholder="Type a message" value={inputData} onChange={(e)=>setInputData(e.target.value)} onKeyDown={(e)=> (e.key === 'Enter') && handleSubmit(e) }/>
          </div>
          <div className="sent-voice-msg-button">
            <img src="https://img.icons8.com/material-sharp/24/null/microphone--v1.png" alt=''/>
          </div>
        </div>
      </section>
    );
}

export default Conversation
