import { Action } from "../messages/actions";

const authorsReducer = (state: string[] = [], action: Action) => {
  if (action.type === "ADD_MESSAGE") {
    return [...state, action.payload.message.author];
  }
  return state;
};

export default authorsReducer;
