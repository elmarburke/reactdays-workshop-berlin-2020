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
    <form onSubmit={handleSubmit} className="message-compose">
      <label htmlFor="message-text">Message Text</label>
      <input
        id="message-text"
        onChange={handleChange}
        value={inputValue}
        className="message-compose--message-text"
      />
      <button type="submit">Absenden</button>
      <p>aktuell im state: {inputValue}</p>
    </form>
  );
};

export default MessageCompose;
