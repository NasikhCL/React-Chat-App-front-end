import React from 'react'
import '../index.css'
import FriendCard from './FriendCard'

const ChatList = ({profileData, friendsArr, passSetCurrentConvo}) => {
    console.log(profileData.picture)
    return (
        <section className="chat-list-container">
        <div className="user-settings">
            <div className="user-profile-picture">
                <img src={profileData.picture} alt="" /> 
            </div>
            <div style={{fontWeight:'600'}}>{profileData.name}</div>
            <div className="settings">
               
                <img className="m-2" src="https://img.icons8.com/ios/25/null/loading.png"/>
                <img className="m-2" src="https://img.icons8.com/ios-filled/25/null/sms.png"/>
                <img className="m-2" src="https://img.icons8.com/ios-filled/20/null/menu-2.png"/>
            </div>
        </div>
        <div className="search-section">
            <img className="search-button" src="https://img.icons8.com/ios-glyphs/17/null/search--v1.png" />
            <input className="search-box" type="text" placeholder="Search or start new chat" />
        </div>

        <div className="chat-list">
           {friendsArr.map(friend=>{
            return(<FriendCard friendData={friend} passSetCurrentConvo={passSetCurrentConvo}/>)
           })}
         
        </div>
    </section>
      )
}

export default ChatList