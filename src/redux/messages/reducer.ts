/* Reducer */

import { Message } from "../../domain";
import { Action, ADD_MESSAGE, FETCH_MESSAGES_SUCCEEDED } from "./actions";
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

  if (action.type === FETCH_MESSAGES_SUCCEEDED) {
    return {
      ...state,
      messages: action.payload,
    };
  }

  return state;
};

export const getAllMessages = (state: ApplicationState): readonly Message[] =>
  state.messages.messages;

export default messagesReducer;
