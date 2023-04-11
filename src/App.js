import './App.css';
import ChatList from './components/ChatList';
import Conversation from './components/Conversation';

function App() {
  return (
    <div className="App">
      <div class="whatsapp-background-top"></div>
      <div class="whatsapp-background-bottom"></div>
      <ChatList />
      <Conversation />
    </div>
  );
}

export default App;
