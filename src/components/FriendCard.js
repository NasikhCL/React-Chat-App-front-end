import React from 'react'
import '../index.css'

const FriendCard = ({friendData,passSetCurrentConvo}) => {
    console.log(friendData);
    let lastMsg = friendData.lastChat.length > 9 ? friendData.lastChat.slice(0, 45) + " ..." : friendData.lastChat
    console.log(lastMsg) 
  return (
    <div className="chat-card" onClick={()=> passSetCurrentConvo(friendData.id)}>
                <div className="chat-profile-photo">
                    <img src={friendData.picture} alt="" />
                </div>
                <div className="chat-profile-details"> 
                    <div className="about-profile">
                        <h4 className="chat-profile-name">{friendData.name}</h4>
                        <p className="latest-msg">{lastMsg}</p> 
                    </div>
                    <div className="chat-time">
                        <p>{friendData.latest_timestamp}</p>
                    </div>
                </div>
            </div>
  )
}

export default FriendCard