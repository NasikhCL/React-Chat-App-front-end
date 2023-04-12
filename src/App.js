import { useEffect, useState } from 'react';
import './App.css';
import ChatList from './components/ChatList';
import Conversation from './components/Conversation';
import {datas} from './datas'
import ConvoIntro from './components/ConvoIntro';

 
function App() {
  const [messageDatas, setMessageDatas] = useState({...datas})
  const[currentConversation, setCurrentConversation] = useState({})

  const setCurrentConvo = (id)=>{
    const currentChat = messageDatas.friends.find(friend=> friend.id === id)
    setCurrentConversation(currentChat)
  }
  // console.log(datas)
    
  
  // useEffect(()=>{
  //   setMessageDatas(datas)

    

  // },[])
  console.log(currentConversation.length)
  return (
    <div className="App">
      <div className="whatsapp-background-top"></div>
      <div className="whatsapp-background-bottom"></div>
      <ChatList profileData={messageDatas.profile} friendsArr={messageDatas.profile.friends} passSetCurrentConvo={setCurrentConvo}/>
      {
       Object.keys(currentConversation).length === 0 ?   
        <ConvoIntro /> :
       <Conversation convoDetails={currentConversation} /> 
      }
    </div>
  );
}

export default App;
