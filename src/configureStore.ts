import { applyMiddleware, createStore, Dispatch } from "redux";
import { useDispatch } from "react-redux";
import applicationReducer, { ApplicationState } from "./redux/reducer";
import { Action } from "./redux/messages/actions";
import thunk, { ThunkDispatch } from "redux-thunk";

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
  const dispatch = useDispatch<
    ThunkDispatch<ApplicationState, unknown, Action>
  >();

  return dispatch;
};
