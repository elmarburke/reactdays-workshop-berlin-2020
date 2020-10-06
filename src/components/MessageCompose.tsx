import React from "react";

interface Props {
  onMessageSend: (messageText: string) => void;
}

const MessageCompose: React.FunctionComponent<Props> = ({ onMessageSend }) => {
  const [inputValue, setInput] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onMessageSend(inputValue);
    setInput("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue} />
      <button type="submit">Absenden</button>
      <p>aktuell in state: {inputValue}</p>
    </form>
  );
};

export default MessageCompose;
