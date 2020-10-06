import React from "react";
import { Message } from "../domain";
import MessageView from "./MessageView";

const messages: Message[] = [
  { id: "a", author: "Christian", message: "Das bin ich (nicht)", date: 2 },
  { id: "b", author: "Elmar", message: "Das bin ich (nicht)", date: 3 },
  { id: "c", author: "Christian", message: "Wohl!", date: 4 },
];

interface Props {}

const MessageList: React.FunctionComponent<Props> = () => {
  return (
    <div role="list">
      {messages.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
