import React from "react";
// $ yarn add @types/styled-components
import styled from "styled-components";
import { Message } from "../domain";

const MessageItem = styled.article`
  font-family: "Comic Sans MS", "Helvetica", sans-serif;
  color: hotpink;

  border-bottom: 1px black solid;

  & + & {
    border-bottom: none;
  }
`;

interface Props {
  message: Message;
}

const MessageView: React.FunctionComponent<Props> = ({
  message: { message, author },
}) => {
  return (
    <MessageItem role="listitem article">
      {message}
      <footer>{author}</footer>
    </MessageItem>
  );
};

export default MessageView;
