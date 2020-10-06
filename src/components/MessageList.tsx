import React from "react";
import { Message } from "../domain";
import MessageView from "./MessageView";

interface Props {
  messages: Message[];
}

const MessageList: React.FunctionComponent<Props> = ({ messages }) => {
  return (
    <div role="list">
      {messages.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
