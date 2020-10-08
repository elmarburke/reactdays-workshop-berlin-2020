import React from "react";
import { useSelector } from "react-redux";
import { Message } from "../domain";
import {
  addMessage,
  loadMessageSucceeded,
  useOurDispatch,
  getAllMessages,
} from "../configureStore";

const useMessages = () => {
  const messages = useSelector(getAllMessages);
  const dispatch = useOurDispatch();

  // const [, setState] = React.useState<readonly Message[]>([]);

  React.useEffect(() => {
    fetch("/messages.json")
      .then((response) => response.json())
      .then((data: unknown) => {
        // in einer echten anwendung gucken wir ob die daten so sind wie es uns versprochen wurde.
        // => TS ist nur zur Development time

        if (!Array.isArray(data)) {
          throw new TypeError("Data is not an array");
        }

        if (
          !data.every((item) => {
            return (
              typeof item.id === "string" && typeof item.message === "string"
            );
          })
        ) {
          throw new TypeError("Data items are not valid");
        }

        //data.forEach((message) => dispatch(addMessage(message)));
        dispatch(loadMessageSucceeded(data));
      });
  }, [dispatch]);

  const sendMessage = (message: Message): void => {
    dispatch(addMessage(message));
  };

  return { messages, sendMessage };
};

export default useMessages;
