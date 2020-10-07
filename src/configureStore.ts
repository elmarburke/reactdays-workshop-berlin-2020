import { createStore } from "redux";
import { Message } from "./domain";

/* Actions */

const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  payload: { message },
});

/* Reducer */

interface State {
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
