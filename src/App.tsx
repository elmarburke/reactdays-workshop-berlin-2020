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
