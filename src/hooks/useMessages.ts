import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Message } from "../domain";
import {
  State,
  addMessage,
  loadMessageSucceeded,
  useOurDispatch,
  fetchMessages,
} from "../configureStore";

const useMessages = () => {
  const messages = useSelector((state: State) => state.messages);
  const dispatch = useOurDispatch();

  // const [, setState] = React.useState<readonly Message[]>([]);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const sendMessage = (message: Message): void => {
    dispatch(addMessage(message));
  };

  return { messages, sendMessage };
};

export default useMessages;
