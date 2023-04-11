
import React from 'react'
import '../index.css'

const Conversation = () => {
    return (
      <section class="current-chat-container">
        <div class="current-chat-settings">
          <div class="current-photo-name-container">
            <div class="current-chat-profile-picture">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div>
              <p>Hitesh Choudhary</p>
            </div>
          </div>
          <div class="settings">
            <img src="https://img.icons8.com/ios-glyphs/21/null/search--v1.png" />
            <img
              class="m-2"
              src="https://img.icons8.com/ios-filled/18/null/menu-2.png"
            />
          </div>
        </div>

        

        <div class="chat-date">
          <p>TODAY</p>
        </div>
        <div class="chats-received">
          <p class="msg-received">Hi</p>
          <p class="msg-received-time">12:40 PM</p>
        </div>
        <div class="chats-sent">
          <p class="msg-sent">How are you sir?</p>
          <p class="msg-sent-time">12:45 PM</p>
        </div>

        
        <div class="sent-messege-container">
          <div>
            <img
              class="smile-button"
              src="https://img.icons8.com/material-outlined/24/null/smiling.png"
            />
            <img
              class="attach-button"
              src="https://img.icons8.com/ios/24/null/attach.png"
            />
          </div>
          <div class="sent-messege-input">
            <input type="text" placeholder="Type a message" />
          </div>
          <div class="sent-voice-msg-button">
            <img src="https://img.icons8.com/material-sharp/24/null/microphone--v1.png" />
          </div>
        </div>
      </section>
    );
}

export default Conversation
