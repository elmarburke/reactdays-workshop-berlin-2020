import React from "react";
import { Message } from "../domain";
import MessageView from "./MessageView";

interface Props {
  messages: readonly Message[];
}

const MessageList: React.FunctionComponent<Props> = ({ messages }) => {
  return (
    <div
      role="list"
      style={{
        borderColor: "papayawhip",
        borderStyle: "solid",
        borderWidth: 1,

        padding: ".5rem",
      }}
    >
      {messages.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
