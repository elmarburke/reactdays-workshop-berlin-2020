/* Actions */

import { Message } from "../../domain";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const LOAD_MESSAGE_SUCCEEDED = "LOAD_MESSAGE_SUCCEEDED";

interface AddMessage {
  //oder: type: typeof ADD_MESSAGE
  type: "ADD_MESSAGE";

  payload: {
    message: Message;
  };
}

interface LoadMassageSucceeded {
  type: typeof LOAD_MESSAGE_SUCCEEDED;
  payload: {
    messages: readonly Message[];
  };
}

export type Action = AddMessage | LoadMassageSucceeded;

export const addMessage = (message: Message): AddMessage => ({
  type: ADD_MESSAGE,
  payload: { message },
});

export const addMessageFromNow = (
  message: string,
  author: string
): AddMessage => ({
  type: "ADD_MESSAGE",
  payload: {
    message: {
      date: Date.now(),
      id: `${Date.now()}`,
      author,
      message,
    },
  },
});

export const loadMessageSucceeded = (
  messages: readonly Message[]
): LoadMassageSucceeded => ({
  type: LOAD_MESSAGE_SUCCEEDED,
  payload: { messages },
});
