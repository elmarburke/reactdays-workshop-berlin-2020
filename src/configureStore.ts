import { createStore, Dispatch } from "redux";
import { Message } from "./domain";
import { useDispatch } from "react-redux";

/* Actions */

const ADD_MESSAGE = "ADD_MESSAGE";
const LOAD_MESSAGE_SUCCEEDED = "LOAD_MESSAGE_SUCCEEDED";

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

export const loadMessageSucceeded = (
  messages: readonly Message[]
): LoadMassageSucceeded => ({
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

const reducer = (state = initialState, action: Action): State => {
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

export const getAllMessages = (state: State) => state.messages;

const configureStore = () => {
  return createStore(
    reducer,
    // @ts-ignore yolo
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;

/* custom hooks */

export const useOurDispatch = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  return dispatch;
};
