import { createStore, Dispatch } from "redux";
import { useDispatch } from "react-redux";
import applicationReducer from "./redux/reducer";
import { Action } from "./redux/messages/actions";

const configureStore = () => {
  return createStore(
    applicationReducer,
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
