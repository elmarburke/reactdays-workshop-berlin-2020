import React from "react";

interface Props {
  /** my opinion on react */
  opinion: string;
  name: string;
}

const MessageView: React.FunctionComponent<Props> = ({ opinion, name }) => {
  return (
    <article>
      {opinion}
      <footer>{name}</footer>
    </article>
  );
};

export default MessageView;
