import React from "react";
import { Message } from "../generated/graphql";
import MessageView, { MessageViewProps } from "./MessageView";

type MessageItem = MessageViewProps["message"] & Pick<Message, "id">;

interface Props {
  messages: readonly (MessageItem | null)[];
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
      {messages.map((message) =>
        message === null ? (
          <div style={{ color: "red" }}>Message not found </div>
        ) : (
          <MessageView key={message.id} message={message} />
        )
      )}
    </div>
  );
};

export default MessageList;
