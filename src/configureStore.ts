import { applyMiddleware, createStore, Dispatch, compose } from "redux";
import { useDispatch } from "react-redux";
import applicationReducer, { ApplicationState } from "./redux/reducer";
import { Action } from "./redux/messages/actions";
import thunk, { ThunkDispatch } from "redux-thunk";
import apiMiddleware from "./redux/apiMiddleware";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const configureStore = () => {
  const persistConfiguration = {
    key: "root",
    storage: storage,
  };

  const applicationReducerWithPersist = persistReducer(
    persistConfiguration,
    applicationReducer
  );

  const composeEnhancers =
    // @ts-ignore yolo
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    applicationReducerWithPersist,
    composeEnhancers(applyMiddleware(apiMiddleware), applyMiddleware(thunk))
  );

  return {
    store: store,
    persistor: persistStore(store),
  };
};

export default configureStore;

/* custom hooks */

export const useOurDispatch = () => {
  const dispatch = useDispatch<
    ThunkDispatch<ApplicationState, unknown, Action>
  >();

  return dispatch;
};
