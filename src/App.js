

import ChatBoxReciever, { ChatBoxSender } from "./components/ChatBox";
import ChatContainer from "./components/ChatContainer";
import InputText from "./components/InputText";


function App() {
  return (
    <div style={{backgroundColor: '#ece5dd' , height: '100vh'}}>
      <h1>Super Chat</h1>
      <ChatBoxReciever user='kody' avatar='https://picsum.photos/200/300' message='Hello' />
      <ChatBoxSender user='kazim' avatar='https://picsum.photos/200' message='aleykum salam' />
      <InputText addMessage={(message) => console.log(message.message)} />
      {/* <ChatContainer /> */}
    </div>
    
    
   
  );
}

export default App;
