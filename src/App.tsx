import React from "react";
import MessageView from "./components/MessageView";
import { Message } from "./domain";

function App() {
  const message: Message = {
    id: "1",
    author: "Elmar",
    message: "React ist super",
    date: 1601985063010,
  };

  return <MessageView message={message} />;
}

export default App;
