import React from "react";
import { useSelector } from "react-redux";
import { Message } from "../domain";
import { useOurDispatch } from "../configureStore";
import { getAllMessages } from "../redux/messages/reducer";
import {
  addMessage,
  fetchAllMessagesFromServer,
  loadMessageSucceeded,
} from "../redux/messages/actions";

const useMessages = () => {
  const messages = useSelector(getAllMessages);
  const dispatch = useOurDispatch();

  // const [, setState] = React.useState<readonly Message[]>([]);

  React.useEffect(() => {
    // @ts-ignore
    dispatch(fetchAllMessagesFromServer());
  }, [dispatch]);

  const sendMessage = (message: Message): void => {
    dispatch(addMessage(message));
  };

  return { messages, sendMessage };
};

export default useMessages;
