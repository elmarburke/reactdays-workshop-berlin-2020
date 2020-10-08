import React from "react";
// $ yarn add @types/styled-components
import styled from "styled-components/macro";
import { Message } from "../generated/graphql";

const MessageItem = styled.article`
  font-family: "Helvetica", sans-serif;
  color: hotpink;

  & + & {
    border-top: 1px black solid;
  }
`;

export interface MessageViewProps {
  message: Pick<Message, "text" | "author">;
}

const MessageView: React.FunctionComponent<MessageViewProps> = ({
  message: { text, author },
}) => {
  return (
    <MessageItem role="listitem article">
      {text}
      <footer>{author}</footer>
    </MessageItem>
  );
};

export default MessageView;
