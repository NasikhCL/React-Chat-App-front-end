import React from 'react'
import '../index.css'
import FriendCard from './FriendCard'

const ChatList = () => {
    return (
        <section class="chat-list-container">
        <div class="user-settings">
            <div class="user-profile-picture">
                <img src="https://media.licdn.com/dms/image/D5603AQFelednnKJlJg/profile-displayphoto-shrink_400_400/0/1667584272134?e=1682553600&v=beta&t=ZpNiI5qmaz39IMDdsUNeoGz84GBUsa7Hegwbsx5WX_Q" alt="" />
            </div>
            <div class="settings">
               
                <img class="m-2" src="https://img.icons8.com/ios/25/null/loading.png"/>
                <img class="m-2" src="https://img.icons8.com/ios-filled/25/null/sms.png"/>
                <img class="m-2" src="https://img.icons8.com/ios-filled/20/null/menu-2.png"/>
            </div>
        </div>
        <div class="search-section">
            <img class="search-button" src="https://img.icons8.com/ios-glyphs/17/null/search--v1.png" />
            <input class="search-box" type="text" placeholder="Search or start new chat" />
        </div>

        <div class="chat-list">
           <FriendCard /> 
           <FriendCard /> 
           <FriendCard /> 
           <FriendCard /> 
         
        </div>
    </section>
      )
}

export default ChatList