import React from "react";
import { Message } from "../domain";

interface Props {
  message: Message;
}

const MessageView: React.FunctionComponent<Props> = ({
  message: { message, author },
}) => {
  return (
    <article role="listitem article">
      {message}
      <footer>{author}</footer>
    </article>
  );
};

export default MessageView;
