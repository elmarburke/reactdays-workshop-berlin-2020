/* Reducer */

import { Message } from "../domain";
import { Action, ADD_MESSAGE, LOAD_MESSAGE_SUCCEEDED } from "./actions";

export interface State {
  readonly messages: readonly Message[];
}

const initialState: State = {
  messages: [],
};

const applicationReducer = (state = initialState, action: Action): State => {
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

export default applicationReducer;
