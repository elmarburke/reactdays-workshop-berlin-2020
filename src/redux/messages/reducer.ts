/* Reducer */

import { Message } from "../../domain";
import { Action, ADD_MESSAGE, LOAD_MESSAGE_SUCCEEDED } from "./actions";
import { ApplicationState } from "../reducer";

export interface MessagesState {
  readonly messages: readonly Message[];
}

const initialState: MessagesState = {
  messages: [],
};

const messagesReducer = (
  state = initialState,
  action: Action
): MessagesState => {
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

export const getAllMessages = (state: ApplicationState): readonly Message[] =>
  state.messages.messages;

export default messagesReducer;
