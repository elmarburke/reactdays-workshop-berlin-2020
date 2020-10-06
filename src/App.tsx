import React from "react";
import MessageCompose from "./components/MessageCompose";
import MessageList from "./components/MessageList";
import { Message } from "./domain";

const messages: Message[] = [
  { id: "a", author: "Christian", message: "Das bin ich (nicht)", date: 2 },
  { id: "b", author: "Elmar", message: "Das bin ich (nicht)", date: 3 },
  { id: "c", author: "Christian", message: "Wohl!", date: 4 },
];

function App() {
  const [state, setState] = React.useState(messages);

  const handleMessageSend = (text: string) => {
    console.log("new message", text);

    const newMessage = {
      author: "elmar",
      message: text,
      id: `${Date.now()}`,
      date: Date.now(),
    };

    setState((oldState) => [...oldState, newMessage]);
  };

  return (
    <>
      <MessageList messages={state} />

      <MessageCompose onMessageSend={handleMessageSend} />
    </>
  );
}

export default App;
