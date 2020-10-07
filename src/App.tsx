import React from "react";
import MessageCompose from "./components/MessageCompose";
import MessageList from "./components/MessageList";
import useMessages from "./hooks/useMessages";

function App() {
  const { messages, sendMessage } = useMessages();

  const handleMessageSend = (text: string) => {
    const newMessage = {
      author: "elmar",
      message: text,
      id: `${Date.now()}`,
      date: Date.now(),
    };

    sendMessage(newMessage);
  };

  return (
    <>
      <MessageList messages={messages} />
      <MessageCompose onMessageSend={handleMessageSend} />
    </>
  );
}

export default App;
