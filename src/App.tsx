import React from "react";
import MessageCompose from "./components/MessageCompose";
import MessageList from "./components/MessageList";
import { Message } from "./domain";

function App() {
  const [state, setState] = React.useState<readonly Message[]>([]);

  React.useEffect(() => {
    fetch("/messages.json")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  const handleMessageSend = (text: string) => {
    const newMessage = {
      author: "elmar",
      message: text,
      id: `${Date.now()}`,
      date: Date.now(),
    };

    setState((oldState) => [...oldState, newMessage]);
  };

  const handleRemoveChristiansMessages = () => {
    setState((oldMessages) =>
      oldMessages.filter((message) => message.author !== "Christian")
    );
  };

  return (
    <>
      <MessageList messages={state} />
      <MessageCompose onMessageSend={handleMessageSend} />
      <button onClick={handleRemoveChristiansMessages}>
        Entferne Christians Nachrichten
      </button>
    </>
  );
}

export default App;
