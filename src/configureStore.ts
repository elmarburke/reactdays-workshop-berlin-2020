import { applyMiddleware, createStore, Dispatch } from "redux";
import { useDispatch } from "react-redux";
import applicationReducer from "./redux/reducer";
import { Action } from "./redux/messages/actions";
import thunk from "redux-thunk";

const configureStore = () => {
  const composeEnhancers =
    // @ts-ignore yolo
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    applicationReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;

/* custom hooks */

export const useOurDispatch = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  return dispatch;
};
