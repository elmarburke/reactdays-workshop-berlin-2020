import React from "react";
import { Message } from "../domain";

const useMessages = () => {
  const [state, setState] = React.useState<readonly Message[]>([]);

  React.useEffect(() => {
    fetch("/messages.json")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  const sendMessage = (message: Message): void => {
    // demnaechst noch HTTP Post etc...
    setState((oldState) => [...oldState, message]);
  };

  return { messages: state, sendMessage };
};

export default useMessages;
