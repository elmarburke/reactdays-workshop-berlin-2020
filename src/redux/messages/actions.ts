import { Dispatch } from "redux";
/* Actions */

import { Message } from "../../domain";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const FETCH_MESSAGES_SUCCEEDED = "FETCH_MESSAGES_SUCCEEDED";

interface AddMessage {
  //oder: type: typeof ADD_MESSAGE
  type: "ADD_MESSAGE";

  payload: {
    message: Message;
  };
}
interface AddMessageSucceeded {
  type: "ADD_MESSAGE_SUCCEEDED";

  payload: {
    message: Message;
  };
}

interface FetchMessagesSucceeded {
  type: typeof FETCH_MESSAGES_SUCCEEDED;
  payload: readonly Message[];
}

export type Action = AddMessage | FetchMessagesSucceeded | AddMessageSucceeded;

// export const addMessage = (message: Message): AddMessage => ({
//   type: ADD_MESSAGE,
//   payload: { message },
// });

export const addMessage = (message: Message): AddMessage => ({
  type: ADD_MESSAGE,
  // @ts-ignore
  isApiRequest: true,
  property: "message",
  url: "/messages",
  method: "POST",
  data: message,
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
): FetchMessagesSucceeded => ({
  type: FETCH_MESSAGES_SUCCEEDED,
  payload: messages,
});

export const fetchAllMessagesFromServer = () => ({
  type: "FETCH_MESSAGES",
  isApiRequest: true,
  url: "/messages",
});

export const fetchAllMessagesFromServerOld = () => (
  dispatch: Dispatch<Action>
) => {
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

      dispatch(loadMessageSucceeded(data));
    });
};

// // Action Creator mit thunk in langer schreibweise
// export const fetchAllMessagesFromServer = function () {
//   return function (dispatch: any) {
//     setInterval(function () {
//       dispatch({ type: "Hello World" });
//     }, 1000);
//   };
// };

// Action Creator mit thunk in kurzer schreibweise
// export const fetchAllMessagesFromServer = () => (dispatch: any) => {
//   setInterval(() => {
//     dispatch({ type: "Hello World" });
//   }, 1000);
// };

// // Beispiel für Jan
// export const fetchAllMessagesFromServer3 = () => (dispatch: Dispatch<any>) => {
//   dispatch({ type: "MESSAGE_LOAD_STARTED" });

//   fetch("/messages.json")
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch({ type: "MESSAGE_LOAD_SUCCEEDED", data: data });
//     })
//     .catch(() => {
//       dispatch({ type: "MESSAGE_LOAD_FAILED" });
//     });
// };
