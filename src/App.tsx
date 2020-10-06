import React from "react";
import MessageCompose from "./components/MessageCompose";
import MessageList from "./components/MessageList";

function App() {
  const handleMessageSend = (text: string) => {
    console.log("new message", text);
  };

  return (
    <>
      <MessageList />

      <MessageCompose onMessageSend={handleMessageSend} />
    </>
  );
}

export default App;
