import { createStore } from "redux";
import { Message } from "./domain";

/* Actions */

const ADD_MESSAGE = "ADD_MESSAGE";
const LOAD_MESSAGE_SUCCEEDED = "LOAD_MESSAGE_SUCCEEDED";

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  payload: { message },
});

export const loadMessageSucceeded = (messages: readonly Message[]) => ({
  type: LOAD_MESSAGE_SUCCEEDED,
  payload: { messages },
});

/* Reducer */

export interface State {
  readonly messages: readonly Message[];
}

const initialState: State = {
  messages: [],
};

const reducer = (state = initialState, action: any): State => {
  if (action.type === ADD_MESSAGE) {
    return {
      ...state,
      messages: [...state.messages, action.payload.message],
    };
  }

  if (action.type === LOAD_MESSAGE_SUCCEEDED) {
    return {
      ...state,
      messages: action.payload.messages,
    };
  }

  return state;
};

const configureStore = () => {
  return createStore(
    reducer,
    // @ts-ignore yolo
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;
