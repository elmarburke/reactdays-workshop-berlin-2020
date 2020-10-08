import React from "react";
// $ yarn add @types/styled-components
import styled from "styled-components/macro";
import { Message } from "../domain";

const MessageItem = styled.article`
  font-family: "Helvetica", sans-serif;
  color: hotpink;

  & + & {
    border-top: 1px black solid;
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
