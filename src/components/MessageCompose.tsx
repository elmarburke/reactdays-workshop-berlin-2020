import React from "react";

interface Props {}

const MessageCompose: React.FunctionComponent<Props> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("message");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Absenden</button>
    </form>
  );
};

export default MessageCompose;
