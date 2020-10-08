import authorsReducer from "./authors/reducer";
import messagesReducer, { MessagesState } from "./messages/reducer";

export interface ApplicationState {
  messages: MessagesState;
  authors: any;
}

const applicationReducer = (state: any = {}, action: any) => {
  return {
    messages: messagesReducer(state.messages, action),
    authors: authorsReducer(state.authors, action),
  };
};

export default applicationReducer;
